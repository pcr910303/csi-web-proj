const Router = require("koa-router");

module.exports = Router().get("/:code", require("./get.js"));
