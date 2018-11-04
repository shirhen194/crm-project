const connection=require('./da') 
const Sequelize = require('sequelize');

const Client = connection.define("client", {
   id:{
       type:Sequelize.STRING,
       primaryKey: true
   },
   name:{
       type:Sequelize.STRING
   },
   email:{
    type:Sequelize.STRING
   },
   firstContact:{
       type:Sequelize.DATE
   },
   emailType:{
       type:Sequelize.STRING
   },
   sold:{
       type:Sequelize.BOOLEAN
   },
   owner:{
       type:Sequelize.STRING
    },
   country:{
       type:Sequelize.STRING
   } 
})

// Client.sync({force:true})

module.exports =(Client);