import React from 'react';

// Will display an on screen Alert message
export default function Alert(props) {

    return (

        <div className="text-white px-6 py-4 border-0 rounded relative bg-red-500">

            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell mr-2"></i>
            </span>

            <span className="inline-block align-middle mr-8">
                <b className="capitalize">{props.alert}</b>
            </span>

        </div>


    );
}