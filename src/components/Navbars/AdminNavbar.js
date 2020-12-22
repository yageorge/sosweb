import React, { useEffect, useState, useContext } from "react"

import { AppContext } from "../../services/context/AppContext"

export default function Navbar() {
  //Loading AppContext to get cookie state
  const { state } = useContext(AppContext)
  const userName = state.userName
  const userEmail = state.userEmail

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-right p-4">

        <div className="flex flex-row absolute inset-y-0 right-0 text-right m-4">

          <div className="text-indigo-300 text-xs hidden lg:inline-block font-semibold mr-4">
            {userEmail}
          </div>

          <div className="text-indigo-300 text-sm uppercase hidden lg:inline-block font-semibold">
            {userName}
          </div>

        </div>

      </nav>

    </>
  );
}
