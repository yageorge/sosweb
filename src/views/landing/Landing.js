import React from "react";

import background from "../../assets/img/landing-background.png"
import so1 from "../../assets/img/landing-so1.png"
import Navbar from "../../components/navbars/AuthNavbar";
import Footer from "../../components/footers/Footer";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>

        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">

          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>

            {/* Below effect of cutting right high left low, worked, but not adaptive to screen size, need a bit of adjustment */}
            {/* <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="16 0 330 95" // polygon position + sizes
              className="absolute left-0 w-full block h-95-px -top-94-px"
            >
              <polygon
                points="-10,95 583,95 583,70" // polygon position + sizes
                className="text-blue-400 fill-current"
              ></polygon>
            </svg> */}

          </div>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Your In-House digital learning platform.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    SO will revolutionize how you train your employees.
                    <br />
                    Ensuring essential skills to every employee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="flex flex-wrap items-center mt-12">

                {/* Left Section */}
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">

                  <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                    <i className="fas fa-user-friends text-xl text-gray-800"></i>
                  </div>
                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Build customized Training and Courses now!
                </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 font-normal">
                    Admins will be creating customized training and courses with KPI tracker, then assign them to departments.
                    While keeping track of the entire progress
                </p>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700 font-normal">
                    Employees, on the other hand, will be able to go through the materials On The Go using their mobile application.
                    Keeping track of their status and history.
                </p>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                    <img
                      alt="..."
                      src={so1}
                      className="w-full align-middle rounded-t-lg"
                    />

                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="10 0 160 95" // polygon position + sizes
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,45" // polygon position + sizes
                        className="text-gray-800 fill-current"
                      ></polygon>
                    </svg>

                    <blockquote className="relative p-8 mb-4">
                      <h4 className="text-xl font-bold text-white">
                        Top Notch Services
                    </h4>
                      <p className="text-md font-light mt-2 text-white">
                        Employees will be accessing their material using a cross-platform mobile app.
                        Working on their Tablets, Iphones or Android Smartphones.
                    </p>
                    </blockquote>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


      </main>

      {/* Common Footer */}
      <Footer absolute />

    </>
  );
}
