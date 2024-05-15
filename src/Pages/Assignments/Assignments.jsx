import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const Assignments = () => {
  const data = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();
  // filter function

  const [value, setValue] = useState("all");
  const [filterData, setfilterData] = useState([]);

  useEffect(() => {
    if (value === "all") {
      setfilterData(data);
    } else {
      const filter = data.filter((i) => i.difficulty === value);
      setfilterData(filter);
    }
  }, [data, value]);

  // useEffect(() => {
  //   if (currentPage === 0) {
  //     setpaginationFilter(filterData);
  //   } else {
  //     setpaginationFilter(filterData.slice(0, currentPage));
  //   }
  // }, [filterData, currentPage]);

  const handleOnFilter = (e) => {
    setValue(e.target.value);
  };

  const handleDelete = (id, emailAddress) => {
    if (user?.email !== emailAddress) {
      return Swal.fire({
        icon: "error",
        title: "Forbidden",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`https://study-buddy-server-mu.vercel.app/delete/${id}`)
          .then(() => {
            const remainingData = filterData.filter((i) => i._id !== id);
            setfilterData(remainingData);
          })
          .catch((err) => console.log(err.message));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">All Assignments</h1>

      {/* difficulty level  */}
      <div className="py-6  px-4">
        <label
          className="text-gray-700 dark:text-gray-200 font-bold text-xl"
          htmlFor="difficulty"
        >
          Filter
        </label>

        <select
          onChange={handleOnFilter}
          id="difficulty-level"
          name="difficulty"
          className="block w-48 px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        >
          <option defaultChecked value="all">
            All
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {filterData.map((item) => (
          <div
            key={item._id}
            className=" dark:bg-gray-800  dark:text-white relative w-full mx-auto  flex flex-col justify-between max-w-sm lg:max-w-xs  overflow-hidden bg-white shadow-lg "
          >
            <img
              className="object-cover w-full h-56"
              src={item?.url ? item.url : "https://i.ibb.co/7gVBxLC/image.png"}
              alt="avatar"
            />

            <div>
              <button
                onClick={() => handleDelete(item._id, item.emailAddress)}
                className="absolute btn top-4 right-4 text-2xl p-3 rounded-full bg-red-500 hover:bg-white text-white hover:text-red-500 tooltip tooltip-left"
                data-tip="Delete"
              >
                <MdDelete />
              </button>
            </div>

            <div>
              <Link to={`/update-assignments/${item._id}`}>
                <button
                  className="absolute btn top-4 left-4 text-2xl p-3 rounded-full bg-green-500 hover:bg-white  text-white  hover:text-green-500 tooltip tooltip-right "
                  data-tip="Update"
                >
                  <FaEdit />
                </button>
              </Link>
            </div>

            <div className="py-5 px-4 space-y-4">
              <h2 className="text-2xl ">{item.title}</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p>Marks: {item.marks}</p>
                </div>
                <div
                  className={`px-4 py-2 rounded-3xl text-white ${
                    item.difficulty === "easy" && "bg-green-500"
                  } ${item.difficulty === "medium" && "bg-yellow-500"} ${
                    item.difficulty === "hard" && "bg-red-500"
                  }`}
                >
                  <p>{item?.difficulty}</p>
                </div>
              </div>
              <Link to={`/view-assignment/${item._id}`}>
                <button className="capitalize btn rounded-2xl mt-4  border-0   bg-blue-600 hover:bg-green-500 text-white hover:text-white w-full text-center text-lg">
                  view assignment
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
