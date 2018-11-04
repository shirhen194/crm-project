import React, { Component } from 'react';
import UserRow from './UserRow'
import TableHeader from './TableHeader'
import Search from './Search'
import Dialog from './Dialog'
const axios = require('axios')

class Clients extends Component {

    constructor() {
        super()
        this.state = {
            users: [],
            dialog:false,
            searchedUsers:[],
            dialogUser:{},
            loader:true
        }
    }

    componentDidMount = async () => {
            let data = await axios.get("http://localhost:4000/clients")
            console.log(data)
            this.setState({ users:data.data,searchedUsers:data.data, loader:false})
    }



    showDialog=(id)=>{
        let users=[...this.state.users]
        let dialogUser=users.find((u)=> u.id===id)
        this.setState({ dialog: !this.state.dialog, dialogUser:dialogUser })
    }


    inputChange=(event)=>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    updateUser= async(name, country, id)=>{
        let reqContent={name:name,country:country}
        await axios
        .put(
            `http://localhost:4000/changeClient/${id}`, 
            reqContent,
        )
        .then(r => console.log(r.status))
        .catch(e => console.log(e));
    }

    // search=(searchWord,catagory)=>{
    //     if(!catagory||!searchWord){
    //         return;
    //     }
    //     else{
    //         let users=[...this.state.users]
    //         let searchedUsers=users.find((u)=>
    //         {u[catagory].toLowerCase().includes(searchWord)})
    //         this.setState({searchedUsers:searchedUsers})
    //     }
    // }



    render() {
        if(this.state.loader){
            return(<div className="spinner"></div>);
        }
        else{
            return (
                <div>
                {this.state.dialog? <Dialog dialogUser={this.state.dialogUser} updateUser={this.updateUser} showDialog={this.showDialog} /> : null}
                <Search search={this.search} />
                    <TableHeader />
                    {this.state.searchedUsers.map((u,i) => {
                        return (
                            <UserRow user={u} key={i} showDialog={this.showDialog}/>
                        )
                    })}
                </div>
            )
        }
       
    }
}

export default Clients