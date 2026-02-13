const { DataTypes } = require('sequelize')
const sequelize = require('./database.js')

const Article = sequelize.define('Article', {
    uid: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Article