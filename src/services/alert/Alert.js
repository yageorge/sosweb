import React from 'react';

export default function Alert(props) {
    console.log('props alerts', props.alert)
    return (

        <div className="text-white px-6 py-4 border-0 rounded relative bg-red-500">

            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell"></i>
            </span>

            <span className="inline-block align-middle mr-8">
                <b className="capitalize">Alert! {props.alert}</b>
            </span>

        </div>


    );
}