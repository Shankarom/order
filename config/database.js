const mongoose = require("mongoose")
require("dotenv").config()
const URL = process.env.URL
mongoose.set('strictQuery', false);

//create connection with mongodb
mongoose.connect(URL, { useNewUrlParser: true })
    .then(() => {
        console.log('connected');

    }).catch((err) => {
        console.log("Error" + err);
    })
module.exports = mongoose
