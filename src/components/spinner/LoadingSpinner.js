import React from "react";
import BeatLoader from "react-spinners/BeatLoader";


export default function LoadingSpinner() {

    return (
        <div className="object-center p-4">
            <BeatLoader
                size={20}
                color={"#1267bc"}
                loading={true}
            />
        </div>

    );
}