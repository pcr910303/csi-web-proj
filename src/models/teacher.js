const mongoose = require("mongoose");
require("mongoose-type-email");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    phone: String,
    email: { type: mongoose.SchemaTypes.Email, required: true },
    subject: { ref: "Subject", type: mongoose.Schema.Types.ObjectId },
    classes: [{ ref: "Class", type: mongoose.Schema.Types.ObjectId }]
});

module.exports = mongoose.model("Teacher", schema);
