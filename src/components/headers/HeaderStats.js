import React from "react";

// components

import CardStats from "../../components/cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}

      <div className="px-4 md:px-10 mx-auto w-full">
        <div>
          {/* Card stats */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 m-2">
              <CardStats
                statSubtitle="Users"
                statTitle="277"
                statIconName="fas fa-users"
                statIconColor="bg-red-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 m-2">
              <CardStats
                statSubtitle="Courses"
                statTitle="36"
                statIconName="fas fa-graduation-cap"
                statIconColor="bg-green-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 m-2">
              <CardStats
                statSubtitle="Enrollments"
                statTitle="78"
                statIconName="fas fa-clipboard-check"
                statIconColor="bg-pink-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 m-2">
              <CardStats
                statSubtitle="KPI Points"
                statTitle="178"
                statIconName="fas fa-clipboard-check"
                statIconColor="bg-pink-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 m-2">
              <CardStats
                statSubtitle="Completed Courses"
                statTitle="24"
                statIconName="fas fa-percent"
                statIconColor="bg-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
