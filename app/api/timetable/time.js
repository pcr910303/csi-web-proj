module.exports = async (ctx, next) => {
    const time = await ctx.state.collection.times.findOne({
        id: Number(ctx.params.time)
    });

    ctx.state.logger.debug(time.students);

    ctx.body.status = "success";
    ctx.body.data = time.students ? time.students : [];
};
