const { Router } = require('express');

const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

//Resquest in servidor
routes.get('/devs', DevController.index);

//Public in servidor 
routes.post('/devs', DevController.store); 

routes.get('./search', SearchController.index);

module.exports = routes;