import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const axios = require('axios')

class SalesSince extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientsthismonth: [],
            sales: []
        }
    }

    componentDidMount = async () => {
        let data = await axios.get("http://localhost:4000/clientsthismonth")
        this.setState({ saleDates3Months: data.data }, this.mapTheData)
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

    mapTheData = () => {
        let date = { Date: '', Sales: 0 }
        let filteredDates = this.removeDuplicates(this.state.saleDates3Months)
        let sales = []
        for (let d of filteredDates) {
            date.Date = d
            date.Sales = 0
            for (let i in this.state.saleDates3Months) {
                if (this.state.saleDates3Months[i] === d) {
                    date.Sales++
                }
            }
            sales.push({ ...date })
        }
        let newSales = sales.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a.Date) - new Date(b.Date);
        });

        newSales = newSales.map((s) => {
            return ({ Date: s.Date.slice(5, 10), Sales: s.Sales })
        })
        this.setState({ sales: newSales })
    }


    render() {
        const data = this.state.sales
        return (
            <div className="SalesSinceChart">
                <h4>Sales Last Three months</h4>
                <div>
                    <ResponsiveContainer width='100%' >
                        <LineChart width={600} height={300} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="Date" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Sales" stroke="#ff6e54" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

export default SalesSince