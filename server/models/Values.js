const mongoose = require("mongoose");

const ValueSchema = new mongoose.Schema({
  value: Number
});

module.exports = mongoose.model("Value", ValueSchema);
