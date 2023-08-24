const graphql = require("graphql")
const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} = graphql

const TeamType = new GraphQLObjectType({
    name:"Team",
    fields: ()=>({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        size: { type: GraphQLInt } 
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        team: {
            type: TeamType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent, args) {
                // Code to get data from DB
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})