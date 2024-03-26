import React from "react";
import "./Tooltip.css";

export default function Tooltip({TooltipTitle , isShowTooltip}) {
  return (
    <div
      className={`tooltip  absolute to-0 border rounded-full text-sm border-zinc-800 p-1 text-white ${
        isShowTooltip ? "" : "hidden"
      }`}
    >
      {TooltipTitle}
    </div>
  );
}
