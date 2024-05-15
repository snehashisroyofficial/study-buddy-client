import { useLoaderData, useNavigate } from "react-router-dom";
import { LuLink2 } from "react-icons/lu";
import useAuth from "../../Hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";

import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
const AssignmentBased = () => {
  const data = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const { loading } = useAuth();
  const navigate = useNavigate();
  console.log(data);

  console.log(data._id);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const marks = form.marks.value;
    const feedback = form.feedback.value;
    const status = "complete";
    const updateData = { marks, feedback, status };

    axiosSecure
      .patch(
        `https://study-buddy-server-mu.vercel.app/submit-marks/${data?._id}`,
        updateData
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Marks Submitted",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate("/assignments");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops! Something went wrong.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
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
    <section className="py-10">
      <Helmet>
        <title>Give Marks</title>
      </Helmet>
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white"></h2>
      <div className="flex flex-col lg:flex-row  gap-4 p-4 ">
        <div className="lg:w-1/2 h-full space-y-4 ">
          <iframe
            src={data.submitLink}
            title="testPdf"
            className="h-[500px] w-full"
          ></iframe>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200 flex items-center gap-2"
              htmlFor="pdf"
            >
              PDF Link <LuLink2 className="text-2xl" />
            </label>
            <input
              id="pdf"
              type="text"
              name="pdf"
              defaultValue={data.submitLink}
              required
              max={100}
              placeholder="submit pdf"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className=" lg:w-1/2 h-full border-2 border-black p-4">
          <form onSubmit={handleOnSubmit}>
            <div className="">
              {/* marks  */}
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="marks"
                >
                  Marks
                </label>
                <input
                  id="marks"
                  type="number"
                  name="marks"
                  required
                  max={100}
                  placeholder="submit marks"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              {/* description  */}
              <div className="py-4">
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  name="feedback"
                  id=""
                  rows="10"
                  placeholder="type here ..."
                  required
                ></textarea>
              </div>

              <div className="flex w-full my-6">
                <button
                  type="submit"
                  className="px-8 py-4 w-full leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit Marks
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AssignmentBased;
