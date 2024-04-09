import React from "react";
import "./Tooltip.css";

export default function Tooltip({TooltipTitle , isShowTooltip}) {
  return (
    <div
      className={`tooltip  absolute to-0 border rounded-full text-sm border-zinc-800 p-1 dark:text-white text-dark ${
        isShowTooltip ? "" : "hidden"
      }`}
    >
      {TooltipTitle}
    </div>
  );
}
