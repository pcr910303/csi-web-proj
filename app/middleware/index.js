const logger = require("../logger.js");
const { MongoClient } = require("mongodb");
const url = `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PW
}@csi-web-db-nvdgx.mongodb.net/test?retryWrites=true`;
let client = null;
(async () => {
    client = await MongoClient.connect(url, { useNewUrlParser: true });
    logger.info("Database connection established");
    // const times = client.db("csi-web-db").collection("times");
    // [
    //     "수학 1", // 0
    //     "수학 2", // 1
    //     "수학 3", // 2
    //     "확률과 통계", // 3
    //     "물리 1", // 4
    //     "물리 2", // 5
    //     "물리 3", // 6
    //     "물리 4", // 7
    //     "고급 물리 1", // 8
    //     "고급 물리 2" // 9
    // ].map((currentValue, index) => {
    //     times.findOneAndUpdate({ id: index },
    //         {
    //             $setOnInsert: {
    //                 name: currentValue
    //             }
    //         },
    //         { upsert: true });
    // });
})();

module.exports = {
    getDB: async (ctx, next) => {
        ctx.state.client = client;
        ctx.state.db = ctx.state.client.db("csi-web-db");
        ctx.state.collection = {};
        ctx.state.collection.users = ctx.state.db.collection("users");
        ctx.state.collection.board = ctx.state.db.collection("board");
        await next();
    }
};
