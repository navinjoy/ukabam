const router = require('express').Router();
// module.exports = function (app, passport) {
    router.get('/google', (req, res) => {
        console.log('google auth')
        res.send("logging with google")
    })

    router.get('/login', (req, res) => {
        console.log('in Login route')

        res.render('login');
    })

    // router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //     res.redirect('/');

    //     res.send("you reached the callback URI")
    // })

    router.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })
// }

module.exports = router;