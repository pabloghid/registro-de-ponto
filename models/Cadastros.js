const bd = require('./bd')


const Cadastro = bd.sequelize.define('bd_registro',{
    nome:{
        type: bd.Sequelize.STRING
    },
    idade: {
        type: bd.Sequelize.INTEGER
    }
})

Cadastro.sync({force:true})