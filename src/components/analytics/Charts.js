import React, { Component } from 'react';
import TopEmployeesChart from './TopEmployeesChart'
import SalesByCountry from './SalesByCountry'
import SalesSince from './SalesSince'
import FirstContactPie from './FirstContactPie'

class Charts extends Component {
    render() {
        return (
            <div id="charts">
            <TopEmployeesChart users={this.props.users} className="TopEmployeesChart" />
            <SalesByCountry users={this.props.users} className="SalesByChart"/>
            <SalesSince className="SalesSinceChart"/>
            <FirstContactPie className="FirstContactPieChart"/>
            </div>
        )
    }
}

export default Charts