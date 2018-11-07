const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const Client=require('../../data-access/users-table')

//1
router.get('/clients', function (req, res) {
    Client.findAll({}).then(clients => {
        let data=clients.map((c)=>{
            return c.dataValues
        })
        res.send(data)
    }).catch((err)=>res.send(err))
})

//2
router.put('/changeClient/:id', function (req, res) {
Client.update(
    { name: req.body.name, country: req.body.country },
    {
        where: {
            id: req.params.id 
        }
    }).then(r => 
        res.send(r.status)
    ).catch((err)=>res.send(err))
    
});
    

// //3
router.get('/getid/:name', function (req, res) {
    let name=req.params.name.split("%20").join(" ")
    console.log(name)
    Client.findOne({
        where: {
            name: name
        }
    }).then(client => {
        res.send(client.dataValues.id)
    }).catch((err)=>res.send(err))
        
});


router.put(`/update/:id/owner/:newowner`, function (req, res) {
    console.log(req.params.newowner +" "+req.params.id )
    Client.update(
        { owner: req.params.newowner },
        {
            where: {
                id: req.params.id 
            }
        }).then(r => 
            {console.log(r)
            res.send(r.status)}
        ).catch((err)=>res.send(err))
        
});

router.put(`/update/:id/emailtype/:emailtype`, function (req, res) {
    Client.update(
        { emailType: req.params.emailtype },
        {
            where: {
                id: req.params.id 
            }
        }).then(r => 
            {console.log(r)
            res.send(r.status)}
        ).catch((err)=>res.send(err))
        
});

router.put(`/update/:id/declaresale`, function (req, res) {
    Client.update(
        { sold: true },
        {
            where: {
                id: req.params.id 
            }
        }).then(r => 
            {console.log(r)
            res.send(r.status)}
        ).catch((err)=>res.send(err))
        
});

//add new client

router.post('/newClient', function (req, res) {
    Client.create(req.body).then(r => 
        {console.log(r)
        res.send(r.status)}
    ).catch((err)=>res.send(err))
    });
            
 //get clients in the last 30 days    
 router.get('/clientsthismonth', function (req, res) {
     let today =new Date()
    today.setMonth(today.getMonth() - 3)
    let now=new Date()
    let beforeMonth=today.toISOString().slice(0, 19).replace('T', ' ')
    let thisTime=now.toISOString().slice(0, 19).replace('T', ' ')
    
    Client.findAll({
        where :{
            sold:true,
            firstContact: {
            $between: [beforeMonth, thisTime]
        }
    }
    }).then(clients => {
        let data=clients.map((c)=>{
            return c.dataValues.firstContact
        })
        res.send(data)
    }).catch((err)=>res.send(err))
})


module.exports = router