const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "899102746902-2dncmirk0dbcp0cnuocmvpdbic28krus.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // Save user information to session
    return cb(null, {
      displayName: profile.displayName,
      email: profile.emails[0].value
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});
