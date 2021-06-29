const Sequelize = require('sequelize')

const sequelize = new Sequelize('registro_ponto', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports ={
    Sequelize: Sequelize,
    sequelize: sequelize
}