const mongoose = require("mongoose"); //Import database mongodb

const DevSchema = new mongoose.Schema({
	name: String,
	github_username: String,
	bio: String,
	avatar_url: String,
	techs: [String] //Storeg many string in array
});

module.exports = mongoose.model("Dev", DevSchema);