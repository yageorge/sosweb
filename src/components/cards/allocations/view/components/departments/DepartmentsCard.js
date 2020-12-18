import React from 'react';


export default function DepartmentsCard(props) {
  const departments = props.departments

  const [openTab, setOpenTab] = React.useState('');

  // Fetching 1 depatment's courses
  const onButtonClick = async (event, departmentId) => {
    event.preventDefault();

    // Setting departmentId as current selected Tab
    setOpenTab(departmentId);

    // Function run to get allocations of selected Department
    props.getAllocations(departmentId)

  }


  const renderDepartments = () => {

    return (
      <ul
        role="tablist"
      >

        {departments.map((department) => (
          <li className="mb-2 text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === department.id
                  ? "text-white bg-blue-600"
                  : "text-blue-600 bg-white")
              }
              onClick={event => {
                onButtonClick(event, department.id)
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              {department.name}
            </a>
          </li>
        ))}

      </ul>
    )
  }

  return (

    <div className="flex flex-col w-1/4 divide-y divide-blue-500">

      <p className="rounded-t-lg bg-blue-200 mx-4 p-4 text-center text-md font-bold text-blue-600">
        Departments
      </p>

      <hr className="mx-4" />

      <div className="rounded-b-lg bg-blue-200 mx-4 mb-4 p-4">
        {renderDepartments()}
      </div>
    </div>

  );
};
