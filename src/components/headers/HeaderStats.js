import React, { useEffect, useState } from "react"

import Api from "../../services/api/Api";
import AlertModal from "../../services/alert/AlertModal";

import CardStats from "../../components/cards/CardStats.js";

export default function HeaderStats() {

  const [usersCount, setUsersCount] = useState('...');
  const [coursesCount, setCoursesCount] = useState('...');
  const [enrollments, setEnrollments] = useState('...');
  const [completions, setCompletions] = useState('...');
  const [completionsPoints, setCompletionsPoints] = useState('...');
  const [modulesMinutes, setModulesMinutes] = useState('...');

  const getDashboardData = async () => {
    try {

      // Users Count
      Api.users.getUsersCount().then(function (response) {
        setUsersCount(response.data)
      })

      // Courses Count
      Api.courses.getCoursesCount().then(function (response) {
        setCoursesCount(response.data)
      })

      // Enrollments / Completions / Completions Points Count
      Api.courses.getEnrollments().then(function (response) {
        setModulesMinutes(response.data.totalModulesMinutes)
        setEnrollments(response.data.totalEnrollments)
        setCompletions(response.data.totalCompletions)
        setCompletionsPoints(response.data.totalCompletionsPoints)
      })

    } catch (e) {
      AlertModal('An error has occurred: ' + e.message)
    }
  }


  useEffect(() => {
    getDashboardData()
  }, [])


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
                statTitle={usersCount}
                statIconName="fas fa-users"
                statIconColor="bg-red-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 m-2">
              <CardStats
                statSubtitle="Courses"
                statTitle={coursesCount}
                statIconName="fas fa-graduation-cap"
                statIconColor="bg-green-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 m-2">
              <CardStats
                statSubtitle="Enrollments"
                statTitle={enrollments}
                statIconName="fas fa-boxes"
                statIconColor="bg-amber-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 m-2">
              <CardStats
                statSubtitle="Acquired KPI Points"
                statTitle={completionsPoints}
                statIconName="fas fa-star"
                statIconColor="bg-purple-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 m-2">
              <CardStats
                statSubtitle="Completed Courses"
                statTitle={completions}
                statIconName="fas fa-check-double"
                statIconColor="bg-blue-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4 m-2">
              <CardStats
                statSubtitle="Modules Minutes"
                statTitle={modulesMinutes}
                statIconName="fas fa-clock"
                statIconColor="bg-indigo-700"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
