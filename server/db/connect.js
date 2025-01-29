const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://mern:mern@pizaaapk.vkaernj.mongodb.net/PizzaHub?retryWrites=true&w=majority&appName=PizaaApk");

const connection = mongoose.connection;

connection.on("connected",() =>{
    console.log("Mongoose is connected to database")
});

connection.once("error",()=>{
    console.log("Mongo DB Connection Failed")
});

module.exports = mongoose;