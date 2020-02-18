/*
  Procura os devs no github e armazena as informações no banco de dados em 
  conjunto a aquelas que o usuário inseriu ao se cadastrar
*/ 

const axios = require("axios");
const Dev = require("../models/Dev.js");
const parseStringAsArray = require("../uteis/parseStringAsArray");

const { findConnections, sendMessage } = require('../uteis/websocket');

//index, show, store, update, destroy (CRUD)

module.exports = {
	//List Devs
	async index(request, response){
		const devs = await Dev.find();

		return response.json(devs);
	},

	async store (request, response) { //Walk and a paramethers function

		//return response.send("Hello World"); //Send a text as awnser
		const { github_username, techs, latitude, longitude} = request.body; //Storge the name of user insid of body


		//Create Devs
		let dev = await Dev.findOne({ github_username });

		if(!dev){ 		

			const responseAPI = await axios.get(`https://api.github.com/users/${github_username}`); //Wait the request of API 

			//If not have a name, will be the value of login 
			const { name = login, avatar_url, bio} = responseAPI.data; //Get only some informations 

			console.log(name, avatar_url, bio);

			const tecsArray = parseStringAsArray(techs);

			//Capture Latitude and Longitude
			const location = {
				type: "Point",
				coordinates: [longitude, latitude],
			};
			
			dev = await Dev.create({
				github_username,
				name,
				avatar_url,
				bio,
				techs: tecsArray,
				location

			});

			//Filtrando as conexões a um raio de 10 metros e que tenham as tecnologias desejadas 
			const sendSocketMensageTo = findConnections(
				{ latitude, longitude },
				techsArray,
			)

			//Enviando os dados no novo dev cadastrado
			sendMessage(sendSocketMensageTo, 'new-dev', dev);

			console.log(sendSocketMensageTo);

			
			return response.json(dev); //Send a object
		}

		return response.json("Ola Diana");
	}
};