import React from 'react';


export default function CoursesCard(props) {

  const courses = props.courses
  const [openTab, setOpenTab] = React.useState(1);

  const renderCourses = () => {

    return (
      <ul
        role="tablist"
      >

        {courses.map((course) => (
          <li className="mb-2 text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === course.id
                  ? "text-white bg-blue-600"
                  : "text-blue-600 bg-white")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(course.id);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              {course.title}
            </a>
          </li>
        ))}

      </ul>
    )
  }

  // Rendering table
  return (

    <div className="flex flex-col w-1/4 rounded-lg bg-blue-200 m-4 p-4">
      {renderCourses()}
    </div>

  );
};
