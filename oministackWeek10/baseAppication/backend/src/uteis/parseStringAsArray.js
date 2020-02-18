module.exports = function parseStringAsArray(arrayAsString){
	return arrayAsString.split(",").map( tech => tech.trim()); //Trim clean the empity spaces
}