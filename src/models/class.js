const mongoose = require("mongoose");

const schema = mongoose.Schema({
    times: [{ type: Number }],
    lectures: [{ ref: "Lecture", type: mongoose.Schema.Types.ObjectId }],
    teachers: [{ ref: "Teacher", type: mongoose.Schema.Types.ObjectId }],
    students: [{ ref: "Student", type: mongoose.Schema.Types.ObjectId }],
    assignments: [{ ref: "Assignment", type: mongoose.Schema.Types.ObjectId }]
});

module.exports = mongoose.model("Class", schema);
