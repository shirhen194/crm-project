import React, { Component } from 'react';


class Search extends Component {
    render() {
        return (
            <div>
        <input type="text" id="search" placeholder="search..." onChange={this.props.SearchChange}/>
        <select name="email-type" className="option-menu" onChange={this.props.catagoryChange} placeholder="Email type">
                    <option value="name">name</option>
                    <option value="country">country</option>
                    <option value="emailType">email type</option>
                    <option value="sold">sold</option>
                    <option value="owner">owner</option>
                </select>
        </div>
        )
    }
}

export default Search