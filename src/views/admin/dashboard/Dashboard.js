import React from "react";

// components
import HeaderStats from "../../../components/headers/HeaderStats";
import CardLineChart from "../../../components/cards/CardLineChart.js";
import CardBarChart from "../../../components/cards/CardBarChart.js";

export default function Dashboard() {
  return (
    <>
      <HeaderStats />
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
    </>
  );
}
