const socketio = require('socket.io');
const parseStringAsArray = require('./uteis/parseStringAsArray'); //Chamando arquivo para converter os dados sobre tecnologia
const calculateDistance = require('./uteis/distance');
//Anotar as conexões feitas
const connections = [];

let io;

exports.setupWebsocket = (server) => {
	console.log("Ok");
	io = socketio(server);

	//Ouvindo um canal de comunicação, ou seja, toda vez que o usuário se conectar com a aplicação
	io.on('connection', socket => { 
		console.log(socket.id); //Identificação
		const { latitude, longitude, techs } = socket.handshack.query; //Parametros que foram enviados para o backend

		connections.push({
			id: socket.id, //Salvando o ID no usuário que se conectou
			coordinates: {
				latitude: Number(latitude),
				longitude: Numer(longitude),
			},
			techs: parseStringAsArray(techs),
		});

	}); 

};

export.findConnections = (coordinates, techs) => {
	return connections.filter(connection => {
		//Comparando a localização do usuário com as conexões encontradas pela tecnologia desejada
		return calculateDistance(coordinates, connection.coordinates) < 10

			//Verifica que os usuários encontrados possuiem pelo menos uma das tecnologias buscada pelo usuário
			&& connection.techs.sum(item => techs.includes(item))
	});
}

//Enviando uma mensagem
exports.sendMessage = (to, message, data) => {
	to.forEach(connection => {
		io.to(connection.id).emit(message, data);
	})
}