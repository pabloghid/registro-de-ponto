const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const db = require('./models/db');
const { Cadastro, Usuario, Controle_ponto, Saldohoras } = require("./models/cadastros");
const session = require('express-session');
const moment = require("moment");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: false
}))
app.use('/src', express.static(__dirname + '/src'));

app.get("/", function (req, res) {
    if (req.session.loggedin) {
        res.sendFile(__dirname + "/src/tela_inicial.html");
    }
    else {
        res.redirect("/login");
    }
})

app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/src/login.html");
})

app.post('/auth', function (request, response) {
    var usuario = request.body.usuario;
    var senha = request.body.senha;
    if (usuario && senha) {
        Usuario.findAll({
            where: {
                usuario: usuario,
                senha: senha
            }
        }).then(function (results) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = usuario;
                request.session.codFunc = results[0].cd_funcionario;
                response.redirect('/');
            } else {
                response.sendFile(__dirname + "/src/erro_login.html");;
            }
        });
    } else {
        response.sendFile(__dirname + "/src/login.html");
    }
});

app.get("/cadastro", function (req, res) {
    if (req.session.loggedin) {
        res.sendFile(__dirname + "/src/tela_cadastro.html");
    }
    else {
        res.redirect("/login");
    }
});

app.get("/pesquisaFuncionario", function (req, res) {
    if (req.session.loggedin) {
        res.sendFile(__dirname + "/src/pesquisaFuncionario.html")
    }
    else {
        res.redirect("/login");
    }
})

app.post("/gerarRelatorio", function (req, res) {
    if (req.session.loggedin) {
        Saldohoras.findAll({
            include: [
                {
                    model: Cadastro,
                    where: { cpf: req.body.CPF }
                }
            ]
        }).then(function (result) {
            res.render(__dirname + '/src/relatorio.pug', { teste: result });
        })
    }
    else {
        res.redirect("/login");
    }
})

app.post("/bate_ponto_entrada", function (req, res) {
    if (req.session.loggedin) {
        Controle_ponto.findOne({
            where: {
                cd_funcionario: req.session.codFunc,
                hora_saida: null
            }
        }).then(function (result) {
            if (result) {
                res.sendFile(__dirname + "/src/erro_entrada.html")
            }
            else {
                var diaAtual = new Date();
                var horaAtual = diaAtual.getHours() + ":" + diaAtual.getMinutes();
                Controle_ponto.create({
                    cd_funcionario: req.session.codFunc,
                    hora_entrada: horaAtual
                }).then(function () {
                    res.sendFile(__dirname + "/src/bate_ponto_entrada.html")
                })
            }
        })
    }
    else {
        res.redirect("/login");
    }
})

app.post("/bate_ponto_saida", function (req, res) {
    if (req.session.loggedin) {
        Controle_ponto.findOne({
            where: {
                cd_funcionario: req.session.codFunc,
                hora_saida: null
            }
        }).then(function (result) {
            if (result) {
                var d = new Date();
                var horaAtual = d.getHours() + ":" + d.getMinutes();
                Controle_ponto.update({ hora_saida: horaAtual }, {
                    where: {
                        cd_funcionario: req.session.codFunc,
                        hora_saida: null
                    }
                }).then(function () {
                    var ano = d.getFullYear();
                    var mes = d.getMonth() + 1;
                    var dia = d.getDate();
                    var diaAtual = ano + '-' + mes + '-' + dia;
                    Promise.all([Cadastro.findOne({
                        where: {
                            cd_funcionario: req.session.codFunc
                        },
                    }), Saldohoras.findAll({
                        where: {
                            createdAt: diaAtual
                        }
                    })
                    ]).then(function (resultFunc) {
                        cadastroSelect = resultFunc[0];
                        saldoSelect = resultFunc[1];

                        var entradaPadrao1 = moment(cadastroSelect.hora_inicio_1, 'HH:mm');
                        var saidaPadrao1 = moment(cadastroSelect.hora_saida_1, 'HH:mm');
                        var entradaPadrao2 = moment(cadastroSelect.hora_inicio_2, 'HH:mm');
                        var saidaPadrao2 = moment(cadastroSelect.hora_saida_2, 'HH:mm');

                        var entradaHoje = moment(result.hora_entrada, 'HH:mm')
                        var saidaHoje = moment(horaAtual, 'HH:mm');

                        if (saldoSelect.length > 0) {
                            saldoAtual = saldoSelect[0]['saldo']
                            var saldoFim = (saidaHoje.get("hour") * 60 + saidaHoje.get("minute")) - (entradaHoje.get("hour") * 60 + entradaHoje.get("minute"));
                            var saldo = saldoAtual + saldoFim
                            Saldohoras.update({ saldo: saldo }, {
                                where: {
                                    createdAt: diaAtual
                                }
                            }).then(res.sendFile(__dirname + "/src/bate_ponto_saida.html"))
                        }
                        else {
                            var saldoIni = (((saidaPadrao1.get("hour") * 60 + saidaPadrao1.get("minute")) + (saidaPadrao2.get("hour") * 60 + saidaPadrao2.get("minute")))) - (((entradaPadrao1.get("hour") * 60 + entradaPadrao1.get("minute")) + (entradaPadrao2.get("hour") * 60 + entradaPadrao2.get("minute"))));
                            var saldoFim = (saidaHoje.get("hour") * 60 + saidaHoje.get("minute")) - (entradaHoje.get("hour") * 60 + entradaHoje.get("minute"));

                            var saldo = saldoFim - saldoIni;

                            Saldohoras.create({
                                cd_funcionario: req.session.codFunc,
                                saldo: saldo
                            }).then(res.sendFile(__dirname + "/src/bate_ponto_saida.html"))
                        }
                    })
                })
            }
            else{
                res.sendFile(__dirname + "/src/erro_saida.html")
            }
        })
    }
    else {
        res.redirect("/login");
    }
})


app.post("/tela_cadastro", function (req, res) {
    if (req.session.loggedin) {
        res.sendFile(__dirname + "/src/tela_cadastro.html");
    }
    else {
        res.redirect("/login");
    }
})

app.post("/confirmar", function (req, res) {
    if (req.session.loggedin) {
        Cadastro.create({
            nome: req.body.nome,
            cpf: cpfFormatado,
            cargo: req.body.cargo,
            hora_inicio_1: req.body.hora_inicio_1,
            hora_saida_1: req.body.hora_saida_1,
            hora_inicio_2: req.body.hora_inicio_2,
            hora_saida_2: req.body.hora_saida_2,
        }).then(function () {
            res.sendFile(__dirname + "/src/confirmar.html")
        }).catch(function (erro) {
            res.send("Erro " + erro)
        })
    }
    else {
        res.redirect("/login");
    }
})

app.listen(8080)