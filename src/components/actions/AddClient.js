import React, { Component } from 'react';
const axios = require('axios')

class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            nameInput:"",
            surNameInput:'',
            countryInput:'',
            ownerInput:'',
            emailType:'',
            newIdsArray:[]
        }
    }

    inputChange=(event)=>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    isUnique=(id)=>{
        let c=0
        for(var i=0,len=this.state.newIdsArray.length;i<len;i++) {
            if(this.state.newIdsArray[i] === id) {
               c++
            }
        }

        if(c>0){return false} else{return true}
    }

   generateid=()=> {
    let id='_' + Math.random().toString(36).substr(2, 9);
    while(!this.isUnique(id)){
        id='_' + Math.random().toString(36).substr(2, 9);
    }
    return id
    }

    addClient= async()=>{
        if(this.state.surNameInput===""||this.state.nameInput===""||this.state.emailType===""||
            this.state.ownerInput===""||this.state.countryInput===""){
                alert("fill all the fields!!")
                return
            }
        var id = this.generateid()
        let newClient={
            id:id,
            name:this.state.nameInput+ " "+this.state.surNameInput,
            firstContact: new Date().toISOString().slice(0, 19).replace('T', ' '),
            emailType:this.state.emailType,
            sold:false,
            owner:this.state.ownerInput,
            country:this.state.countryInput
        }
        
        await axios.post(`http://localhost:4000/newClient`, newClient).then(()=>alert("Added "+this.state.nameInput+" succesfully!"  ))
    }
    
    render() {
        return (
            <div>
                <hr></hr>
                <form>
              <h5>ADD CLIENT</h5>
              <p>First name:<input className="input" type="text" name="nameInput" value={this.state.nameInput} onChange={this.inputChange}></input></p>
              <p>Surname:<input className="input" type="text" name="surNameInput" value={this.state.surNameInput} onChange={this.inputChange}></input></p>
              <p>Country:<input className="input" type="text" name="countryInput" value={this.state.countryInput} onChange={this.inputChange} ></input></p>
              <p>Owner:<input className="input" type="text" name="ownerInput" value={this.state.ownerInput} onChange={this.inputChange} ></input></p>
              <p>Email:<select name="emailType" className="option-menu" value={this.state.emailType} onChange={this.inputChange} >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select></p>
              <div className="update-button" onClick={this.addClient}>Add New Client</div>
              </form>
            </div>
        );
    }
}

export default AddClient