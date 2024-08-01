import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { SiStudyverse } from "react-icons/si";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut } = useAuth();

  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("class", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navlinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-orange-200 rounded-lg text-black  p-2  transition duration-300 ease-in-out "
            : "p-2"
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-orange-200 rounded-lg text-black  p-2 transition duration-300 ease-in-out "
            : "p-2"
        }
        to="/assignments"
      >
        Assignments
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-orange-200 rounded-lg text-black  p-2  transition duration-300 ease-in-out"
            : "p-2"
        }
        to="/create-assignments"
      >
        Create Assignments
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-orange-200 rounded-lg text-black  p-2  transition duration-300 ease-in-out"
            : "p-2"
        }
        to="/pending-assignments"
      >
        Pending Assignments
      </NavLink>
    </>
  );

  // signin using email and password

  const handleSignout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="navbar container mx-auto py-3">
      <div className="navbar-start">
        {/* for mobile devices  */}

        <div className="">
          <div
            onClick={() => setOpen(!open)}
            tabIndex={0}
            role="button"
            className="lg:hidden text-4xl ml-2"
          >
            {open ? <IoMdClose /> : <IoMdMenu />}
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm px-6 font-poppins font-semibold absolute lg:hidden mt-4 z-[1] p-4 gap-4 w-2/3 bg-base-200 dark:bg-gray-800 h-screen transition-all duration-500 ease-in ${
              open ? "left-0 top-14" : "-left-full top-14"
            }`}
          >
            {navlinks}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-lg md:text-2xl text-orange-500  font-header"
        >
          <SiStudyverse className="text-lg md:text-4xl" />
          Study Buddy
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-semibold ">
        <ul className="  menu-horizontal px-1 text-base space-x-3">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end space-x-6 ">
        <label className="cursor-pointer grid place-items-center">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        {/* circle avatar section  */}
        {user && (
          <div className="dropdown dropdown-end pr-4 md:pr-0 ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-30  rounded-full  ">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className=" dark:bg-gray-700 mt-3 z-[1] px-2  py-4 w-[200px] flex gap-2 shadow menu menu-sm dropdown-content bg-base-100  "
            >
              <NavLink
                className="w-full py-2 text-sm text-center bg-green-100/60  dark:bg-green-700 dark:text-white font-bold text-green-600 rounded-md"
                to="/my-submitted-assignments"
              >
                Attempted Assignments
              </NavLink>
              <NavLink
                className="w-full py-2 text-sm text-center bg-blue-100/60  dark:bg-blue-700 dark:text-white font-bold text-blue-600 rounded-md"
                to="/forgetpassword"
              >
                Forget Password
              </NavLink>

              <button
                onClick={handleSignout}
                className=" w-full py-2 text-lg bg-red-100/60 dark:bg-red-700 dark:text-white   font-bold text-red-600 rounded-md  "
              >
                Logout
              </button>
            </ul>
          </div>
        )}

        {!user && (
          <div>
            {/* for mobile devices */}
            <div className="dropdown dropdown-end pr-4 md:pr-0 md:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="w-30  rounded-full  ">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/external-user-user-interface-kmg-design-flat-kmg-design-2.png"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dark:bg-gray-800 mt-3 z-[1]   py-4 w-[200px] flex gap-2 shadow menu menu-sm dropdown-content bg-base-100  "
              >
                <Link to="/login">
                  <button className=" w-full py-2 text-lg dark:bg-blue-700 dark:text-white   text-blue-700 bg-blue-400/40 rounded-xl font-bold">
                    Sign in
                  </button>
                </Link>

                <Link to="/register">
                  <button className="w-full py-2 text-lg dark:bg-green-700 dark:text-white  text-green-700 bg-green-400/60 rounded-xl font-bold">
                    Register
                  </button>
                </Link>
              </ul>
            </div>

            {/* for large screen  */}
            <div className="space-x-3 hidden lg:flex">
              <Link to="/login">
                <button className=" px-2 md:px-6 py-2 dark:bg-blue-700 dark:text-white  text-blue-700 bg-blue-400/40 rounded-xl font-bold inline">
                  Sign in
                </button>
              </Link>

              <Link to="/register">
                <button className="px-2 md:px-6 py-2 dark:bg-green-700 dark:text-white text-green-700 bg-green-400/60 rounded-xl font-bold">
                  Register
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
