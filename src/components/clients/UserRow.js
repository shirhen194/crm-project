import React, { Component } from 'react';


class UserRow extends Component {
    showDialog=()=>{
    this.props.showDialog()
    }

    render() {
        let user=this.props.user
        let firstName=user.name.split(" ")[0]
        let surName=user.name.split(" ")[1]
        let firstContact=user.firstContact
        return (
        <div>
            <div className="userRow" onClick={this.showDialog}>
            <div className="section" id="name">{firstName}</div>
            <div className="section" id="name">{surName}</div>
            <div className="section" id="country"> {user.country}</div>
            <div className="section" id="firstContact"> {firstContact}</div>  
            <div className="section" id="emailType"> {user.emailType}</div>
            <div className="section" id="sold">   {user.sold ? <span>V</span> : <span>-</span>} </div> 
            <div className="section" id="owner"> {user.owner} </div>
            </div>
            <hr></hr>
            </div>
        )
    }
}

export default UserRow