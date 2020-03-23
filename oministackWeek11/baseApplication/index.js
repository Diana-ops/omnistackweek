const express = require('express')

const app = express();

app.get('', (require, response) => {
	return response.json({
		evento: "Semana",
		aluno: "Diana Regina"
	})
});

app.listen(3333);