import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip } from 'recharts';

class TopEmployeesChart extends Component {

    generateEmloyees = () => {
        let employee = { name: '', count: 0 }
        let employeesNamesArr1 = this.props.users.map((u) => {
            return u.owner
        })
        let employeesNamesArr = this.removeDuplicates(employeesNamesArr1)
        let employeesArrwithObj = []
        for (let e of employeesNamesArr) {
            employee.name = e
            employee.count = 0
            for (let i in this.props.users) {
                if (this.props.users[i].sold && this.props.users[i].owner === e) {
                    employee.count++
                }
            }
            employeesArrwithObj.push({ ...employee })
        }
        return employeesArrwithObj

    }

    getBestEmployee = (arr) => {
        let bestEmployee = { name: '', count: 0 }
        for (let e in arr) {
            if (bestEmployee.count < arr[e].count) {
                bestEmployee = arr[e]
            }
        }
        return bestEmployee
    }

    getBestThreeEmployees = () => {
        let employeesArrwithObj = this.generateEmloyees()
        let bestOne = this.getBestEmployee(employeesArrwithObj)
        let bestSeceondArr = employeesArrwithObj.filter((e) => e !== bestOne)
        let bestSeceond = this.getBestEmployee(bestSeceondArr)
        let bestThirdArr = employeesArrwithObj.filter((e) => (e !== bestOne && e !== bestSeceond))
        let bestThird = this.getBestEmployee(bestThirdArr)
        let bestThree = [bestOne, bestSeceond, bestThird]
        return bestThree
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
        const data = this.getBestThreeEmployees()
        return (
            <div className="TopEmployeesChart">
                    <h4>Top Employees</h4>
                    <div>
                <ResponsiveContainer width='100%' >
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
                </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

export default TopEmployeesChart