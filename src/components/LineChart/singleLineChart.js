import React from "react";
import {
  LineChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Line,
  Legend,
} from "recharts";

const Chart = ({dataKey, label, data, color}) => {
  return (
    <LineChart
      width={600}
      height={200}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <YAxis
        dataKey={dataKey}
        yAxisId="0"
        tickCount={10}
        label={{ value: label, angle: -90, margin: 20 }}
        interval="preserveStartEnd"
        type="number" domain={['dataMin - 10', 'dataMax + 10']}
      />
      <XAxis dataKey="date" />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend/>
      <Line type="monotone" dataKey={dataKey} stroke={color || "#ff7300"} yAxisId="0" />
  
    </LineChart>
  );
};

export default Chart;
