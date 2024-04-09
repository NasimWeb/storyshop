import React from "react";
import "./Chart.css";
import HomeChartDatas from "../../../src/Datas/HomeChartDatas";



import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];

  const renderCustomBar = (props) => {
    const { payload, fill } = props;
    let fillColor;

    // Custom logic based on data or any other condition
    if (payload.name === "Jan") {
      fillColor = "#8884d8"; // Custom color for January
    } else if (payload.name === "Feb") {
      fillColor = "#82ca9d"; // Custom color for February
    } else {
      fillColor = fill; // Default color for other months
    }

    return <rect {...props} fill={fillColor} />;
  };

  return (
    <div className=" dark:bg-zinc-900 bg-white pb-16 px-5 rounded-lg" style={{ width: '100%',maxWidth: '780px',margin: '0 auto' ,height: '500px' }}>
      <h1 className="text-white font-bold text-2xl p-3">Chart</h1>

      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          data={HomeChartDatas}
          margin={{
            top: 20,
            right: 20,
            bottom: 65,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="netprofit"
            fill="rgba(59,130,246,1)"
            stroke="#8884d8"
          />
          <Bar dataKey="revenue" barSize={20} fill="rgba(16,185,129,1)" />
          <Line
            type="monotone"
            dataKey="freecashflow"
            stroke="rgba(245,158,11,1)"
          />
          <Scatter dataKey="cnt" fill="#EF4444" />
        </ComposedChart>
      </ResponsiveContainer>


    </div>
  );
}
