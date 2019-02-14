const Router = require("koa-router");
const api = Router();

const timetable = require("./timetable");
const users = require("./users");

api.use("/timetable", timetable.routes());
api.use("/users", users.routes());

module.exports = api;
