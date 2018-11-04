import React, { Component } from 'react';


class Search extends Component {
    constructor() {
        super()
        this.state = {
            search:'',
            catagory:''
        }
    }

    search=()=>{
        this.props.search(this.state.search,this.state.catagory)
    }

    SearchChange=(event)=>{
        const target = event.target;
        const value = target.value;
        
        this.setState({
            search: value
        },this.search);
    }

    catagoryChange=(event)=>{
        const target = event.target;
        const value = target.value;
    
        this.setState({
            catagory: value
        },this.search);
    }


    render() {
        return (
            <div>
        <input type="text" id="search" placeholder="search..."  value={this.state.search} onChange={this.SearchChange}/>
        <select name="email-type" className="option-menu" onChange={this.catagoryChange} placeholder="Email type">
                    <option value="name">name</option>
                    <option value="country">country</option>
                    <option value="email type">email type</option>
                    <option value="sold">sold</option>
                    <option value="owner">owner</option>
                </select>
        </div>
        )
    }
}

export default Search