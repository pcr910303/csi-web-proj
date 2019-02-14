const Router = require("koa-router");
const koaBody = require("koa-body");
const passport = require("koa-passport");

const logger = require("../logger.js");
const auth = require("./auth");
const api = require("./api");
const middleware = require("../middleware");

const endpoint = Router();

endpoint.use(async (ctx, next) => {
    ctx.body = {};
    await next();
});
endpoint.use(koaBody());
endpoint.use(middleware.getDB);
endpoint.use(passport.initialize());
endpoint.use(passport.session());
endpoint.use("/auth", auth.routes());
// endpoint.use(async (ctx, next) => {
//     // if not authenticated
//     if(ctx.isUnauthenticated()) {
//         // throw error
//         ctx.body.status = false;
//         ctx.body.status = "unauthorized";
//         ctx.throw(401, JSON.stringify(ctx.body));
//     }
//     await next();
// });
endpoint.use("/api", api.routes());

module.exports = endpoint;
