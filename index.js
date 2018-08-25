const env = require('dotenv').config();
const user = require('./user');  // Create a user.js file in this directory with your username to test database.
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const app = express();
const pg = require('pg-promise')();
const dbConfig = 'postgres://' + user + '@localhost:5432/';
const db = pg(dbConfig);
const PORT = process.env.PORT || 3000; // Get port from environment

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:3000/login/return"
},
function(accessToken, refreshToken, profile, cb) {
  // Insert user profile into database, or load if existing.
  // In this example, the user's Facebook profile is supplied as the user
  // record.  In a production-quality application, the Facebook profile should
  // be associated with a user record in the application's database, which
  // allows for account linking and authentication with other identity
  // providers.
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Initialize Passport and restore authentication state, if any, from the
// // session.
app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static('public'));

app.get('/login',
  passport.authenticate('facebook'));

app.get('/login/return', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.send({ user: req.user });
  });

app.listen(PORT);

