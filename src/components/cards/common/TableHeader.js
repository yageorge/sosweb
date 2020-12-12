import React from 'react';

export default function TableHeader(props) {

  const renderButton = () => {
    if (typeof props.onClick === 'function') {
      return <button onClick={props.onClick}>
        <i
          className={(props.buttonIcon) + "mr-2 text-4xl"}>
        </i>
      </button>
    }




  }

  // Rendering the title + Add Button of a card table
  return (
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-row relative w-full px-4 max-w-full flex-grow flex-1">

          <h3
            className=
            "font-semibold text-lg text-white flex-grow" >
            {props.title}
          </h3>

          {renderButton()}

        </div>
      </div>
    </div>
  );
};
