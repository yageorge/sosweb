import React from "react"
import { Link } from "react-router-dom"

import Api from "../../../../../services/api/Api"
import AlertModal from "../../../../../services/alert/AlertModal"
import AlertConfirmation from "../../../../../services/alert/AlertConfirmation"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"

import "./panel.css"

export default function Panel(props) {


  // On delete press - Show Alert:
  const onDelete = (lectureId, lectureTitle) => {
    AlertConfirmation(
      "Are you sure?",
      "Do you want to delete:",
      lectureTitle,
      () => deleteLecture(lectureId)
    )
  }

  // Deleting Course
  const deleteLecture = async (lectureId) => {

    try {

      const response = await Api.lectures.deleteLecture(lectureId);

      // If no error occurred:
      if (!response.data["error"]) {

        // Run API refresh at parent file. indexLectures
        props.refresh()
      } else {

        // Inform course of an error
        const errorMsg = response.data["error"]
        AlertModal(
          "An error has occured: " + errorMsg
        )
      }

    } catch (e) {
      AlertModal("An error has occurred: " + e.message)
    }
  }


  return (

    <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
      {props.lectures.map((lecture) => (

        <AccordionItem key={lecture.id}>

          <AccordionItemHeading>

            <AccordionItemButton className="h-16 bg-gray-700 p-4 h-20 outline-none">

              <AccordionItemState>
                {({ expanded }) => (expanded ?
                  <i className="fas fa-chevron-circle-down text-teal-300 text-lg transform transition-all ease-in-out duration-700"></i>
                  :
                  <i className="fas fa-chevron-circle-right text-teal-600 text-xs transform transition-all ease-in-out duration-700"></i>
                )}
              </AccordionItemState>

              {/* Expansion panel title */}
              <div className="flex flex-row relative max-w-full flex-grow">

                {/* Lecture Title + Duration */}
                <div className="flex-grow text-md font-bold text-teal-600">
                  {`${lecture.title}  -  (${lecture.duration} min)`}
                </div>

                {/* Edit button */}
                <div className="mr-4">
                  <td>
                    <Link to={`/admin/course/${props.courseId}/lecture/${lecture.id}/edit/`}>
                      <i className="far fa-edit text-amber-700 text-xl hover:text-amber-500 transform hover:scale-150 transition-all ease-in-out duration-700"></i>
                    </Link>
                  </td>
                </div>

                {/* Delete button */}
                <div>
                  <td>
                    <button
                      onClick={() => onDelete(lecture.id, lecture.title)}>
                      <i className="fas fa-trash text-red-500 text-xl hover:text-red-700 transform hover:scale-150 transition-all ease-in-out duration-700"></i>
                    </button>
                  </td>
                </div>

              </div>

            </AccordionItemButton>

          </AccordionItemHeading>

          <AccordionItemPanel>

            {/* whitespace not working  */}
            <p className="text-lg text-gray-200 whitespace-pre-line">
              {lecture.content}
            </p>

            {/* whitespace not working  */}
            {lecture.urlVideo ?
              <a
                className="text-sm text-gray-200 font-bold tracking-wider mt-8 inline-block"
                href={lecture.urlVideo}
                target="_blank"
              >
                {`Video Link: ${lecture.urlVideo}`}
              </a>
              : null
            }
          </AccordionItemPanel>

        </AccordionItem>
      ))}
    </Accordion>

  );

}