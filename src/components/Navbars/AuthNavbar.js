import React from "react";
import { Link } from "react-router-dom";

import soslogo from "../../assets/img/sos_logo.png"

export default function Navbar() {
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-start justify-between">

          {/* CompanyLogo */}
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
            >
              <img
                className="h-28 w-28 transform hover:scale-110 transition-all ease-in-out duration-500"
                src={soslogo}
              />
            </Link>
          </div>

          {/* Social Logos + Login / Register Buttons */}
          <div
            className=
            "lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none block rounded shadow-lg"

          >
            <ul className="flex flex-row list-none ml-auto">

              {/* Facebook Logo: */}
              <li>
                <a
                  className="px-3 py-2 flex items-center transform hover:scale-110 transition-all ease-in-out duration-400"
                  href="https://www.facebook.com/george.yaacoub/"
                  target="_blank"
                >
                  <i className="text-gray-200 fab fa-facebook text-lg leading-lg " />
                </a>
              </li>

              {/* Twitter Logo: */}
              <li>
                <a
                  className="px-3 py-2 flex items-center transform hover:scale-110 transition-all ease-in-out duration-400"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <i className="text-gray-200 fab fa-twitter text-lg leading-lg " />
                </a>
              </li>


              {/* Login Button: */}
              <li>
                <div className="pl-4 w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                  <Link
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase transform hover:scale-110 transition-all ease-in-out duration-400"
                    to="/auth"
                  >
                    Login
                </Link>
                </div>
              </li>

              {/* Register Button: */}
              <li>
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                  <Link
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase transform hover:scale-110 transition-all ease-in-out duration-400"
                    to="/auth/signup"
                  >
                    Signup
                </Link>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}