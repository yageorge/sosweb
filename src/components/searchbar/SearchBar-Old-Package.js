import React from "react";

//this had 2 issues:
// 1. without using renderInputUI to modify UI design for input itself: problem is ugle design + what is written is in while cannot change
// 2. with apply renderInputUI, design is ok, but on loose focus value is not resetting
//    + default column name used to search is name, so with courses, it is title, so need to convert all data to new set with name not title
import SelectSearch from 'react-select-search';

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


