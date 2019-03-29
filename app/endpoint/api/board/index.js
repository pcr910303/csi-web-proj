const Router = require("koa-router");

module.exports = Router()
    .post("/write/:lecture", require("./write.js"))
