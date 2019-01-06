const bcrypt = require("bcryptjs");
const { ObjectId } = require("mongodb");
const passport = require("koa-passport");
const LocalStrategy = require("passport-local").Strategy;

// save user _id in session...
passport.serializeUser(({ ctx }, user, done) => done(null, user._id));
// and restore user in ctx.state.user
passport.deserializeUser(({ ctx }, _id, done) => ctx.state.collection.users.findOne({ _id: ObjectId(_id) }, done));

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, async ({ ctx }, username, password, done) => {
    // done is the callback provided in password.authenticate() below
    const user = await ctx.state.collection.users.findOne({
        email: ctx.request.body.email
    });

    if(!user) {
        // no such user
        ctx.body.status = false;
        ctx.body.error = "user-does-not-exist";
        done(null, false);
    }

    if(!user || !await bcrypt.compare(ctx.request.body.password, user.password)) {
        // password doesn't match
        ctx.body.status = false;
        ctx.body.error = "password-does-not-match";
        return done(null, false);
    }

    ctx.body.status = "success";
    return done(null, user);
}));

module.exports = async (ctx, next) => passport.authenticate("local", (err, user) => {
    // We already set ctx.body in the callback provided to password.use()
    if(!user) { ctx.throw(401, JSON.stringify(ctx.body)); }
    ctx.login(user);
})(ctx, next);
