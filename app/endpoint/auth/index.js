const Router = require("koa-router");
const auth = Router();

auth.post("/login", require("./login.js"));
auth.post("/signup", require("./signup.js"));

module.exports = auth;
