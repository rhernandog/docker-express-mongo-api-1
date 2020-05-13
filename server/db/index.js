const mongoose = require("mongoose");
const { mongoURI } = require("../config/config");

const connectToDb = async () => {
  const connection = await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    serverSelectionTimeoutMS: 5000,
  });

  console.log(`Connected to MongoDB ${connection.connection.host}`);
};

module.exports = connectToDb;
