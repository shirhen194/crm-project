import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class SalesByCountry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterBy: '',
            data: this.generateCountries()
        }
    }
    generateCountries = () => {
        let country = { name: '', Sales: 0 }
        let countries = this.props.users.map((u) => {
            return u.country
        })
        let filteredCountries = this.removeDuplicates(countries)
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

    generateOwners = () => {
        let owner = { name: '', Sales: 0 }
        let owners = this.props.users.map((u) => {
            return u.owner
        })
        let filteredowners = this.removeDuplicates(owners)
        let ownersArrwithObj = []
        for (let e of filteredowners) {
            owner.Name = e
            owner.Sales = 0
            for (let i in this.props.users) {
                if (this.props.users[i].sold && this.props.users[i].owner === e) {
                    owner.Sales++
                }
            }
            ownersArrwithObj.push({ ...owner })
        }
        return ownersArrwithObj

    }

    generateemailTypes = () => {
        let emailType = { name: '', Sales: 0 }
        let emailTypes = this.props.users.map((u) => {
            return u.emailType
        }).filter(t => t)

        let filteredemailTypes = this.removeDuplicates(emailTypes)
        let emailTypesArrwithObj = []
        for (let e of filteredemailTypes) {
            emailType.Name = e
            emailType.Sales = 0
            for (let i in this.props.users) {
                if (this.props.users[i].sold && this.props.users[i].emailType === e) {
                    emailType.Sales++
                }
            }
            emailTypesArrwithObj.push({ ...emailType })
        }
        return emailTypesArrwithObj

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

    changeData = (value) => {
        if (value === "country") {
            this.setState({ data: this.generateCountries() })
        }
        else if (value === "email type") {
            this.setState({ data: this.generateemailTypes() })
        }
        else if (value === "owners") {
            this.setState({ data: this.generateOwners() })
        }
    }


    inputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.changeData(value)

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="SalesByCountryChart">
                <h4>Sales By:</h4><input type="text" list="emailType" name="filterBy" className="input" value={this.state.filterBy} onChange={this.inputChange} placeholder="By"></input>
                <datalist id="emailType">
                    <option value="country">country</option>
                    <option value="email type">email type</option>
                    <option value="owners">owners</option>
                </datalist>
                <div>
                    <ResponsiveContainer width='100%' >
                        <BarChart width={800} height={300} data={this.state.data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Sales" fill="#955196" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

export default SalesByCountry