import React, { Component } from 'react';
import Client from './Client'
const axios = require('axios')

class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailType: "",
            owner: '',
            owners:[],
            currentUpdateClient:''
        }
    }

    inputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    transferOwner= async ()=>{
        let clientId = await axios.get("http://localhost:4000/getid/"+this.state.currentUpdateClient)
        console.log(clientId.data)
        await axios.put(`http://localhost:4000/update/${clientId.data}/owner/${this.state.owner}`)
    }

    setCurrentClient= (clientName)=>{
        this.setState({ currentUpdateClient:clientName})
    }

    sendEmailType = async ()=>{
        let clientId = await axios.get("http://localhost:4000/getid/"+this.state.currentUpdateClient)
        await axios.put(`http://localhost:4000/update/${clientId.data}/emailtype/${this.state.emailType}`)
    }

    declareSale = async ()=>{
        let clientId = await axios.get("http://localhost:4000/getid/"+this.state.currentUpdateClient)
        await axios.put(`http://localhost:4000/update/${clientId.data}/declaresale`)
    }


    render() {
        return (
            <div>
                <h5>UPDATE</h5>
                <Client users={this.props.users} setCurrentClient={this.setCurrentClient}/>
                <p>Transfer ownership to:<input type="text"  list="owners" name="owner" className="input" value={this.state.owner} onChange={this.inputChange} placeholder="Owner"></input>
                <datalist id="owners" name="owner" onChange={this.inputChange} placeholder="Owner">
                {this.props.owners.map((o,i)=>{
                    return(
                        <option value={o} name="owner" key={i}>{o}</option>
                    )
                })
                }
                </datalist><span className="confirm-yellow" onClick={this.transferOwner}>TRANSFER</span></p>
                <p>Send email:<select name="emailType" className="option-menu" onChange={this.inputChange} placeholder="Email type">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select> <span className="confirm-yellow" onClick={this.sendEmailType}>SEND</span></p>
                <p>Declare sale!  <span className="confirm-yellow" onClick={this.declareSale}>DECLARE</span></p>
            </div>
        )
    }
}

export default Update