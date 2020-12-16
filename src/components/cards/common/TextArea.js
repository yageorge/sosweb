// Render one user input
export default function TextArea(props) {

  return (

    <div className="relative w-full mb-3">

      <label
        className="block uppercase text-gray-500 text-xs font-bold mb-2"
        htmlFor={props.inputId}
      >
        {props.inputName}
      </label>

      <textarea
        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
        required={true}
        id={props.inputId}
        name={props.inputId}
        placeholder={props.inputName}
        defaultValue={props.defaultValue}
        maxLength={props.maxLength}
        onChange={props.onChange}
        rows={props.row}
        cols={props.cols}
      />

    </div>
  );

};