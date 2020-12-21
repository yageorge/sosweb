import React from "react";
import { Link } from "react-router-dom";

// Render one SideBar Tab
export default function Tab(props) {

    return (

        <li className="items-center">
            <Link
                className={
                    "text-xs uppercase p-2 font-bold block rounded-md hover:" + props.selectedClassName + " text-gray-200 transition-all ease-in-out duration-500 " +
                    // if dashboard is selected condition, adjust color to highlight
                    (window.location.href.indexOf(props.path) !== -1
                        ? props.selectedClassName
                        : "")
                }
                to={props.path}
            >

                {/* Icon */}
                <i
                    className={
                        props.icon + " mr-2 text-sm " +
                        (window.location.href.indexOf(props.path) !== -1
                            ? "opacity-75"
                            : "text-teal-500")
                    }
                ></i>{" "}

                {/* Tab title */}
                {props.title}

            </Link>
        </li>

    );

};