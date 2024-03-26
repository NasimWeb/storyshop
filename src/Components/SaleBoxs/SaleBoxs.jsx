import React, { useState } from "react";
import './SaleBoxs.css'



export default function SaleBoxs({  children}) {

  return (
    <div className="sales-box w-1/2 text-center  lg:w-1/4 bg-zinc-900 flex flex-col rounded-lg p-4">
      {children}
    </div>
  );
}
