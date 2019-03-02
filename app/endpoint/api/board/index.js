const Router = require("koa-router");

module.exports = Router()
    .post("/write", require("./write.js"));
