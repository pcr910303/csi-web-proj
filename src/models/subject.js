const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    teachers: [{ ref: "Teacher", type: mongoose.Schema.Types.ObjectId }],
    lectures: [{ ref: "Lecture", type: mongoose.Schema.Types.ObjectId }]
});

module.exports = mongoose.model("Subject", schema);
