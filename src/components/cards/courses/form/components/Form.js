import React from 'react';

import FilePicker from "../../../../files/FilePicker";
import UserInput from "../../../common/UserInput"
import TextArea from "../../../common/TextArea"
import SelectCategory from "../../../categories/common/SelectCategory"

export default function Forum(props) {

  const course = props.course

  // Rendering table
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form id="course_form" onSubmit={props.submitFunction}>

        {/* Title Input */}
        <UserInput
          inputId="title"
          inputName="Title"
          inputType="text"
          defaultValue={course ? course.title : ""}
          maxLength="64"
          required={true}
          onChange={props.onChange}
        />

        {/* Description Input */}
        <TextArea
          inputId="description"
          inputName="Description"
          defaultValue={course ? course.description : ""}
          maxLength="128"
          onChange={props.onChange}
          rows={2}
          cols={2}
        />

        {/* Points Input */}
        <UserInput
          inputId="points"
          inputName="Points"
          inputType="number"
          defaultValue={course ? course.points : ""}
          max="999"
          required={true}
          onChange={props.onChange}
        />

        {/* User Select Category */}
        <SelectCategory
          defaultValue={course ? course.category_id : ""}
          onChange={props.onChange}
        />

        {/* Upload Image */}
        <FilePicker
          defaultValue={course ? course.urlImage : ""}
          onFilePick={props.onFilePick}
        />

        {/* Submit form Button */}
        <div className="text-center mt-6">
          <button
            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="submit"
            form="course_form"
          >
            {props.action}
          </button>
        </div>

      </form>
    </div>
  );
};