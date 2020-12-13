import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


// Will display a pop-up Confirmation Alert message
export default function AlertConfirmation(title, message, item, deleteFn) {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className="min-w-0 break-words bg-white rounded p-8 shadow-lg">

                    <h1 className="text-lg font-semibold">
                        {title}
                    </h1>

                    <p> {message} </p>

                    <p className="my-4"> {item.toUpperCase()} </p>

                    <p className="text-xs text-red-500"> (This action cannot be undone) </p>

                    <div>
                        <button
                            className="bg-gray-700 m-4 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear"
                            onClick={onClose}>
                            No
                        </button>

                        <button
                            className="bg-gray-700 m-4 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear"
                            onClick={() => {
                                deleteFn();
                                onClose();
                            }}>
                            Yes
                        </button>
                    </div>

                </div>
            );
        }
    });
}
