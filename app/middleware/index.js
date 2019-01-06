const { MongoClient, ObjectId } = require("mongodb");

module.exports = {
    getDB: async (ctx, next) => {
        const url = `mongodb://${process.env.PEBBLE_DB_USER}:${process.env.PEBBLE_DB_PW}@ds149744.mlab.com:49744/csi-web-db`;
        ctx.state.client = await MongoClient.connect(url, { useNewUrlParser: true });
        ctx.state.db = ctx.state.client.db("csi-web-db");
        ctx.state.collection = {};
        ctx.state.collection.users = ctx.state.db.collection("users");
        await next();
    }
};
