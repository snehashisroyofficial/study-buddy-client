import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/assignments">Assignments</NavLink>
      </li>
      <li>
        <NavLink to="/createassignments">Create Assignments</NavLink>
      </li>
      <li>
        <NavLink to="/pendingassignments">Pending Assignments</NavLink>
      </li>
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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Study Buddy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end space-x-6 ">
        {/* circle avatar section  */}
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44"
            >
              <li>
                <NavLink to="/attemptAssignments">
                  Attempted Assignments
                </NavLink>
              </li>

              <button
                onClick={handleSignout}
                className=" px-3 py-2 bg-violet-100/60  font-bold text-violet-600 rounded-md  "
              >
                Logout
              </button>
            </ul>
          </div>
        )}

        <div className="space-x-3">
          <Link to="/login">
            <button className="px-4 py-1 border-2 border-black rounded-xl font-bold">
              Sign in
            </button>
          </Link>

          <Link to="/register">
            <button className="px-4 py-2 text-white bg-violet-600 rounded-xl font-bold">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
