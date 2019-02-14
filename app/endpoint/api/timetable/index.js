const Router = require("koa-router");

module.exports = Router()
    .get("/", require("./get.js"))
    .post("/", require("./post.js"));
