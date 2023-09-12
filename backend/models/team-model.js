const mongoose = require("mongoose")
const Schema = mongoose.Schema

const teamSchema = new Schema({
    name: String,
    size: Number
})

const Team = mongoose.model("team", teamSchema)

module.exports = Team