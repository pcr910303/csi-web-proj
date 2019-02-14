const Router = require("koa-router");

module.exports = Router()
    .get("/", require("./get.js"))
    .get("/:time", require("./time.js"))
    .post("/", require("./post.js"));
