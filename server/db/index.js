const mongoose = require("mongoose");

const mongoDBURI = "mongodb://rhernando:rmhg2317@ds117834.mlab.com:17834/docker-express-api";

const connectToDb = async () => {
  const connection = await mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    serverSelectionTimeoutMS: 5000,
  });

  console.log(`Connected to MongoDB ${connection.connection.host}`);
};

module.exports = connectToDb;
