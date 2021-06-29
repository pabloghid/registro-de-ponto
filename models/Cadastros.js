// CRIA TABELA COM SEQUELIZE
const db = require('./db')
const Cadastro = db.sequelize.define('funcionarios', {

    cd_funcionario: {
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.INTEGER
    },
    cargo: {
        type: db.Sequelize.STRING
    },
    hora_inicio_1: {
        type: db.Sequelize.TIME
    },
    hora_saida_1: {
        type: db.Sequelize.TIME
    },
    hora_inicio_2: {
        type: db.Sequelize.TIME
    },
    hora_saida_2: {
        type: db.Sequelize.TIME
    }

})

const Usuario = db.sequelize.define('usuario', {
    cd_funcionario: {
        type: db.Sequelize.INTEGER,
        model: 'funcionarios',
        key: 'cd_funcionario'
    },
    usuario: db.Sequelize.STRING,
    senha: db.Sequelize.STRING
},
    {
        timestamps: false
    });

const Controle_ponto = db.sequelize.define('controle_ponto', {
    cd_funcionario: {
        type: db.Sequelize.INTEGER,
        model: 'funcionarios',
        key: 'cd_funcionario'
    },
    hora_entrada: {
        type: db.Sequelize.TIME,
        defaultValue: db.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    hora_saida: {
        type: db.Sequelize.TIME,
    },
    data_atual: db.Sequelize.DATE,
}, {
    freezeTableName: true
})

const Saldohoras = db.sequelize.define('saldoHoras', {
    cd_funcionario: {
        type: db.Sequelize.INTEGER,
        model: 'funcionarios',
        key: 'cd_funcionario'
    },
    saldo: db.Sequelize.INTEGER,
    createdAt:{ 
        type: db.Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: db.Sequelize.NOW
    }
},
    {
        timestamps: false
    });
    Saldohoras.belongsTo(Cadastro, { foreignKey: 'cd_funcionario' });
    
module.exports = { Cadastro, Usuario, Controle_ponto, Saldohoras };