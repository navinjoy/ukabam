const express       = require("express");
const app           = express();
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");
const passport      = require('passport');
const passportSetup = require('./config/passport-setup')

const routes        = require("./routes");
const authRoutes    = require("./routes/auth-routes");
// const cookieSession = require('cookie-session');
const keys          = require('./config/keys');
const PORT          = process.env.PORT || 3001;
const path          = require('path');

// set up express application
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }
// app.use(express.static("client/build"));
app.enable('trust proxy');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use("/",express.static(path.join(__dirname,"client/build")));
// Add routes, both API and view
app.use(routes);
// app.use(cookieSession, {
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [keys.session.cookieKey]
// })

app.use(passport.initialize());
app.use(passport.session());
// require('./routes/auth-routes.js')(app, passport);
app.use('/auth', authRoutes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ukabamdb",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
