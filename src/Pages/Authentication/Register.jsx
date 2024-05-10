import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [button, setButton] = useState(true);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center items-center   min-h-screen py-6">
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:pr-12 lg:pl-0 lg:py-0 lg:w-3/5 ">
          <div className="w-full">
            <div className="py-6">
              <h1 className="text-4xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Create your account
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>
            </div>

            <form className="flex flex-col space-y-6">
              {/* col 1 */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your Full Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200  dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              {/* col 2  */}
              <div>
                <label
                  htmlFor="emailAddress"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  placeholder="Enter your Email Address"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200  dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              {/* col 3  */}
              <div>
                <label
                  htmlFor="photoURL"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Photo URL
                </label>
                <input
                  type="url"
                  id="photoURL"
                  placeholder="https://"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200  dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              {/* col 4  */}
              <div>
                <label
                  htmlFor="registerPassword"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="registerPassword"
                  placeholder="Enter your Password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200  dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              {/* col 5  */}
              <div>
                <small>
                  <span className="mr-2">
                    <input
                      onClick={() => setButton(!button)}
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </span>
                  We want you to know exactly how our service works and why we
                  need your details. Please confirm that you have read,
                  understood, and accepted the terms and conditions.
                </small>
              </div>

              <button
                disabled
                className={` w-full ${
                  button ? " disabled:opacity-20 " : "block"
                } px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500  hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}
              >
                Sign Up
              </button>
            </form>
            <div className="mt-6 text-center ">
              <Link
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                to="/login"
              >
                Already have an account? Sign In
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hidden bg-cover lg:block lg:w-3/5  h-screen"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Register;
