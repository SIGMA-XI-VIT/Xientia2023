const mongoose = require("mongoose")
const Schema = mongoose.Schema

const participantSchema = new Schema({
    name: String,
    regno: String,
    teamId: String
})

const Participant = mongoose.model("participant", participantSchema)

module.exports = Participant