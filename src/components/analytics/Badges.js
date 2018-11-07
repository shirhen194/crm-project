import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faGlobeAmericas, faEnvelope, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { library} from '@fortawesome/fontawesome-svg-core'
library.add(faChartLine)
library.add(faGlobeAmericas)
library.add(faEnvelope)
library.add(faUserCircle)

class Badges extends Component {

    generateNewClients = () => {
        let currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
        let currentMonthYear = currentDate.slice(0, 7)
        let newClients = 0
        for (let i in this.props.users) {
            if (this.props.users[i].firstContact.slice(0, 7) === ("" + currentMonthYear + "")) {
                newClients++;
            }
        }
        return newClients
    }

    generateEmailsSent = () => {
        let EmailsSent = 0
        for (let i in this.props.users) {
            if (this.props.users[i].emailType !== "") {
                EmailsSent++;
            }
        }
        return EmailsSent
    }

    generateOutstandingClients = () => {
        let OutstandingClients = 0
        for (let i in this.props.users) {
            if (this.props.users[i].sold !== true) {
                OutstandingClients++;
            }
        }
        return OutstandingClients
    }

    generateHottestCountry = () => {
        let HottestCountry = { name: '', count: 0 }
        let countries = this.props.users.map((u) => {
            return u.country
        })
        let filteredCountries = this.removeDuplicates(countries)
        let currentCountryChecked = { name: '', count: 0 }
        for (let c of filteredCountries) {
            currentCountryChecked.name = c
            currentCountryChecked.count = 0
            for (let i in this.props.users) {
                if (this.props.users[i].sold && this.props.users[i].country === c) {
                    currentCountryChecked.count++
                }
            }
            if (currentCountryChecked.count > HottestCountry.count) {
                HottestCountry = { ...currentCountryChecked }
            }
        }

        return HottestCountry.name

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
        return (
            <div className="badges">
                <div className="badge"><FontAwesomeIcon className='icon chart' icon="chart-line" />
                <div> <h1>{this.generateNewClients()}</h1><br></br> New clients this month</div></div>
                <div className="badge"><FontAwesomeIcon className='icon envelope'  icon="envelope" />
                <div className="EmailsSent"> <h1>{this.generateEmailsSent()}</h1><br></br> Emails Sent</div></div>
                <div className="badge"><FontAwesomeIcon className='icon user-circle'  icon="user-circle" />
                <div className="EmailsSent"> <h1>{this.generateOutstandingClients()}</h1><br></br>Outstanding Clients</div></div>
                <div className="badge"><FontAwesomeIcon className='icon globe-americas'  icon="globe-americas" />
                <div className="EmailsSent"> <h1>{this.generateHottestCountry()}</h1><br></br>Hottest Country</div></div>
            </div>
        )
    }
}

export default Badges