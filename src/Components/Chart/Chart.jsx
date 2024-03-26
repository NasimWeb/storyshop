import React from "react";
import "./Chart.css";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import HomeChartDatas from "../../../src/Datas/HomeChartDatas";




export default function Chart() {

   
        const renderCustomBar = (props) => {
          const { payload, fill } = props;
          let fillColor;
          
          // Custom logic based on data or any other condition
          if (payload.name === 'Jan') {
            fillColor = '#8884d8'; // Custom color for January
          } else if (payload.name === 'Feb') {
            fillColor = '#82ca9d'; // Custom color for February
          } else {
            fillColor = fill; // Default color for other months
          }
      
          return <rect {...props} fill={fillColor} />;
        };


  return (
    
<div style={{width:'780px' , height:'510px'}}  className="bg-zinc-900 pb-16 px-5 rounded-lg">
<ResponsiveContainer width="100%" height='100%' className=' '>
    <h1 className="text-white font-bold text-2xl p-3">Chart</h1>
      <BarChart data={HomeChartDatas} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis  />
        <Tooltip />
        <Legend />
        <Bar className="rounded-full" dataKey="netprofit" fill="rgba(59,130,246,1)" shape={renderCustomBar} />
        <Bar dataKey="revenue" fill="rgba(16,185,129,1)" shape={renderCustomBar} />
        <Bar dataKey="freecashflow" fill="rgba(245,158,11,1)" shape={renderCustomBar} />
      </BarChart>  
    </ResponsiveContainer>
    </div> 
  );
}
