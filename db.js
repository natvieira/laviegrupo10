const Sequelize = require('sequelize');
const sequelize = new Sequelize('apiclinica', 'root', 'Nn68990124#', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;