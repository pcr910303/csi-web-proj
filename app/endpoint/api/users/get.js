module.exports = async (ctx, next) => {
    // search user from db
    const user = await ctx.state.collection.users.findOne({
        code: ctx.params.code
    });

    ctx.state.logger.debug(user);

    // if user with specified code does not exist...
    if (!user) {
        // throw error
        ctx.body.status = false;
        // no such code
        ctx.body.error = "user-does-not-exist";
        ctx.throw(404, JSON.stringify(ctx.body));
    }

    ctx.body.status = "success";
    // needed to set data with properties
    ctx.body.data = {};
    ctx.body.data.email = user.email;
    ctx.body.data.code = user.code;
    ctx.body.data.time = user.time;
};
