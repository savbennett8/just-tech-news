//import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to our database, pass in your MySQL info for username & password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'kayaBear42!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;