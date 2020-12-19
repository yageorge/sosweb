import React from "react";

export default function SearchBar(props) {

  function renderInputUI(valueProps, snapshot) {
    const { value } = snapshot
    console.log('snapshot:', snapshot)

    return (
      // Input search bar
      <li className="mt-2 text-center">

        <input
          {...valueProps}
          className="w-auto text-red-600 font-medium rounded block shadow-lg rounded block leading-normal"
          value={value}
        />

      </li >

    );
  }

  return (

    <SelectSearch
      className={props.wholeUI} //className for the entire search + data container
      renderValue={renderInputUI} // className for the Input UI only container + value
      renderOption={props.renderOption} // Render design for each department
      options={props.options} // Data as options
      placeholder={props.placeholder}
      multiple // To always show departments
      search // mark it as search not select
    />

  );
}


