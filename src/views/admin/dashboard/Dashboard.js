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
            data2021={[8, 12, 17, 15, 17, 9, 16, 4, 19, 7, 18, 22]}
            data2020={[13, 19, 7, 19, 7, 14, 23, 12, 27, 17, 26, 17]}
          />
        </div>
      </div>
    </>
  );
}
