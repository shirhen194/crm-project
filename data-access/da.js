const Sequelize = require('sequelize');
const connection = new Sequelize('mysql://sql12263195:KTQsfqheNb@sql12.freesqldatabase.com/sql12263195');
connection
   .authenticate()
   .then(() => {
       console.log('Connection has been established successfully.');
   })
   .catch(err => {
       console.error('Unable to connect to the database:', err);
   })

module.exports = (connection);