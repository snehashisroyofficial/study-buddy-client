import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const ForgetPassword = () => {
  const { user, passwordResetEmail } = useAuth();
  console.log(user);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);

    passwordResetEmail(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password Reset Link Send Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user.displayName}
            </h2>
          </div>
        </div>

        <h2 className="text-xl py-6">Forget your password ? </h2>

        <form onSubmit={handleResetPassword} className="space-y-5">
          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm  dark:text-gray-200">
              Email address
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              disabled
              placeholder="johndoe@example.com"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success text-lg font-semibold text-white  w-full"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
