import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Api from "../../../services/api/Api";
import Lectures from "../../../components/cards/lectures/view/Lectures";

export default function IndexLectures() {

  //Receiving course id param to edit
  const { courseId } = useParams();

  const [lectures, setLectures] = useState(null);

  const getLectures = async () => {
    try {

      // Passing course id to getLectures
      const response = await Api.lectures.getLectures(courseId);
      console.log('lec api response: ', response)
      setLectures(response.data);

    } catch (e) {
      alert('Failed to get Lectures: ', e.request);
    }
  }

  useEffect(() => {
    getLectures();
  }, []);

  return (
    <>
      { lectures ?
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <Lectures courseId={courseId} lectures={lectures} />
          </div>
        </div>
        : null
      }
    </>
  );
}
