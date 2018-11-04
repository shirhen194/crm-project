import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
const axios = require('axios')

class TopEmployeesChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientsthismonth:[]
        }
    }
    getsales=()=>{
        let data = await axios.get("http://localhost:4000/clientsthismonth")
        this.setState({ clientsthismonth:data.data})
    }


    render() {
        const data = this.getBestThreeEmployees()
        return (
            <div className="TopEmployeesChart">
                <div className="chart-headline">Top Employees</div>
                <BarChart width={400} height={300} data={data}
                    margin={{ top: 20, right: 0, left: 0, bottom: 25 }} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="count" domain={[0, 'dataMax']} />
                    <YAxis type="category" dataKey="name" fontFamily="sans-serif" />
                    <Tooltip />
                    <Bar
                        dataKey="count"
                        barSize={20}
                        fontFamily="sans-serif">
                        {
                            data.map((entry, index) => (
                                <Cell key={index} fill='#003f5c' />
                            ))
                        }
                    </Bar>
                </BarChart>
           
            </div>
        )
    }
}

export default TopEmployeesChart