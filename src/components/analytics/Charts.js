import React, { Component } from 'react';
import TopEmployeesChart from './TopEmployeesChart'
import SalesByCountry from './SalesByCountry'

class Charts extends Component {
    render() {
        return (
            <div id="charts">
            <TopEmployeesChart users={this.props.users}/>
            <SalesByCountry users={this.props.users}/>
            </div>
        )
    }
}

export default Charts