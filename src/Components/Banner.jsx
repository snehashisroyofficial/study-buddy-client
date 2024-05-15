import React from "react";
import bannerAmination from "../assets/Animation - 1715572231426.json";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: bannerAmination,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="bg-gray-100  dark:bg-gray-800  text-gray-800 rounded-xl dark:text-white  ">
      <div className="container flex flex-col gap-4 justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
        <div className="lg:w-1/2 flex items-center   justify-center max-h-fit  ">
          <Lottie options={defaultOptions} />
        </div>
        <div className=" lg:w-1/2   flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
          <h1 className="text-3xl font-bold leading-none sm:text-5xl h-24 lg:h-36 ">
            Empower Your Learning:{" "}
            <span className="text-blue-600">
              <Typewriter
                words={[
                  " Give & Get Assignments",
                  "Master new skills",
                  "Create Assignments",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Master new skills with collaborative assignments. Create, share, and
            receive feedback to boost your learning journey.
          </p>
          <div className="flex flex-col justify-between space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to="/assignments">
              <button className="px-4 py-3 text-lg font-semibold rounded bg-blue-600 text-gray-50 ">
                View Assignments
              </button>
            </Link>

            <Link to="/create-assignments">
              <button className="px-4 py-3 text-lg font-semibold border rounded border-gray-800">
                Create Assignments
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
