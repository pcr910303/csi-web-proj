const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    teachers: [{ ref: "Teacher", type: mongoose.Schema.Types.ObjectId }],
    classes: [{ ref: "Class", type: mongoose.Schema.Types.ObjectId }]
});

module.exports = mongoose.model("Lecture", schema);
