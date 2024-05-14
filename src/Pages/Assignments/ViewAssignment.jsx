import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { BsCalendarDate } from "react-icons/bs";
import { IoIosBookmarks } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ViewAssignment = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const data = useLoaderData();
  const navigate = useNavigate();
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

  const handleOnModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const assignmentId = data?._id;
    const displayName = user?.displayName;
    const emailAddress = user?.email;
    const marks = parseFloat(data?.marks);
    const difficulty = data?.difficulty;
    const title = data?.title;
    const status = "pending";
    const obtainedMarks = "";
    const feedBack = "";
    const submitLink = form.link.value;
    const buyerDetails = {
      name: data?.buyerName,
      email: data?.emailAddress,
    };
    const submitData = {
      assignmentId,
      displayName,
      emailAddress,
      marks,
      obtainedMarks,
      feedBack,
      difficulty,
      title,
      status,
      submitLink,
      buyerDetails,
    };
    console.log(submitData);

    axiosSecure
      .post("http://localhost:5000/submit-assignment", submitData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Assignment Submited Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/my-submitted-assignments");
      })
      .catch((error) => toast.error(error.message));
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
    <section className="py-16 flex justify-center items-center px-4">
      <div className="flex justify-center  ">
        <div className="md:w-1/2  border-2 border-black flex ">
          <div className="p-6 space-y-8">
            <img
              className="object-cover w-full h-28 md:h-56"
              src={url}
              alt="avatar"
            />
            <h1 className="text-3xl  md:text-3xl">{title}</h1>
            {/* user photo and date row  */}
            <div className="flex  md:justify-between flex-col lg:flex-row items-center gap-4">
              <div className="flex   items-center gap-4">
                <img
                  className="object-cover w-8 h-18 rounded-full"
                  src={photoURL}
                  alt=""
                />
                <h2>{buyerName}</h2>
              </div>
              <div>
                <p className="flex  items-center gap-2">
                  <BsCalendarDate />
                  <span className="font-semibold">Due Date: </span>
                  {formattedDate}
                </p>
              </div>
            </div>

            {/* marks and difficulty row  */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
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
                  method="dialog"
                  onSubmit={handleOnModal}
                  className="space-y-6"
                >
                  {/* paste your doc link  */}
                  <div>
                    <input
                      id="link"
                      type="link"
                      name="link"
                      required
                      placeholder="Paste your doc/pdf link"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
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
