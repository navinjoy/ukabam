const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require('./keys');
// const User = require('../models/user');

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "/auth/google/redirect"
    },
    function(accessToken, refreshToken, profile, done) {
        console.log('passport callback function fired');
        //    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //      return done(err, user);
        //    });
    }
));



// passport.serializeUser ((user, done) => {
//     done (null, user.id)
// })

// passport.deserializeUser ((id, done) => {
//     User.findById(id).then((user) => {
//         done (null, user)
//     })
// })

// passport.use(
//     new GoogleStrategy ({ 
//     //options for google strat
//         clientID: keys.google.clientID,
//         clientSecret: keys.google.clientSecret,
//         callbackURL:"/auth/google/redirect",
//         proxy: true
//     }, function (accessToken, refreshToken, profile, done)  {
    //passport callback function
        // console.log('passport callback function fired')
    // console.log(profile);

    //check if user already exists in mongoDb
    // User.findOne({googleid: profile.id}).then((currentUser) => {
    //     if (currentUser) {
    //         //already have the user
    //     } else {
    //         //create new user in DB
    //         console.log('user is '+currentUser);
    //         done(null, currentUser);
    //         new User ({
    //             username: profile.displayName,
    //             googleid: profile.id
    //         }).save().then((newUser) => {
    //             console.log("new user created "+newUser)
    //             done(null, newUser);
    //         })
    //     }
    // })

    
// })



// module.exports = passport;