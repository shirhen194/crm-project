import React, { Component } from 'react';


class UserRow extends Component {
    showDialog=(e)=>{
    let id=e.target.id
    this.props.showDialog(id)
    }

    render() {
        let user=this.props.user
        let firstName=user.name.split(" ")[0]
        let surName=user.name.split(" ")[1]
        let date= new Date(user.firstContact)
        let firstDate = date.toLocaleDateString()
        return (
        <div>
            <div className="userRow" id={user.id} onClick={this.showDialog}>
            <div className="section" id={user.id}>{firstName}</div>
            <div className="section" id={user.id}>{surName}</div>
            <div className="section" id={user.id}> {user.country}</div>
            <div className="section" id={user.id}> {firstDate}</div>  
            <div className="section" id={user.id}> {user.emailType ? user.emailType : <span>.</span>}</div>
            <div className="section" id={user.id}>   {user.sold ? <span>V</span> : <span>-</span>} </div> 
            <div className="section" id={user.id}> {user.owner} </div>
            </div>
            <hr></hr>
            </div>
        )
    }
}

export default UserRow