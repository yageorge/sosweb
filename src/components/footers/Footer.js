import React from "react";

export default function Footer(props) {
  return (
    <>
      {/* <footer className="absolute w-full bottom-0 bg-gray-900 pb-6"> */}

      < footer className={
        (props.absolute
          ? "absolute "
          : "block ") + "w-full bottom-auto bg-gray-800 pb-6"
      }>

        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                Copyright © 2021{" "}
                <a
                  href="https://www.linkedin.com/in/georgeyaacoub/"
                  className="text-white hover:text-gray-400 text-sm font-semibold py-1"
                >
                  Skill Optimizer
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.linkedin.com/in/georgeyaacoub/"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    George Yaacoub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/georgeyaacoub/"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer >
    </>
  );
}
