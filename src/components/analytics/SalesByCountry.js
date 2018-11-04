import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

class SalesByCountry extends Component {

    generateCountries = () => {
        let country = { name: '', Sales: 0 }
        let countries = this.props.users.map((u) => {
            return u.country
        })
        let filteredCountries=this.removeDuplicates(countries)
        let countriesArrwithObj = []
        for (let e of filteredCountries) {
            country.Name = e
            country.Sales = 0
            for (let i in this.props.users) {
                if (this.props.users[i].sold && this.props.users[i].country === e) {
                    country.Sales++
                }
            }
            countriesArrwithObj.push({ ...country })
        }
        return countriesArrwithObj

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
        const data = this.generateCountries()

        return (
            <div className="SalesByCountryChart">
                <div className="container">
                Sales By Country:
                <BarChart width={800} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="Name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="Sales" fill="#8884d8" />
      </BarChart>
                </div>
            </div>
        )
    }
}

export default SalesByCountry