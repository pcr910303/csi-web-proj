const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const Express = require("express");
const mongoose = require("mongoose");
const API = require("json-api");

const PORT = process.env.PORT || 8000;

mongoose.connect(`mongodb://${process.env.DB_USER}:${
    process.env.DB_PW
}@ds151066.mlab.com:51066/json-api-example`);

const models = require("./models");
const resourceDescriptions = require("./resource-descriptions");

const adapter = new API.dbAdapters.Mongoose(models);
const registry = new API.ResourceTypeRegistry(resourceDescriptions, {
    dbAdapter: adapter
});
const Controller = new API.controllers.API(registry);
const Docs = new API.controllers.Documentation(registry, { name: "CSI-Web-Proj" });

const app = new Express();
const Front = new API.httpStrategies.Express(Controller, Docs);

app.get("/", Front.docsRequest);

app.get("/:type", Front.apiRequest);
app.get("/:type/:id", Front.apiRequest);
app.post("/:type", Front.apiRequest);
app.patch("/:type/:id", Front.apiRequest);
app.delete("/:type/:id", Front.apiRequest);

app.post("/:type/:id/relationships/:relationship", Front.apiRequest);
app.patch("/:type/:id/relationships/:relationship", Front.apiRequest);
app.delete("/:type/:id/relationships/:relationship", Front.apiRequest);


const server = app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

module.exports = server;
