const router = require("express").Router()
const passport = require("passport")

// auth login
router.get("/login", (req, res) => {
    // render login page
    res.send("General Login Page.")
})

// auth logout
router.get("/logout", (req, res) => {
    req.logout()
    
    // Redirect somewhere after logout.
    // res.redirect("/")
})

// auth with google
router.get("/google", passport.authenticate("google", {
    scope: ["profile"]
}))

// callback route for google auth
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {

    // req.user contains all the verified person's details
    // res.send(req.user)
    res.redirect("http://localhost:3000/")
})

module.exports = router