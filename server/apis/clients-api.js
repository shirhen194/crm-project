const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const Client = require('../../data-access/users-table')

//1
router.get('/clients', (req, res) => {
    Client.find({}, (err, clients) => {
        if (err) throw err;
        else {
            console.log("yes")
            res.send(clients)
        }
    })
})

// //2
router.put('/changeClient/:id', function (req, res) {
    Client.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name, country: req.body.country }, function (err, person) {
        if (err) throw err;
        else res.send("cool")
    });

});


// // //3
router.get('/getid/:name', function (req, res) {
    let name = req.params.name.split("%20").join(" ")
    Client.findOne({ name: req.params.name }, (err, client) => {
        if (err) throw err;
        else {
            console.log("succes")
            res.send(client._id)
        }
    })
});


router.put(`/update/:id/owner/:newowner`, function (req, res) {
    console.log(req.params.newowner + " " + req.params.id)
    Client.findByIdAndUpdate(req.params.id, { owner: req.params.newowner }, { new: true }, (err, client) => {
        if (err) throw err;
        else res.send(client)
    })

});

router.put(`/update/:id/emailtype/:emailtype`, function (req, res) {
    Client.findByIdAndUpdate(req.params.id, { emailType: req.params.emailtype }, { new: true }, (err, client) => {
        if (err) throw err;
        else res.send(client)
    })
});

router.put(`/update/:id/declaresale`, function (req, res) {
    Client.findByIdAndUpdate(req.params.id, { sold: true }, { new: true }, (err, client) => {
        if (err) throw err;
        else res.send(client)
    })
});

// //add new client

router.post('/newClient', function (req, res) {
    let newClient = new Client ({
        name: req.body.name,
        email: req.body.email,
        firstContact: new Date().toString(),
        emailType: "",
        sold: false,
        owner: req.body.owner,
        country: req.body.country,
        _id: null
    })
    newClient.save()
    res.send(newClient)
});

 //get clients in the last 30 days    
 router.get('/clientsthismonth', function (req, res) {
     let today =new Date()
    today.setMonth(today.getMonth() - 3)
    let now=new Date()
    let beforeMonth=today.toISOString().slice(0, 19).replace('T', ' ')
    let thisTime=now.toISOString().slice(0, 19).replace('T', ' ')
    
    Client.find({firstContact:{"$gt":beforeMonth}, sold:true}).select({ "firstContact": 1, "_id": 0})
    .exec(function (err, dates) {
        if (err) return next(err);
        else{
        let data=dates.map((c)=>{
        return c.firstContact
        })
            console.log(data)
            res.send(data);
        }
    });


    // Client.find({
    //     where :{
    //         sold:true,
    //         firstContact: {
    //         $between: [beforeMonth, thisTime]
    //     }
    // }
    // }).then(clients => {
    //     let data=clients.map((c)=>{
    //         return c.dataValues.firstContact
    //     })
    //     res.send(data)
    // }).catch((err)=>res.send(err))
})


module.exports = router