module.exports = async (ctx, next) => {
    const students = await ctx.state.collection.users.find({
        times: Number(ctx.params.time)
    }).toArray();

    ctx.state.logger.debug(students);

    ctx.body.status = "success";
    ctx.body.data = students;
};
