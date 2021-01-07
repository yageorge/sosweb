import React from "react"
import { useFileUpload } from 'use-file-upload'

export default function FilePicker(props) {
  const [file, selectFile] = useFileUpload()

  return (
    <div className="flex flex-col mt-8">

      {/* Upload image button link */}
      <button
        className="self-start mb-2"
        form="file_picker"
        onClick={() => {
          // Single File Upload accepts only images
          selectFile({ accept: 'image/*' }, ({ source, name, size, file }) => {
            props.onFilePick({ 'fileName': name, 'file': file })
          })
        }}
      >
        Upload Image
      </button>

      {/* Image preview */}
      {file ?
        <div>
          <img src={file.source} alt='preview' />
          <span> Name: {file.name} </span>
          <span> Size: {(file.size / 1000000).toFixed(2)} MB</span>
        </div>
        :
        <span>No Image selected</span>
      }
    </div>


  )
}
