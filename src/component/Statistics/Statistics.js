import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "React", uv: 8, pv: 2400, amt: 2400 },
  { name: "JavaScript", uv: 9, pv: 2400, amt: 2400 },
  { name: "CSS", uv: 8, pv: 2400, amt: 2400 },
  { name: "Git", uv: 11, pv: 2400, amt: 2400 },
];

const Statistics = () => {
  return (
    <div className=" justify-center">
      <h1 className="text-2xl font-bold text-center">LineChart</h1>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;
