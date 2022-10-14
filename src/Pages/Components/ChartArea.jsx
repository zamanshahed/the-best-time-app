import React from 'react'
import Bar from "./Bar";

const components = [
    // ["Line", Line],
    ["Bar", Bar],
];

function ChartArea() {
    return (
        <div>
           <Bar />
            <div style={{ height: "50rem" }} />
        </div>
    );
}

export default ChartArea