import React, { Component } from 'react';
import Badges from './Badges'
import Charts from './Charts'
const axios = require('axios')

class Analytics extends Component {

    constructor() {
        super()
        this.state = {
            users:[],
            loader: true
        }
    }

    componentDidMount = async () => {
        let data = await axios.get("http://localhost:4000/clients")
        this.setState({ users:data.data, loader:false })

    }

    render() {
        if(this.state.loader){
            return(<div className="spinner"></div>);
        }else{
        return (
            <div>
                <Badges users={this.state.users} />
                <Charts users={this.state.users} />
            </div>
        )
        }
    }
}

export default Analytics