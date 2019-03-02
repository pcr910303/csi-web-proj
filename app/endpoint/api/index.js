const Router = require("koa-router");
const api = Router();

const timetable = require("./timetable");
const users = require("./users");
const board = require("./board");

api.use("/timetable", timetable.routes());
api.use("/users", users.routes());
api.use("/board", board.routes());

module.exports = api;
