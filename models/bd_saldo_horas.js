const db = require ('./db')
const bd_saldo_horas = db.sequelize.define('saldo_horas', {
    nome:{
        type: db.Sequelize.STRING
    },
    hora_entrada:{
        type: db.Sequelize.TIME
    },
    hora_saida:{
        type: db.Sequelize.TIME
    }
})

//bd_saldo_horas.sync({force:true}) /*--> cria o bd quando executa o código*/
module.exports = bd_saldo_horas
