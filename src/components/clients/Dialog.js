import React, { Component } from 'react';

class Dialog extends Component {

    constructor(props) {
        super(props)
        let firstName=this.props.dialogUser.name.split(" ")[0]
        let surName=this.props.dialogUser.name.split(" ")[1]
        this.state = {
            nameInput: firstName,
            surnameInput: surName,
            countryInput: this.props.dialogUser.country,
            id:this.props.dialogUser.id
        }
    }

    showDialog = () => {
        this.props.showDialog()
    }


    inputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    updateUser=()=>{
        let name=this.state.nameInput+ " "+ this.state.surnameInput
        this.props.showDialog()
        this.props.updateUser(name, this.state.countryInput,this.state.id)
    }

    render() {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.showDialog}>&times;</span>
                    <p className="all-input">Name:        <input className="input" type="text" name="nameInput" value={this.state.nameInput} onChange={this.inputChange}></input></p>
                    <p className="all-input">Surname:     <input className="input" type="text" name="surnameInput" value={this.state.surnameInput} onChange={this.inputChange}></input></p>
                    <p className="all-input">Country:     <input className="input" type="text" name="countryInput" value={this.state.countryInput} onChange={this.inputChange}></input></p>
                    <div className="update-button" onClick={this.updateUser}>Update</div>
                </div>
            </div>
        )
    }
}

export default Dialog