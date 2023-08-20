const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");

const dummyUser = {
    id: "qwerty69420",
    name: "Dummy User",
    email: "dummy@example.com"
};

passport.serializeUser((user, done) => {
    console.log("Serialized user.");
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log("Deserialized user.");
    done(null, dummyUser);
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

        done(null, dummyUser);
    })
);

module.exports = passport
