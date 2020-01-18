import axios from 'axios';

const api = axios.create({
	baseURL: 'httl://localhost:3333',
});

export default api;