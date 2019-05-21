const Router = require("koa-router");
const koaBody = require("koa-body");
const passport = require("koa-passport");

const api = Router();
const middleware = require("../middleware");

const auth = require("./auth");
const timetable = require("./timetable");
const users = require("./users");
const board = require("./board");



api.use(async (ctx, next) => {
    ctx.body = {};
    await next();
});
api.use(koaBody());
api.use(middleware.getDB);
api.use(passport.initialize());
api.use(passport.session());

/* endpoint.use(async (ctx, next) => {
   // if not authenticated
   if(ctx.isUnauthenticated()) {
   // throw error
   ctx.body.status = false;
   ctx.body.status = "unauthorized";
   ctx.throw(401, JSON.stringify(ctx.body));
   }
   await next();
   }); */
api.use("/auth", auth.routes());
api.use("/timetable", timetable.routes());
api.use("/users", users.routes());
api.use("/board", board.routes());

module.exports = api;
