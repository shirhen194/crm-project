import React, { Component } from 'react';
import Client from './Client'

class Update extends Component {
    constructor() {
        super()
        this.state = {
            nameInput:"",
            surnameInput:'',
            countryInput:''
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

    render() {
        return (
            <div>
                <h5>UPDATE</h5>
                <Client />
                Transfer ownership to:<input className="input" type="text" name="nameInput" value={this.state.nameInput} onChange={this.inputChange}></input>
                Send email:<input className="input" type="text" name="nameInput" value={this.state.nameInput} onChange={this.inputChange}></input>
                Declare sale!<input className="input" type="text" name="nameInput" value={this.state.nameInput} onChange={this.inputChange}></input>
            </div>
        )
    }
}

export default Update