import { useHistory, useLocation } from "react-router-dom";

import LoadingSpinner from "../../../spinner/LoadingSpinner"

import TableHeader from "../../common/TableHeader"
import Panel from "./components/Panel"

export default function Lectures(props) {

  const history = useHistory();
  const location = useLocation();

  // Retreiving courseTitle from history.push / state
  const courseTitle = location.state.courseTitle

  const courseId = props.courseId
  const lectures = props.lectures
  const lecturesCount = lectures ? lectures.length : 0


  // Redirect to Create new Lecture
  const onClick = (e) => {
    e.preventDefault()
    history.push({
      pathname: `/admin/course/${courseId}/lecture/create`,
      state: {
        courseTitle: courseTitle, //passing course title in state params
      },
    })
  }

  return (
    <>
      <div
        className=
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 text-white">

        {/* Table header + Create Lecture button */}
        <TableHeader
          title={courseTitle.toUpperCase() + " - total lectures: " + lecturesCount}
          titleClassName="text-blue-500"
          buttonIcon="fas fa-plus-circle text-teal-600 hover:text-amber-600 transform hover:scale-125 transition-all ease-in-out duration-700 "
          onClick={onClick} />

        {/* Render Table with all lectures */}
        {lectures ?
          <div className="block w-full overflow-x-auto">

            <Panel
              courseId={courseId}
              lectures={lectures}
              refresh={props.refresh}
            />

          </div>
          :
          <div className="flex m-16">
            <LoadingSpinner />
          </div>
        }

      </div>
    </>
  );
}