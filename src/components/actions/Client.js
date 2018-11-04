import React, { Component } from 'react';

class Client extends Component {
    constructor() {
        super()
        this.state = {
            clientInput:""
        }
    } 

    inputChange=(event)=>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.props.setCurrentClient(value)

        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div>
                <p>Client:<input list="clients" className="input" type="text" name="clientInput" value={this.state.clientInput} onChange={this.inputChange} placeholder="Client Name"></input>
                <datalist id="clients" name="clientInput" value={this.state.clientInput} onChange={this.inputChange} >
                {this.props.users.map((n,i)=>{
                    return(
                        <option value={n.name} key={i} id={n._id}>{n.name}</option>
                    )
                })
                }
                </datalist>
                </p>
            </div>
        )
    }
}

export default Client