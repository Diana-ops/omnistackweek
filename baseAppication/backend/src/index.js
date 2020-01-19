const express = require("express"); //Import the library express 
const mongoose = require("mongoose"); //Import database mongodb
const cors = require("cors");
const http = require('http');
const routes = require("./routers.js");
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app); //Working with servidor

setupWebsocket(server);

//Connect with the database 
mongoose.connect("mongodb+srv://diana:dianasenha@cluster0-qkcmh.mongodb.net/test?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); //Before of import routes 
app.use(routes);

server.listen(3333); //Acess port 3333