const graphql = require("graphql")
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} = graphql

const credentials = require("../secrets.json")
const spreadSheetId = require("../keys").google.sheetId
const { google } = require("googleapis")

const Participant = require("../models/participant-model")
const Team = require("../models/team-model")

const ParticipantType = new GraphQLObjectType({
    name:"Participant",
    fields: ()=>({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        regno: { type: GraphQLString },
        emailId: { type: GraphQLString },
        team: {
            type: TeamType,
            resolve(parent, args)
            {
                return Team.findById(parent.teamId)
            }
        }
    })
})

const TeamType = new GraphQLObjectType({
    name:"Team",
    fields: ()=>({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        size: { type: GraphQLInt },
        participants: {
            type: new GraphQLList(ParticipantType),
            resolve(parent, args)
            {
                return Participant.find({ teamId: parent.id })
            }
        }
    })
})

const ParticipantInputType = new GraphQLInputObjectType({
    name: "ParticipantInput",
    fields: ()=>({
        name: { type: new GraphQLNonNull(GraphQLString) },
        regno: { type: new GraphQLNonNull(GraphQLString) },
        emailId: { type: new GraphQLNonNull(GraphQLString) },
    })
})

const client = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
)
const sheets = google.sheets("v4")
const SubmissionType = new GraphQLObjectType({
    name: "Submission",
    fields: ()=>({
        teamName: { type: new GraphQLNonNull(GraphQLString) },
        numberOfMembers: { type: new GraphQLNonNull(GraphQLString) },
        teamLeaderEmail: { type: new GraphQLNonNull(GraphQLString) },
        pptLink: { type: new GraphQLNonNull(GraphQLString) },
    })
})

const dDay = new Date('2023-09-23T00:00:00')
const CountdownType = new GraphQLObjectType({
    name: "Countdown",
    fields: ()=>({
        days: { type: GraphQLInt },
        hours: { type: GraphQLInt },
        minutes: { type: GraphQLInt },
        seconds: { type: GraphQLInt },
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        participant: {
            type: ParticipantType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args)
            {
                return Participant.findById(args.id)
            }
        },
        team: {
            type: TeamType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args)
            {
                return Team.findById(args.id)
            }
        },
        participants: {
            type: new GraphQLList(ParticipantType),
            resolve(parent, args)
            {
                return Participant.find({})
            }
        },
        teams: {
            type: new GraphQLList(TeamType),
            resolve(parent, args)
            {
                return Team.find({})
            }
        },
        countdown: {
            type: CountdownType,
            resolve(parent, args)
            {
                const milliseconds = dDay - new Date()
                const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
                const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

                return {
                    "days": days,
                    "hours": hours,
                    "minutes": minutes,
                    "seconds": seconds
                }
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addTeam: {
            type: TeamType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                size: { type: new GraphQLNonNull(GraphQLInt) },
                members: { type: new GraphQLNonNull(GraphQLList(ParticipantInputType)) }
            },
            async resolve(parent, args)
            {
                let team = new Team({
                    name: args.name,
                    size: args.size
                })

                team = await team.save()
                
                for (const member of args.members)
                {
                    const participant = new Participant({
                        name: member.name,
                        regno: member.regno,
                        emailId: member.emailId,
                        teamId: team._id
                    })
                    participant.save()
                }

                return team;
            }
        },
        submitLink: {
            type: SubmissionType,
            args: {
                teamName: { type: GraphQLString },
                numberOfMembers: { type: GraphQLString },
                teamLeaderEmail: { type: GraphQLString },
                pptLink: { type: GraphQLString },
            },
            async resolve(parent, args)
            {
                try
                {
                    await client.authorize()
                    const response = await sheets.spreadsheets.values.append({
                        auth: client,
                        spreadsheetId: spreadSheetId,
                        range: "Sheet1",
                        valueInputOption: "RAW",
                        insertDataOption: "INSERT_ROWS",
                        resource: {
                            values: [[args.teamName, args.numberOfMembers, args.teamLeaderEmail, args.pptLink]]
                        }
                    })
            
                    console.log(response.data)
                    return {
                        teamName: args.teamName,
                        numberOfMembers: args.numberOfMembers,
                        teamLeaderEmail: args.teamLeaderEmail,
                        pptLink: args.pptLink,
                    }
                }
                catch (error)
                {
                    console.error("Error: ", error)
                    throw new Error(error.message)
                }
            }
        },
        // addParticipant: {
        //     type: ParticipantType,
        //     args: {
        //         name: { type: new GraphQLNonNull(GraphQLString) },
        //         teamId: { type: new GraphQLNonNull(GraphQLID) }
        //     },
        //     resolve(parent, args)
        //     {
        //         let participant = new Participant({
        //             name: args.name,
        //             teamId: args.teamId
        //         })
        //         return participant.save()
        //     }
        // }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})