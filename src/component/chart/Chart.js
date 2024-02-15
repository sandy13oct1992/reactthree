import react from 'react';

import ChartBar from './ChartBar.js';

const Chart= (props) => {
     
    const dataPointValues= props.dataPoints.map(dataPoint => dataPoint.value);
     const totalMaximum = Math.max(...dataPointValues);
    return (
        <div>
            {props.dataPoint.map((datapoint) => {
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={null}
                label={dataPoint.label}
                />
            })}
        </div>
    )
}

export default Chart;