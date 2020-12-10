import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

          {/* Name + Route to Home */}
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              to="/"
            >
              Skill Optimizer
            </Link>
          </div>

          {/* Social Logos + Login / Register Buttons */}
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none block rounded shadow-lg"
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-row list-none ml-auto">

              {/* Facebook Logo: */}
              <li>
                <a
                  className="px-3 py-2 flex items-center"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <i className="text-gray-300 fab fa-facebook text-lg leading-lg " />
                </a>
              </li>

              {/* Twitter Logo: */}
              <li>
                <a
                  className="px-3 py-2 flex items-center"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <i className="text-gray-300 fab fa-twitter text-lg leading-lg " />
                </a>
              </li>

              {/* Login Button: */}
              <div className="pl-4 w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                  to="/auth"
                >
                  Login
                </Link>
              </div>

              {/* Register Button: */}
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                  to="/auth/signup"
                >
                  Signup
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}