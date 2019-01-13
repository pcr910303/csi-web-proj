const logger = require("../logger.js");
const { MongoClient } = require("mongodb");
const url = `mongodb+srv://${process.env.PEBBLE_DB_USER}:${process.env.PEBBLE_DB_PW}@csi-web-db-nvdgx.mongodb.net/test?retryWrites=true`;
let client = null;
(async () => {
    client = await MongoClient.connect(url, { useNewUrlParser: true });
    logger.info("Database connection established");
})();

module.exports = {
    getDB: async (ctx, next) => {
        ctx.state.client = client;
        ctx.state.db = ctx.state.client.db("csi-web-db");
        ctx.state.collection = {};
        ctx.state.collection.users = ctx.state.db.collection("users");
        await next();
    }
};
