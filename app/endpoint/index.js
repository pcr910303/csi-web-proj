const Router = require("koa-router");
const koaBody = require("koa-body");
const passport = require("koa-passport");

const auth = require("./auth");
const api = require("./api");
const middleware = require("../middleware");

const endpoint = new Router();

endpoint.use(async (ctx, next) => {
    ctx.body = {};
    await next();
});
endpoint.use(koaBody());
endpoint.use(middleware.getDB);
endpoint.use(passport.initialize());
endpoint.use("/api", api.routes());
endpoint.use("/auth", auth.routes());

module.exports = endpoint;
