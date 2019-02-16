module.exports = async (ctx, next) => {
    // if the data is not array...
    if (!Array.isArray(ctx.request.body.times)) {
        // throw error
        ctx.body.status = false;
        ctx.body.error = "form-malformed";
        ctx.throw(400, JSON.stringify(ctx.body));
    }

    // if user does not exist...
    if (!ctx.state.user) {
        // throw error
        ctx.body.status = false;
        // we should have thrown unauthorized before...
        ctx.body.error = "unknown";
        ctx.throw(500, JSON.stringify(ctx.body));
    }

    // addding to db
    // add to user
    await ctx.state.collection.users.findOneAndUpdate(
        { email: ctx.state.user.email },
        {
            $addToSet: {
                times: { $each: ctx.request.body.times }
            }
        }
    );

    // add to times
    await ctx.state.collection.times.updateMany(
        { name: { $in: ctx.request.body.times } },
        {
            $addToSet: {
                students: ctx.state.user.code
            }
        }
    );

    ctx.body.status = "success";
};
