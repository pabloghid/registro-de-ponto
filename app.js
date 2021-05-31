const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const Sequelize = require('sequelize');
const cadastros = require ("./models/cadastros");
const mysql = require('mysql');
const { json } = require("body-parser");
const bd_saldo_horas = require("./models/bd_saldo_horas");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/src', express.static(__dirname + '/src'));
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

connection.query('SELECT * FROM bd_registros', function(err, rows, fields){
    if(!err){
        console.log('Resultado: ', rows);
   }else{
       console.log('Erro na consulta');
   }
})

////// 'FIM' Conexao

/*calculo*/

//////////////////

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/tela_cadastro.html");
});

app.get("/pesquisar", function(req, res){
    res.sendFile(__dirname + "/src/pesquisar_user.html");
})

app.get("/bate_ponto_entrada", function(req, res){
    res.sendFile(__dirname + "/src/bate_ponto_entrada.html") 
})
app.post("/confirma_ponto",function(req,res){
    res.sendFile(__dirname + "/src/confirma_ponto.html")
    bd_saldo_horas.create({

        nome: req.body.nome,       
        hora_entrada: req.body.hora_entrada,
        hora_saida: req.body.hora_saida
    })
})

app.get("/bate_ponto_saida", function(req, res){
    res.sendFile(__dirname + "/src/bate_ponto_saida.html")
    })


app.get("/tela_cadastro",function(req, res){
    res.sendFile(__dirname + "/src/tela_cadastro.html");
})

app.post("/confirmar", function(req, res){
   
    if(req.body.domingo == "on"){
        req.body.domingo = "Sim";
    }
    else{
        req.body.domingo = "Não"
    }
    if(req.body.segunda == "on"){
        req.body.segunda = "Sim";
    }
    else{
        req.body.segunda = "Não"
    }
    if(req.body.terca == "on"){
        req.body.terca = "Sim";
    }
    else{
        req.body.terca = "Não"
    }
    if(req.body.quarta == "on"){
        req.body.quarta = "Sim";
    }
    else{
        req.body.quarta = "Não"
    }
    if(req.body.quinta == "on"){
        req.body.quinta = "Sim";
    }
    else{
        req.body.quinta = "Não"
    }
    if(req.body.sexta == "on"){
        req.body.sexta = "Sim";
    }
    else{
        req.body.sexta = "Não"
    }
    if(req.body.sabado == "on"){
        req.body.sabado = "Sim";
    }
    else{
        req.body.sabado = "Não"
    }
    res.send("Nome: " + req.body.nome + "<br>Idade: " + req.body.idade + "<br>" + "<br>Sexo: " + req.body.sexo + "<br>" + "<br>CPF: "
     + req.body.cpf+ "<br>" +"<br>Cargo: " + req.body.cargo+ "<br>"+"<br>Hora início pela manhã: " 
    + req.body.hora_inicio_manha+ "<br>"+"<br>Hora saída pela manhã: " + req.body.hora_saida_manha+ 
    "<br>" +"<br>Hora início pela tarde: " + req.body.hora_inicio_tarde+ "<br>"
    +"<br>Hora saída pela tarde: " + req.body.hora_saida_tarde+ "<br>" + 
    "<br> Dias da semana: <br> Domingo: " + req.body.domingo +"<br>" + "Segunda: " + req.body.segunda +"<br>" + "Terça: " + req.body.terca 
    + "<br>Quarta: " + req.body.quarta
    + "<br>Quinta: " + req.body.quinta
    + "<br>Sexta: " + req.body.sexta
    + "<br>Sábado: " + req.body.sabado);
    
    res.sendFile(__dirname + "/src/confirmar.html");
    
    // SE PARAR DE FUNCIONAR É PQ BOTOU CPF ERRADO
    cadastros.create({
       nome: req.body.nome,
       idade: req.body.idade,
       sexo: req.body.sexo,
       cpf:req.body.cpf,
       cargo: req.body.cargo,
       hora_inicio_manha: req.body.hora_inicio_manha,
       hora_saida_manha: req.body.hora_saida_manha,
       hora_inicio_tarde: req.body.hora_inicio_tarde,
       hora_saida_tarde: req.body.hora_saida_tarde,
       domingo: req.body.domingo,
       segunda: req.body.segunda
    
   }).then(function(){
       res.send("Cadastrado com sucesso")
   }).catch(function(erro){
       res.send("Erro ao cadastrar usuário" + erro)
   })
})

//localhost:8080
app.listen(8080);