var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Client=require('./data-access/users-table')

const SERVER_PORT =4000;
const api = require('./server/apis/clients-api')

var app = express();
mongoose.connect('mongodb://localhost/crmDB', function() {
  console.log("DB connection established!!!");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api)
// app.use(express.static('build'));

app.listen(SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
});

// const data = require('./src/data/data.json')

// for (let client of data) {
    // let newClient = new Client ({
    //     name: client.name,
    //     email: client.email,
    //     firstContact: client.firstContact,
    //     emailType: client.emailType,
    //     sold: client.sold,
    //     owner: client.owner,
    //     country: client.country
    // })
    // newClient.save()
// }

// let newClient = new Client ({
//     name: "Maya Cohen",
//     email: "Mayacohen@imant.com",
//     firstContact:"2019-01-10T22:00:00.000Z",
//     emailType: "D",
//     sold: false,
//     owner: "Emily Durham",
//     country: "United States"
// })
// newClient.save()





