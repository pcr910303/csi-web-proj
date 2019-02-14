module.exports = async (ctx, next) => {
    // if the times are not array...
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
            $set: {
                time: ctx.request.body.times
            }
        }
    );

    // add to time
    await ctx.state.collection.times.updateMany(
        { times: { $in: ctx.request.body.times } },
        {
            $push: {
                students: ctx.state.user._id
            }
        }
    );

    ctx.body.status = "success";
};
