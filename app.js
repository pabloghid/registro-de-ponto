const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const Sequelize = require('sequelize');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//conexao bd sequelize

const sequelize = new Sequelize('bd','viniteste','123456',{
    host:'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso');
}).catch(function(err){
    console.log('Erro ao conectar com o Banco' + err);
});
//Conexão BD

const mysql = require('mysql');
const { json } = require("body-parser");

const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'viniteste',
    password: '123456',
    database: 'bd'
    
})

connection.connect(function(err){

    if (err){
        console.error('error conecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' +connection.threadId);
});

connection.query('SELECT * FROM bd_registro', function(err, rows, fields){
    if(!err){
        console.log('Resultado: ', rows);
   }else{
       console.log('Erro na consulta');
   }

})
/*
connection.query("INSERT INTO bd_registro(nome, idade) VALUES('TESTE', '20')",function(err, result){
    if (!err){
        console.log('Usuario cadastrado com sucesso');
    }else{
        console.log('Erro ao cadastrar usuário');
    }
})
*/
////// 'FIM' Conexao
app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/tela_cadastro.html");
});

app.get("/tela_cadastro",function(req, res){
    res.sendfile(__dirname + "/src/tela_cadastro.html");
})

app.post("/confirmar", function(req, res){
    res.sendFile(__dirname + "/src/confirmar.html");
    res.send("Nome: " + req.body.nome + "<br>Idade: " + req.body.idade + "<br>" + "<br>Sexo: " + req.body.sexo + "<br>" + "<br>CPF: " + req.body.cpf+ "<br>" +"<br>Cargo: " + req.body.cargo+ "<br>"+"<br>Hora início pela manhã: " 
    + req.body.hora_inicio_manha+ "<br>"+"<br>Hora saída pela manhã: " + req.body.hora_saida_manha+ "<br>" +"<br>Hora início pela tarde: " + req.body.hora_inicio_tarde+ "<br>"
    +"<br>Hora saída pela tarde: " + req.body.hora_saida_tarde+ "<br>" + "<br> Dias da semana: " +req.body.domingo +"<br>");
});


//localhost:8080
app.listen(8080);