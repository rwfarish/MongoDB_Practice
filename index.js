const mongoose = require("mongoose");
require("dotenv").config(); 
const connect = () => {
    const un = process.env.MONGO_USER;
    const pw = process.env.MONGO_PASSWORD;
    return mongoose.connect(
    "mongodb+srv://admin:CharlestonInlet2@cluster0.udesq.mongodb.net/testdb?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
};

connect().then(resp => console.log(resp)); 


