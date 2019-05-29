const mongoose = require("mongoose");

const schema = mongoose.Schema({
    content: { type: String, required: true },
    written: { type: Date, required: true },
    author: { ref: "Student", type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model("Comment", schema);
