module.exports = async (ctx, next) => {
    if (
        !ctx.request.body.author ||
        !ctx.request.body.date ||
        !ctx.request.body.title ||
        !ctx.request.body.context ||
        (ctx.request.body.comments === undefined ||
            ctx.request.body.comments.length == 0) ||
        (!ctx.request.body.deadline.isvalid ||
            (ctx.request.body.deadline.isvalid === true &&
                !ctx.request.body.deadline.date))
    ) {
        ctx.body.status = false;
        ctx.body.error = "form-malformed";
        ctx.throw(400, JSON.stringify(ctx.body));
    }

    const result = await ctx.state.collection.board.insertOne({
        author: ctx.request.body.author,
        date: ctx.request.body.date,
        title: ctx.request.body.title,
        context: ctx.request.body.context,
        comments: ctx.request.body.comments,
        deadline: ctx.request.body.deadline
    });

    ctx.body.status = "success";
};
