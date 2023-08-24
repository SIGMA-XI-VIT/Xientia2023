const express = require("express")
const graphqlHTTP = require("express-graphql")
const cookie_session = require("cookie-session")
const passport = require("passport")

const auth_routes = require("./routes/auth-routes")
const countdown_routes = require("./routes/countdown-routes")
const submission_routes = require("./routes/submission-routes")

const passport_setup = require("./config/passport-setup")
const keys = require("./config/keys")

const app = express()
const port = 5000

// TEMPORARY MONGODB CONNECTION
const mongoose = require("mongoose")
mongoose.connect(keys.mongodb.dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });


app.use(cookie_session({
    maxAge: 24 * 60 * 60 * 1000,
    keys:[keys.session.cookieKey]
}))

// Initialize passport
app.use(passport.initialize())
app.use(passport.session())

// graphql setup
// app.use("/graphql", graphqlHTTP({

// }))

// Set up routes
app.use("/auth", auth_routes)
app.use("/countdown", countdown_routes)
app.use("/submission", submission_routes)

app.get("/", (req, res) => {
    res.send("Hello mic check 1, 2, 3, it is working.")
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}.`)
})