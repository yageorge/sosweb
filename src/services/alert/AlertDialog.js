import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


//TODO get some UI good stuff from AlertModal to here


// Will display a pop-up Alert message
export default function AlertDialog(deleteFn, name) {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className="min-w-0 break-words bg-white rounded p-8 shadow-lg">

                    <h1 className="text-lg font-semibold">
                        Are you sure?
                    </h1>

                    <p> Do you want to delete: </p>

                    <p className="my-4"> {name.toUpperCase()} </p>

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



    // confirmAlert({
    //     title: 'Are you sure?',
    //     message: 'Do you want to delete: ' + name.toUpperCase(),
    //     buttons: [
    //         {
    //             label: 'Yes',
    //             onClick: () => deleteFn()
    //         },
    //         {
    //             label: 'No',
    //             onClick: () => false
    //         }
    //     ]
    // });
}
