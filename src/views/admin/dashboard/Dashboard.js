import React from "react";

// components
import HeaderStats from "../../../components/headers/HeaderStats";
import CardLineChart from "../../../components/cards/CardLineChart.js";

export default function Dashboard() {
  return (
    <>
      {/* Cards showing general info / stats */}
      <HeaderStats />

      <div className="flex flex-wrap">
        <div className="w-full mb-12 mt-12 xl:mb-0 px-4">
          {/* Courses Enrollments */}
          <CardLineChart
            title="Courses Completions"
            data2021={[18, 34, 17, 15, 37, 19, 29, 15, 19, 34, 55, 48]}
            data2020={[9, 14, 7, 25, 27, 14, 35, 20, 14, 29, 45, 39]}
          />
        </div>
      </div>
    </>
  );
}
