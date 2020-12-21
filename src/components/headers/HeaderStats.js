import React, { useEffect, useState } from "react"

import Api from "../../services/api/Api";
import AlertModal from "../../services/alert/AlertModal";

import CardStats from "../../components/cards/CardStats.js";

export default function HeaderStats() {

  const [usersCount, setUsersCount] = useState('...');
  const [coursesCount, setCoursesCount] = useState('...');


  const getUsersCount = async () => {
    try {

      const response = await Api.users.getUsersCount();
      setUsersCount(response.data);

    } catch (e) {
      AlertModal('An error has occurred: ' + e.message)
    }
  }

  const getCoursesCount = async () => {
    try {

      const response = await Api.courses.getCoursesCount();
      setCoursesCount(response.data);

    } catch (e) {
      AlertModal('An error has occurred: ' + e.message)
    }
  }

  const getStatsData = async () => {
    await getUsersCount()
    await getCoursesCount()
  }

  useEffect(() => {
    getStatsData()
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
