const Sequelize = require('sequelize');
const database = require ('./db');

const Psicologo = database.define('psicologo', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome:{

        type: Sequelize.STRING,
        allowNull: false,
    },
    crp: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    valor: {
        type: Sequelize.DECIMAL,  
    },
    abordagem: {
        type: Sequelize.STRING,
    }
})

module.exports = Psicologo;

