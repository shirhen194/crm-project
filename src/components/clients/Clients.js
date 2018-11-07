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
            loader:true,
            search:'',
            catagory:'name'
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

    SearchChange=(event)=>{
        const target = event.target;
        const value = target.value;
        
        this.setState({
            search: value
        } );
    }

    catagoryChange=(event)=>{
        const target = event.target;
        const value = target.value;
    
        this.setState({
            catagory: value
        } );
    }

    // search=()=>{
    //     debugger;
    //     if(!this.state.catagory||!this.state.search){
    //         this.setState({searchedUsers:[...this.state.users]})
    //     }
    //     else{
    //         let users=[...this.state.users]
    //         let searchedUsers=users.filter((u)=>
    //         {})
    //         console.log(searchedUsers)
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
                <Search search={this.search} catagoryChange={this.catagoryChange} SearchChange={this.SearchChange}/>
                    <TableHeader />
                    {this.state.users.map((u,i) => {
                     if ((u[this.state.catagory]|| "").toString().toLowerCase().includes(this.state.catagory=="sold" ? "true" : this.state.search)){
                        return (
                            <UserRow user={u} key={i} showDialog={this.showDialog}/>
                        )
                       }   })}
                </div>
            )
        }
       
    }
}

export default Clients