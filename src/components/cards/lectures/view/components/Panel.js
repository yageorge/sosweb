import React from 'react';
import { Link } from "react-router-dom";

import Api from "../../../../../services/api/Api";
import AlertModal from '../../../../../services/alert/AlertModal';
import AlertConfirmation from '../../../../../services/alert/AlertConfirmation';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './panel.css';

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
      if (!response.data['error']) {

        // Run API refresh at parent file. indexLectures
        props.refresh()
      } else {

        // Inform course of an error
        const errorMsg = response.data['error']
        AlertModal(
          "An error has occured: " + errorMsg
        )
      }

    } catch (e) {
      AlertModal('An error has occurred: ' + e.message)
    }
  }


  return (

    <Accordion allowMultipleExpanded={false}>
      {props.lectures.map((lecture) => (

        <AccordionItem key={lecture.id}>

          <AccordionItemHeading>
            <AccordionItemButton>

              <div className="flex flex-row relative max-w-full flex-grow ">

                <div className="flex-grow">
                  {lecture.title}
                </div>


                {/* Edit button */}
                <div className="mr-4">
                  <td>
                    <Link to={`/admin/course/${props.courseId}/lecture/${lecture.id}/edit/`}>
                      <i className="far fa-edit text-green-500 text-2xl"></i>
                    </Link>
                  </td>
                </div>

                {/* Delete button */}
                <div>
                  <td>
                    <button
                      onClick={() => onDelete(lecture.id, lecture.title)}>
                      <i className="fas fa-trash text-red-500 text-md text-2xl"></i>
                    </button>
                  </td>
                </div>

              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>

            {/* whitespace not working  */}
            <p className="text-lg text-green-500">
              {lecture.content}
            </p>
          </AccordionItemPanel>

        </AccordionItem>
      ))}
    </Accordion>

  );

}