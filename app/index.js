require("dotenv").config();
const Koa = require("koa");

const endpoint = require("./endpoint");

const app = new Koa();
const PORT = 8002;

app.use(endpoint.routes()).use(endpoint.allowedMethods());

const server = app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

module.exports = server;
