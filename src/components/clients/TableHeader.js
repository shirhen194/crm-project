import React, { Component } from 'react';


class TableHeader extends Component {

    render() {
        return (<div>
            <div className="userRow head">
            <div className="section" id="name"><b>Name</b></div>
            <div className="section" id="name"><b>SurName</b></div>
            <div className="section" id="country"><b>country</b></div>
            <div className="section" id="firstContact"><b>firstContact</b></div>  
            <div className="section" id="emailType"><b>EmailType</b></div>
            <div className="section" id="sold"><b>Sold</b></div> 
            <div className="section" id="owner"><b>Owner</b></div>
            </div>
            <hr></hr>
            </div>
        )
    }
}

export default TableHeader