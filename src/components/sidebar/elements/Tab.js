import React from "react";
import { Link } from "react-router-dom";

// Render one SideBar Tab
export default function Tab(props) {

    return (

        <li className="items-center">
            <Link
                className={
                    "text-xs uppercase py-3 font-bold block " +
                    // if dashboard is selected condition, adjust color to highlight
                    (window.location.href.indexOf(props.path) !== -1
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-gray-800 hover:text-gray-600")
                }
                to={props.path}
            >
                <i
                    className={
                        props.icon + " mr-2 text-sm " +
                        (window.location.href.indexOf(props.path) !== -1
                            ? "opacity-75"
                            : "text-gray-600")
                    }
                ></i>{" "}
                {props.title}
            </Link>
        </li>

    );

};