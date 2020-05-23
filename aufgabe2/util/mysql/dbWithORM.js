const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysqldb', 'asgarov', 'password', {dialect: 'mysql'});

module.exports = sequelize;
