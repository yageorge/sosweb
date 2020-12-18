import React from 'react';


export default function DepartmentsCard(props) {
  const departments = props.departments

  const [openTab, setOpenTab] = React.useState(1);

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
              onClick={e => {
                e.preventDefault();
                setOpenTab(department.id);
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

    <div className="flex flex-col w-1/4 rounded-lg bg-blue-200 m-4 p-4">
      {renderDepartments()}
    </div>

  );
};
