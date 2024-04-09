import React, { useState } from "react";
import './SaleBoxs.css'



export default function SaleBoxs({  children}) {

  return (
    <div className="sales-box w-full text-center  lg:w-1/4 dark:bg-zinc-900 dark:text-white bg-white  flex flex-col rounded-lg p-4">
      {children}
    </div>
  );
}
