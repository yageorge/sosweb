import React, { useEffect, useState } from 'react'

import Api from '../../../services/api/Api'
import AlertModal from '../../../services/alert/AlertModal'

import HeaderStats from '../../../components/headers/HeaderStats'
import CardLineChart from '../../../components/cards/CardLineChart.js'

export default function Dashboard() {

  const [currentYearCompletions, setCurrentYearCompletions] = useState(null)
  const [previousYearCompletions, setPreviousYearCompletions] = useState(null)

  // Get Completion History Data
  const getCompletionHistoryData = () => {
    try {

      // Courses Count
      Api.courses.getCompletionHistory().then(function (response) {
        // Get response data as Object
        const currentYearCompletionsObject = response['data']['currentYearCompletions']
        const previousYearCompletionsObject = response['data']['previousYearCompletions']

        // Get Object values only + setState
        setCurrentYearCompletions(Object.values(currentYearCompletionsObject))
        setPreviousYearCompletions(Object.values(previousYearCompletionsObject))

      })

    } catch (e) {
      AlertModal('An error has occurred: ' + e.message)
    }
  }

  useEffect(() => {
    getCompletionHistoryData()
  }, [])

  return (
    <>
      {/* Cards showing general info / stats */}
      <HeaderStats />

      { currentYearCompletions && previousYearCompletions ?
        <div className='flex flex-wrap'>
          <div className='w-full mb-12 mt-12 xl:mb-0 px-4'>
            {/* Courses Enrollments */}
            <CardLineChart
              title='Courses Completions'
              dataCurrentYear={currentYearCompletions}
              dataPreviousYear={previousYearCompletions}
            />
          </div>
        </div>
        : null
      }
    </>
  );
}
