import { Link, useLoaderData } from "react-router-dom";
import { BsCalendarDate } from "react-icons/bs";
import { IoIosBookmarks } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

const ViewAssignment = () => {
  const { user, loading } = useAuth();

  const data = useLoaderData();

  const {
    date,
    description,
    difficulty,
    emailAddress,
    marks,
    photoURL,
    buyerName,
    title,
    url,
    _id,
  } = data;

  const formattedDate = new Date(date).toLocaleDateString();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.email,
      name: user?.displayName,
    },
  });

  useEffect(() => {
    if (user && !loading) {
      setValue("email", user?.email);
      setValue("name", user?.displayName);
    }
  }, [user, loading, setValue]);

  const handleOnModal = (data) => {
    console.log(data);
  };

  if (loading) {
    return (
      <div className="h-dvh flex justify-center items-center">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex justify-center  ">
        <div className="w-1/2  border-2 border-black flex ">
          <div className="p-6 space-y-8">
            <img className="object-cover w-full h-56" src={url} alt="avatar" />
            <h1 className="text-3xl">{title}</h1>
            {/* user photo and date row  */}
            <div className="flex justify-between items-center gap-4">
              <div className="flex  items-center gap-4">
                <img
                  className="object-cover w-8 h-18 rounded-full"
                  src={photoURL}
                  alt=""
                />
                <h2>{buyerName}</h2>
              </div>
              <div>
                <p className="flex items-center gap-2">
                  <BsCalendarDate />
                  {formattedDate}
                </p>
              </div>
            </div>

            {/* marks and difficulty row  */}
            <div className="flex justify-between items-center gap-4">
              <p className="flex  items-center gap-2">
                <IoIosBookmarks />
                <span className="font-semibold">Marks: </span>
                {marks}
              </p>

              <p className="flex  items-center gap-2">
                <IoBarChart />
                <span className="font-semibold">Difficulty Level: </span>
                {difficulty}
              </p>
            </div>

            {/* decription row  */}
            <p className="text-justify">
              <span className="font-semibold"> Description: </span>{" "}
              {description}
            </p>

            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="capitalize btn mt-4    bg-green-600 hover:bg-green-300 hover:text-black text-white w-full text-center text-lg"
            >
              Take Assignment
            </button>
            {/* modal section  */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box space-y-4">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <h1 className="text-2xl font-bold text-center">
                  Submit Your Assignment
                </h1>
                <form
                  onSubmit={handleSubmit(handleOnModal)}
                  className="space-y-6"
                >
                  {/* your Name  */}
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor="name"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      disabled
                      name="name"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      {...register("name")}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  {/* your email address  */}
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor="email"
                    >
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      disabled
                      name="email"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  {/* paste your Doc/pdf link  */}
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor="link"
                    >
                      Title
                    </label>
                    <input
                      id="link"
                      type="link"
                      placeholder="Paste your doc/pdf link"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      {...register("title", { required: true })}
                    />
                    {errors.title && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <button className="btn text-center  bg-blue-700 hover:bg-blue-300 text-white hover:text-black">
                      Submit Assignment
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewAssignment;
