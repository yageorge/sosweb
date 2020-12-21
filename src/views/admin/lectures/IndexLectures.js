import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Api from "../../../services/api/Api";
import AlertModal from "../../../services/alert/AlertModal"

import Lectures from "../../../components/cards/lectures/view/Lectures";

export default function IndexLectures() {

  //Receiving course id param to edit
  const { courseId } = useParams();

  const [lectures, setLectures] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const getLectures = async () => {
    try {

      // Passing course id to getLectures
      const response = await Api.lectures.getLectures(courseId);
      setLectures(response.data);

    } catch (e) {
      AlertModal('An error has occurred: ' + e.message)
    }
  }

  useEffect(() => {
    getLectures();
  }, [refresh]);

  return (
    <>
      { lectures ?
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <Lectures courseId={courseId} lectures={lectures} refresh={setRefresh} />
          </div>
        </div>
        : null
      }
    </>
  );
}
