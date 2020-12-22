import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


// Will display a pop-up Confirmation Alert message
export default function AlertModal(title, message) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="flex flex-col min-w-0 break-words bg-white rounded p-8 shadow-lg">

          <h1 className="text-lg font-semibold">
            {title}
            <br />
            {message}
          </h1>

          <button
            className="bg-gray-700 text-white text-xs font-bold uppercase px-4 py-2 m-4 rounded shadow transform hover:bg-red-900 transition-all ease-in-out duration-700 justify-self-center"
            onClick={onClose}>
            Ok
          </button>

        </div>
      );
    }
  });
}
