// Render one user input
export default function UserInput(props) {

    return (

        <div className="relative w-full mb-3">
            <label
                className="block uppercase text-gray-800 text-xs font-bold mb-2"
                htmlFor={props.inputId}
            >
                {props.inputName}
            </label>
            <input
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
                type={props.inputType}
                required={true}
                id={props.inputId}
                name={props.inputId}
                placeholder={props.inputName}
                defaultValue={props.defaultValue}
                minLength={props.minLength}
                maxLength={props.maxLength}
                max={props.max}
                onChange={props.onChange}
            />
        </div>

    );

};