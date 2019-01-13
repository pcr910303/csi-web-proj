const Router = require("koa-router");
const api = new Router();

const timetable = require("./timetable.js");

api.get("/timetable", timetable.get).post("/timetable", timetable.post);

module.exports = api;
