import React, { Component } from 'react';

class AddClient extends Component {
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
              ADD CLIENT
              First name:<input className="input" type="text" name="nameInput" value={this.state.nameInput} onChange={this.inputChange}></input>
              Surname:<input className="input" type="text" name="nameInput" value={this.state.nameInput} onChange={this.inputChange}></input>
              Country:<input className="input" type="text" name="nameInput" value={this.state.nameInput} onChange={this.inputChange}></input>
              Owner:<input className="input" type="text" name="nameInput" value={this.state.nameInput} onChange={this.inputChange}></input>
            </div>
        )
    }
}

export default AddClient