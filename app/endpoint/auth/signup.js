const bcrypt = require("bcryptjs");

module.exports = async (ctx, next) => {
    if(!ctx.request.body.email || !ctx.request.body.name || !ctx.request.body.code || !ctx.request.body.password) {
        ctx.body.status = false;
        ctx.body.error = "form-malformed";
        ctx.throw(400, JSON.stringify(ctx.body));
    }

    const result = await ctx.state.collection.users.findOneAndUpdate({ email: ctx.request.body.email }, {
        $setOnInsert: {
            email: ctx.request.body.email,
            name: ctx.request.body.name,
            code: ctx.request.body.code,
            password: await bcrypt.hash(ctx.request.body.password, await bcrypt.genSalt(10))
        }
    }, { upsert: true });

    console.log(result);

    if(result.value) {
        ctx.body.status = false;
        ctx.body.error = "user-exists";
        ctx.throw(400, JSON.stringify(ctx.body));
    }

    ctx.body.status = "success";
};
