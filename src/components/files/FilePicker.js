import React from "react"
import { useFileUpload } from 'use-file-upload'

export default function FilePicker(props) {
  const [file, selectFile] = useFileUpload()

  return (
    <div className="flex flex-col mt-8">

      {/* Previously loaded image */}
      {props.defaultValue ?
        <img
          className="inline object-cover w-48 h-28 my-3 rounded-md"
          alt=''
          src={props.defaultValue}
        />
        : null
      }

      {/* Upload image button link */}
      <button
        className="self-start mb-2 text-red-500"
        form="file_picker"
        onClick={() => {
          // Single File Upload accepts only images
          selectFile(
            { accept: 'image/*' },
            ({ source, name, size, file }) => {
              console.log('size:', size)
              // if (size < 500000) {
              props.onFilePick({
                'fileName': name,
                'file': file,
              })
              // } else {
              //   console.log('nooooooooope')
              // }
            }
          )
        }}
      >
        {props.title}
      </button>

      {/* Image preview */}
      {file ?
        <div>

          <img
            src={file.source}
            alt='preview'
          />

          <span> Name: {file.name} </span>
          <span> Size: {(file.size / 1000000).toFixed(2)} MB</span>
        </div>
        :
        <span className="text-xs">
          No Image selected
          </span>
      }
    </div>


  )
}
