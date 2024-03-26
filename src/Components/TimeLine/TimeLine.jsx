import React from "react";
import "./TimeLine.css";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { useSelector } from "react-redux";
import DiscFullOutlinedIcon from '@mui/icons-material/DiscFullOutlined';

export default function TimeLine() {
    
  const { data, loading, error } = useSelector((state) => state.products);

  return (
    <div className="flex flex-3 flex-wrap  flex-col w-full bg-zinc-900 px-3 py-2 rounded-lg">
      <h1 className="text-white text-xl font-bold">Timeline</h1>
      <div className="flex flex-col mt-5 gap-3 ">
        <div className="flex gap-2 ">
          <RocketLaunchOutlinedIcon className="text-sm " style={{color : 'red'}} />
          <p className="text-white text-sm">
            You have{" "}
            <b className="text-sm text-white">52 open refund requests</b> to
            action. This includes{" "}
            <b className="text-sm text-white">8 new requests</b>.
            
          </p>
        </div>
        <div className="relative top-5 h-[calc(100%-1rem)] min-h-[0.5rem] w-0.5 rounded-full bg-zinc-500/50"></div>
        {data &&
          data.map((product) => {
            return (
              <>
                <div className="flex gap-1 flex-wrap items-center">
                  <img src={product.image} alt=""  className="w-6 rounded-full h-auto"/>
                  <p className="text-white text-sm">
                  {product.rating.count} order was placed from Italy 
                  </p>
                  <b className="text-white">#9389</b>
                </div>
                <div className="relative top-2 h-[calc(100%-1rem)] min-h-[0.5rem] w-0.5 rounded-full bg-zinc-500/50"></div>
              </>
            );
          })}
          <div className="flex gap-2 flex-wrap">
          <DiscFullOutlinedIcon className="text-sm text-red-500" />
          <p className="text-white text-sm">
            You have{" "}
            <b className="text-sm text-white">52 open refund requests</b> to
            action. This includes{" "}
            <b className="text-sm text-white">8 new requests</b>.
          </p>
        </div>
      </div>
    </div>
  );
}
