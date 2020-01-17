const express = require("express"); //Import the library express 
const mongoose = require("mongoose"); //Import database mongodb

const routes = require("./routers.js");

const app = express();

//Connect with the database 
mongoose.connect("mongodb+srv://diana:dianasenha@cluster0-qkcmh.mongodb.net/test?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(express.json()); //Before of import routes 
app.use(routes);

app.listen(3333); //Acess port 