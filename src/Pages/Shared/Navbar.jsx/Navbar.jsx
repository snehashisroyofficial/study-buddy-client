import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
// import { IoMdMenu } from "react-icons/io";
// import { MdLogout, MdLogin } from "react-icons/md";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {
  const { user, logOut } = useAuth();

  const [open, setOpen] = useState(false);
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
        toast.success("Logout Successfull");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="navbar container mx-auto py-3">
      <div className="navbar-start">
        <div className="">
          <div
            onClick={() => setOpen(!open)}
            tabIndex={0}
            role="button"
            className="lg:hidden text-4xl mx-2"
          >
            {open ? <IoMdClose /> : <IoMdMenu />}
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm px-6 font-poppins font-semibold absolute lg:hidden mt-4 z-[1] p-4 gap-4 w-2/3 bg-base-200   h-screen transition-all duration-500 ease-in ${
              open ? "left-0 top-14 " : "-left-full top-14"
            }`}
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Study Buddy</a>
      </div>
      <div className="navbar-center hidden lg:flex font-semibold ">
        <ul className="  menu-horizontal px-1 text-base space-x-3">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end space-x-6 ">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
          <input
            type="checkbox"
            value="retro"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
          <div className="dropdown dropdown-end pr-4 md:pr-0">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-30  rounded-full  ring ring-yellow-300 ring-offset-base-100 ring-offset-2">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] px-2  py-4 w-[200px] flex gap-4 shadow menu menu-sm dropdown-content bg-base-100  "
            >
              <NavLink
                className="px-3 py-2 bg-green-100/60  font-bold text-green-600 rounded-md"
                to="/my-submitted-assignments"
              >
                Attempted Assignments
              </NavLink>

              <button
                onClick={handleSignout}
                className=" px-3 py-2 bg-red-100/60  font-bold text-red-600 rounded-md  "
              >
                Logout
              </button>
            </ul>
          </div>
        )}

        {!user && (
          <div className="space-x-3">
            <Link to="/login">
              <button className=" px-2 md:px-6 py-2  text-blue-700 bg-blue-400/40 rounded-xl font-bold">
                Sign in
              </button>
            </Link>

            <Link to="/register">
              <button className="px-2 md:px-6 py-2 text-green-700 bg-green-400/60 rounded-xl font-bold">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
