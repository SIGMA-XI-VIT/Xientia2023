const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");

// TEMP
const User = require("../TEMP/user-model")

// const dummyUser = {
//     id: "qwerty69420",
//     name: "Dummy User",
//     email: "dummy@example.com"
// };

passport.serializeUser((user, done) => {
    console.log("Serialized user.");
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // console.log("Deserialized user.");
    
    // TEMP
    User.findById(id).then((user) => {
        done(null, user)
    })

    // done(null, dummyUser);
});

passport.use(
    new GoogleStrategy({
        // Options for the Google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "/auth/google/redirect"
    }, (accessToken, refreshToken, profile, done) => {
        // Passport callback function
        console.log(profile);

        // TODO: Save user data to database if needed
        // Replace the following line with database logic
        // Retrieve user data from database using profile.id
        
        // TEMP
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
