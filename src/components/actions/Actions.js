import React, { Component } from 'react';
import Update from './Update'
import AddClient from './AddClient'
const axios = require('axios')

class Actions extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            owners: [],
            loader: true
        }
    }


    componentDidMount = async () => {
        let data = await axios.get("http://localhost:4000/clients")
        let owners = data.data.map((u) => {
            return u.owner
        })
        this.setState({ users: data.data, owners: this.removeDuplicates(owners), loader:false })

    }

    removeDuplicates = (arr) => {
        let unique_array = []
        for (let i = 0; i < arr.length; i++) {
            if (unique_array.indexOf(arr[i]) === -1) {
                unique_array.push(arr[i])
            }
        }
        return unique_array
    }

    render() {
        if(this.state.loader){
            return(<div className="spinner"></div>);
        }else{
            return (
                <div>
                    <Update users={this.state.users} owners={this.state.owners} />
                    <AddClient />
                </div>
            )
        }
    }
}

export default Actions