const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    'db_demo',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)
module.exports = sequelize