import socketio from 'socket.io.client'; //Import for client

const socket = socketio('http://192.168.0.16:19000', {
	autoConnect: false, //The comunication not is automatic
});

function subscribeToNewDevs() {
	socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs){ 
	//Envia os valores para o backend
	socket.io.opts.query = {
		latitude,
		longitude,
		techs,
	};
	socket.connect();

}
function disconnect(){
	if(socket.connected){
		socket.disconnect();
	}
}

//This functions are avalible for file that import this file (sockets.js)
export {
	connect, 
	disconnect,
};