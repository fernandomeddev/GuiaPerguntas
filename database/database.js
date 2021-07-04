const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root', 'ATX@12345',{
    host: 'localhost',
    dialect:'mysql'
});

module.exports = connection;