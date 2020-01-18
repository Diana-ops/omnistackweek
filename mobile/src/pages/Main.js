import React, { useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { MaterialIcons } from '@axpo/vector-icons';//Importando icons  

import api from '../services/api';

//Pede permissão para o usuário/ Pega a localização do usuário
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';

function Main({ navigation }){

	//Região do usuário é iniciada como nula
	const { currentRegion, setCurrentRegion } = useState(null);

	//Armazena os devs
	const [devs, setDevs] = useState([]);

	//Armazena as informações digitadas em input 
	const [techs, setTechs] = useState('');

	useEffect(() => { //Função executada apenas uma vez
		async function loadInitialPosition() {

			//Pergunta para o usuário se ele dá permissão para acessar a sua localização
			const { granted } = await requestPermissionsAsync();

			if(granted){ //Se sim
				const { coords } = await getCurrentPositionAsync({
					enableHightAccuracy: true, //Pega a informaçaõ do GPS do celular
				}); //Pega a localização 

				const { latitude, longitude } = coords;

				//Estado para armazenar a lat. e long.	
				setCurrentRegion({
					latitude,
					longitude,
					latitudeDelta: 0.04, //Calculos navais para obter o zoom no mapa
					longitudeDelta: 0.04,
				});		

		}
	}

		loadInitialPosition();

	},[]);

	async function loadDevs() {
		const { latitude, longitude } = currentRegion;
		const response = await api.get('./search', {
			params: {
				latitude,
				longitude,
				techs
			}
		});

		setDevs(response.data.devs);
	}

	function handleRegionChanged(region) { //Quando o usuário muda a localização no mapa
		setCurrentRegion(region);
	}

	if(!currentRegion){ //O mapa só será carregado quando for possivel obter a resposta do usuário
		return null;
	}

	return ( //Chama a função de estilo para o mapa 
		//Coloca a imagem do usuário do ponto de localização dele

		<>
		<MapView 
			onRegionChangeComplete={handleRegionChanged} 
			initialRegion={currentRegion} 
			style={styles.map}>

			{devs.map(dev => (
				<Marker  key={dev._id}
				coordinater={{
					latitude: dev.location.coordinates[1],
					longitude: dev.location.coordinates[0]
				}}>
				<Image 
					style={styles.avatar} 
					source={{uri: dev.avatar_url
				}}/> 

				<Callout onPress={() => {
					//Quando o campo for precionado, uma navegação vai ocorrer 
					navigation.navigate('Profile', { github_username: dev.github_username });


				}}> 
					<View style={styles.callout}>
						<Text style={styles.devName}>dev.name</Text>
						<Text style={styles.devBio}>dev.bio</Text>
						<Text style={styles.devTechs}>dev.techs.join(', ')</Text>
					</View>
				</Callout>
			</Marker>


			))}

		</MapView>

		<View style={styles.searchFrom}>

		 <TextInput
		 	style={styles.searchInput}
		 	placeholder: "Buscar devs por techs ... "
		 	placeholderTextColor: "#999"
		 	autoCapitalize: "words"
		 	autoCorrect={false}
		 	value={techs}
		 	onChangeText={setTechs}
		 </>

		 <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
		 	<MaterialIcons name="my-location" size={20} color="#FFF"/>
		 </TouchableOpacity>


		</View>
		</>


	); 
}

const styles = StyleSheet.create({
	map: {
		flex: 1 //O mapa ocupará toda a tela
	},

	avatar: {
		width: 54,
		height: 54,
		borderRadius: 4,
		borderWidth: 4,
		borderColor: '#FFF'
	},

	callout: {
		width: 260,
	}, 

	devName: {
		fontWeight: 'bold',
		fontSize: 16,
	},

	devBio:{
		color: '#666',
		marginTop: 5,
	},

	devTechs: {
		marginTop: 5,
	},
	searchFrom: {
		position: 'absolute',
		top: 20,
		left: 20,
		right: 20,
		zIndex: 5,
		flexDirection: 'row',
	}, 

	searchInput: {
		flex: 1,
		height: 50,
		backgroundColor: '#FFF',
		color: '#333',
		borderRadius: 25,
		paddingHorizontal: 20,
		fontSize: 16,
		shadowColor: '#000',
		shadowOpacity: 0.2,
		shadowOffset: {
			width: 4,
			height: 4,
		}, elevation: 2,
	}, 

	loadButton: {
		width: 50,
		height: 50,
		backgroundColor: '#8E4Dff',
		borderRadius: 25,
		justifyContent: 'center',
		alignItens: 'center',
		marginLeft: 15,

	}
})

export default Main;