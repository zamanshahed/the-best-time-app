import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export const data = [
    { name: 'Sat', uv: 400, pv: 1800, amt: 2400 },
    { name: 'Sun', uv: 300, pv: 2400, amt: 2400 },
    { name: 'Mon', uv: 500, pv: 2100, amt: 2400 },
    { name: 'Tue', uv: 700, pv: 2790, amt: 2400 },
    { name: 'Wed', uv: 450, pv: 1790, amt: 2400 },
    { name: 'Thu', uv: 670, pv: 2040, amt: 2400 },
    { name: 'Fri', uv: 120, pv: 2370, amt: 2400 },
]

function LineChartC() {
    return (
        <div>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    )
}

export default LineChartC
