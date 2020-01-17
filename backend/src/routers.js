const { Router } = require('express');

const axios = require("axios");

const routes = Router();

const Dev = require("./models/Dev.js");

//Resquest in servidor
routes.post('/devs', async (request, response) => { //Walk and a paramethers function
	//return response.send("Hello World"); //Send a text as awnser
	const { github_username, techs } = request.body; //Storge the name of user insid of body

	const responseAPI = await axios.get(`https://api.github.com/users/${github_username}`); //Wait the request of API 

	//If not have a name, will be the value of login 
	const { name = login, avatar_url, bio} = responseAPI.data; //Get only some informations 

	console.log(name, avatar_url, bio);

	const tecsArray = techs.split(",").map( tech => tech.trim()); //Trim clean the empity spaces
	
	const dev = await Dev.create({
		github_username,
		name,
		avatar_url,
		bio,
		techs: tecsArray,

	});
	

	return response.json("Diana"); //Send a object

}); 

module.exports = routes;