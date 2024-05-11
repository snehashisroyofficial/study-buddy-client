import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { IoMdMenu } from "react-icons/io";
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
        <NavLink to="/create-assignments">Create Assignments</NavLink>
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
    <div className="navbar container mx-auto bg-orange-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMdMenu className="text-4xl" />
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
      <div className="navbar-center hidden lg:flex font-semibold ">
        <ul className="menu menu-horizontal px-1 text-base">{navlinks}</ul>
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
              <div className="w-30 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44"
            >
              <li>
                <NavLink to="/my-submitted-assignments">
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

        {!user && (
          <div className="space-x-3">
            <Link to="/login">
              <button className="px-4 py-1 border-2 border-black rounded-xl font-bold">
                Sign in
              </button>
            </Link>

            <Link to="/register">
              <button className="px-4 py-2 text-white bg-green-600 rounded-xl font-bold">
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
