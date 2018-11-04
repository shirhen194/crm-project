let data = require('./src/data/data');
const Client=require('./data-access/users-table');

data.map((u)=>{
    Client.create({
    id: u._id,
    name: u.name,
    email: u.email,
    firstContact: u.firstContact,
    emailType: u.emailType,
    sold: u.sold,
    owner: u.owner,
    country: u.country
})
})





