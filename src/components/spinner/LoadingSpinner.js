import React from "react";
import BeatLoader from "react-spinners/BeatLoader";


export default function LoadingSpinner() {

    return (
        <div className="object-center p-6">
            <BeatLoader
                size={16}
                color={"#320032"}
                loading={true}
            />
        </div>

    );
}