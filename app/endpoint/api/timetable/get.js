module.exports = async (ctx, next) => {
    // if user does not exist...
    if(!ctx.state.user) {
        // throw error
        ctx.body.status = false;
        // we should have thrown unauthorized before...
        ctx.body.error = "unknown";
        ctx.throw(500, JSON.stringify(ctx.body));
    }

    // do not search db, we already pulled user data with passportjs
    ctx.state.logger.debug(ctx.state.user);

    ctx.body.status = "success";
    ctx.body.data = ctx.state.user.times ? ctx.state.user.times : [];
};
