const mongoose = require("mongoose"); //Import database mongodb
const PointSchema = require("./uteis/PointSchema");

const DevSchema = new mongoose.Schema({
	name: String,
	github_username: String,
	bio: String,
	avatar_url: String,
	techs: [String], //Storeg many string in array
	location: {
		type: PointSchema,
		index: '2dsphere'
	}
});

module.exports = mongoose.model("Dev", DevSchema);