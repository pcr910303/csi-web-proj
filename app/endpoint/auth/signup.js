const bcrypt = require("bcryptjs");

module.exports = async (ctx, next) => {
    // if one of email, name, code, password is not passed...
    if(!ctx.request.body.email || !ctx.request.body.name || !ctx.request.body.code || !ctx.request.body.password) {
        // throw error
        ctx.body.status = false;
        ctx.body.error = "form-malformed";
        ctx.throw(400, JSON.stringify(ctx.body));
    }

    // upserting
    // if insert happens, result.value is null
    // if insert doesn't happen, result.value is the original user for that email
    const result = await ctx.state.collection.users.findOneAndUpdate({ email: ctx.request.body.email }, {
        $setOnInsert: {
            email: ctx.request.body.email,
            name: ctx.request.body.name,
            code: ctx.request.body.code,
            password: await bcrypt.hash(ctx.request.body.password, await bcrypt.genSalt(10))
        }
    }, { upsert: true });

    // if user already exists...
    if(result.value) {
        // throw error
        ctx.body.status = false;
        ctx.body.error = "user-exists";
        ctx.throw(400, JSON.stringify(ctx.body));
    }

    ctx.body.status = "success";
};
