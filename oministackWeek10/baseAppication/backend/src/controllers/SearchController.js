const Dev = require("../models/Dev.js");
const parseStringAsArray = require("../uteis/parseStringAsArray");

module.exports = {
	//List Devs
	async index(request, response){
		const { techs, latitude, longitude } = request.query;

		const techsArray = parseStringAsArray(techs);

		const devs = await Dev.find({
			techs: {
				$in: techsArray,
			},
			location:{
				$near:{
					$geometry:{
						type: 'Point',
						coodinates: [longitude, latitude],
					},
					$maxDistance: 10000,
				},
			},
		});

		return response.json("Ola");
	}
};