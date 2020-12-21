import React from "react";
import PuffLoader from "react-spinners/PuffLoader";


export default function LoadingSpinner() {

    return (
        <div className="m-auto">
            <PuffLoader
                size={60}
                color={"#0D9488"}
                loading={true}
            />
        </div>

    );
}