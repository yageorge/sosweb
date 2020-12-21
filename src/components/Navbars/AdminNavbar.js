import React from "react";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-right p-4">

        <div className="w-full mx-autp items-right flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">

          {/* Brand */}
          <a
            className="text-indigo-400 text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Username / Email
          </a>
        </div>

      </nav>

    </>
  );
}
