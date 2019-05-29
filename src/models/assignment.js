const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    written: { type: Date, required: true },
    deadline: { type: Date, required: true },
    author: { ref: "Student", type: mongoose.Schema.Types.ObjectId },
    class: { ref: "Class", type: mongoose.Schema.Types.ObjectId },
    comments: [{ ref: "Comment", type: mongoose.Schema.Types.ObjectId }]
});

module.exports = mongoose.model("Assignment", schema);
