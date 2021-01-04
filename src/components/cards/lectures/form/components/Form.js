import React, { useState } from 'react';

import UserInput from "../../../common/UserInput"
import TextArea from "../../../common/TextArea"

export default function Forum(props) {

  const lecture = props.lecture

  // Rendering table
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form id="lecture_form" onSubmit={props.submitFunction}>

        {/* Title Input */}
        <UserInput
          inputId="title"
          inputName="Title"
          inputType="text"
          defaultValue={lecture ? lecture.title : ""}
          maxLength="64"
          required={true}
          onChange={props.onChange}
        />

        {/* Total Duration Input */}
        <UserInput
          inputId="duration"
          inputName="Total Duration (min)"
          inputType="number"
          defaultValue={lecture ? lecture.duration : ""}
          max="9999"
          required={true}
          onChange={props.onChange}
        />

        {/* User Video URL Input */}
        < UserInput
          inputId="urlVideo"
          inputName="Video URL"
          inputType="url"
          defaultValue={lecture ? lecture.urlVideo : ""}
          maxLength="64"
          required={false}
          onChange={props.onChange}
        />

        {/* User Content Input */}
        < TextArea
          inputId="content"
          inputName="Content"
          defaultValue={lecture ? lecture.content : ""}
          onChange={props.onChange}
          rows={26}
        />

        {/* Submit form Button */}
        <div className="text-center mt-6">
          <button
            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="submit"
            form="lecture_form"
          >
            {props.action}
          </button>
        </div>

      </form>
    </div>
  );
};