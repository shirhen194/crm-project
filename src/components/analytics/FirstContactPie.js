import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from 'recharts';

class FirstContactPie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{ name: "thisMonth", value: 5 }, { name: "thisYear", value: 30 }, { name: "pastYears", value: 90 }]
        }
    }

    render() {
        return (
            <div className="FirstContactPieChart">
                <h4 className="chart-headline">Client Acquisition</h4>
                <div>
                    <ResponsiveContainer width='100%' >
                        <PieChart width={800} height={400}>
                            <Pie isAnimationActive={false} data={this.state.data} outerRadius={80} fill="#795548" label />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

export default FirstContactPie