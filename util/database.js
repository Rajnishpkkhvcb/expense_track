const Sequelize = require('sequelize')


const sequelize = new Sequelize('expense_tracker', 'root', 'priraj1336',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;
