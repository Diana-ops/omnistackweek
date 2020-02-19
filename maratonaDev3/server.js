const express = require('express')
const server = express()

/*Configurando tampletes, permitindo enviar dados ao html*/
const nunjucks = require('nunjucks')
nunjucks.configure("./", {
	express: server,
	noCache: true
})

/*Habilitar body do formulário e outras coisas*/
server.use(express.urlencoded({extended: true}))

/*Configuração de arquivos extras na pasta public*/
server.use(express.static('public'))

/*Configura o banco de dados*/

/*Mantem a conexãa ativa*/
const Pool = require('pg').Pool
const db = new Pool({
	user: 'postgres',
	password: 'diana',
	host: 'localhost',
	port: 5432,
	database: 'bancoDoe'
})



/*Inicia/Cria o servidor*/
server.listen(3000, function(){
	console.log(" ... [Servidor Iniciado]: Done!")
})

/*Pegando dados*/

/*Agrupamento de dados*/

/*Lista de doadores*/

/*Configura a apresentação da pagina*/
server.get("/", function(req, res){

	const donors = []
	return res.render("index.html", { donors })
})

server.post("/", function(req, res) {
	//Pega dados do formulário
	const name = req.body.name
	const email = req.body.email
	const blood = req.body.blood

	/*Se algum dos campos não for preenchido*/
	if (name == "" || email == "" || blood == ""){
		return res.send("Todos os campos são obrigatórios.")
	}

	/*Adicionando os inputs ao banco*/
	const query = 
		`INSERT INTO doe ("name", "email", "blood")
		VALUES($1, $2, $3)`

	const values = [name, email, blood]

	db.query(query, values, function(err) {
		if(err) return res.send("Erro no banco.")
		return res.redirect("./") 
	})

	/*Após os dados serem adicionados,
	 o usuário será levado a esta pagina*/
	

})