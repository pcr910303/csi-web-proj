const mongoose = require("mongoose");
require("mongoose-type-email");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    phone: String,
    email: { type: mongoose.SchemaTypes.Email, required: true },
    code: { type: String, required: true },
    classes: [{ ref: "Class", type: mongoose.Schema.Types.ObjectId }]
});

module.exports = mongoose.model("Student", schema);
