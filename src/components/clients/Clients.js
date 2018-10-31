import React, { Component } from 'react';
import UserRow from './UserRow'
import TableHeader from './TableHeader'

class Clients extends Component {

    constructor() {
        super()
        this.state = {
            users: [],
            dialog:false,
            nameInput:"",
            surnameInput:'',
            countryInput:''
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            let data = require('../../data/data')
            this.setState({ users:data })
        }, 100)

    }

    showDialog=()=>{
        this.setState({ dialog: !this.state.dialog })
    }

    dialog=()=>{
        if(this.state.dialog){
            return(
                <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.showDialog}>&times;</span>
                    <p className="all-input">Name:        <input className="input" type="text" name="nameInput" value={this.state.nameInput} onChange={this.inputChange}></input></p>
                    <p className="all-input">Surname:     <input className="input" type="text" name="surnameInput" value={this.state.surnameInput} onChange={this.inputChange}></input></p>
                    <p className="all-input">Country:     <input className="input" type="text" name="countryInput" value={this.state.countryInput} onChange={this.inputChange}></input></p>
                    <div className="update-button">Update</div>
                </div>
            </div>
            )
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
            {this.dialog()}
                <TableHeader />
                {this.state.users.map(u => {
                    return (
                        <UserRow user={u} key={u._id} showDialog={this.showDialog}/>
                    )
                })}
            </div>
        )
    }
}

export default Clients