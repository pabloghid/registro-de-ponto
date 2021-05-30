// CRIA TABELA COM SEQUELIZE
const db = require ('./db')
const cadastros = db.sequelize.define('bd_registros', {
    
    nome:{
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    },
    sexo: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.INTEGER
    },
    cargo: {
        type: db.Sequelize.STRING
    },
    hora_inicio_manha: {
        type: db.Sequelize.TIME
    },
    hora_saida_manha: {
        type: db.Sequelize.TIME
    },
    hora_inicio_tarde: {
        type: db.Sequelize.TIME        
    },
    hora_saida_tarde: {
        type: db.Sequelize.TIME
    },
    domingo: {
        type: db.Sequelize.STRING
    }

})

//cadastros.sync({force:true}) /*--> cria o bd quando executa o código*/

module.exports = cadastros