const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://srhatkadke:SunilMdb123@cluster0.bnmmrw4.mongodb.net/"
);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error in Connection to MongoDB", err);
});

module.exports = mongoose;
