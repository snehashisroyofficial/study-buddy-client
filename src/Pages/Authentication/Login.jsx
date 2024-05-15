import { MdEmail } from "react-icons/md";
import { FaEyeSlash, FaLock, FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, googleLogin } = useAuth();
  const [password, setPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          icon: "success",
          title: "Account login successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Account login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
        <form onSubmit={handleOnSubmit} className="w-full max-w-md">
          <div className="space-y-3">
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
              Lets Start
            </h1>
            <p>
              Carefully read and fill up all the inputs with your original
              information
            </p>
          </div>
          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <MdEmail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
            </span>
            <input
              type="email"
              name="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute ">
              <FaLock className="w-5 h-5 mx-3  text-gray-300 dark:text-gray-500" />
            </span>

            <input
              type={password ? "text" : "password"}
              name="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
            <span
              className="absolute bottom-4 right-4 text-lg"
              onClick={() => setPassword(!password)}
            >
              {password ? <FaEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign in
            </button>

            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
              or sign in with
            </p>
          </div>
        </form>{" "}
        <div
          onClick={handleGoogleLogin}
          href="#"
          className="flex items-center w-full max-w-md justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
          />

          <span className="mx-2">Sign in with Google</span>
        </div>
        <div className="mt-6 text-center ">
          <Link
            className="text-sm text-blue-500 hover:underline dark:text-blue-400"
            to="/register"
          >
            Don’t have an account yet? Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
