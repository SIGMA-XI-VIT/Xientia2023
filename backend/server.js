const express = require("express")
const cors = require("cors")
const { graphqlHTTP } = require("express-graphql")
const cookie_session = require("cookie-session")
const passport = require("passport")

const auth_routes = require("./routes/auth-routes")

const passport_setup = require("./config/passport-setup")
const keys = require("./config/keys")

const schema = require("./schema/schema")

const app = express()
const port = 5000

app.use(cors({
  origin: "https://xientia23.onrender.com",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  allowedHeaders: "Content-Type, Authorization",
}))

// MongoDB Setup
const mongoose = require("mongoose")
mongoose.connect(keys.mongodb.dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });

// Cookies for the oauth
app.use(cookie_session({
    maxAge: 24 * 60 * 60 * 1000,
    keys:[keys.session.cookieKey]
}))

// Initialize passport
app.use(passport.initialize())
app.use(passport.session())

// graphql setup
app.use("/graphql", graphqlHTTP({
  schema: schema
}))

// Set up auth routes
app.use("/auth", auth_routes)

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}.`)
})