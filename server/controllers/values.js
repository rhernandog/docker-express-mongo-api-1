const Value = require("../models/Values");

exports.getAllValues = async () => {
  try {
    const allValues = await Value.find();
    return allValues;
  } catch (err) {
    return err;
  }
};

exports.addValue = async (value) => {
  try {
    const newValue = await Value.create({ value });
    console.log("values controller, new value added to DB", value);
    return newValue;
  } catch (err) {
    return err;
  }
};
