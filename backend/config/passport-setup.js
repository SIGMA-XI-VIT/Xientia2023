const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");

const User = require("../models/user-model")

passport.serializeUser((user, done) => {
    console.log("Serialized user.")
    done(null, user.id)
})

passport.deserializeUser((id, done) => {  
    User.findById(id).then((user) => {
        done(null, user)
    })
})

passport.use(
    new GoogleStrategy({
        // Options for the Google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "/auth/google/redirect"
    }, (accessToken, refreshToken, profile, done) => {
        // Passport callback function
        console.log(profile);

        // Saving User Info to database
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser)
            {
                console.log("User is: ", currentUser)
                done(null, currentUser)
            }
            else
            {
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log(`New user created: ${newUser}`)
                    done(null, newUser)
                })
            }
        })
    })
);

module.exports = passport
