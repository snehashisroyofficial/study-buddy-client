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
  //pagination
  const [currentPage, setcurrentPage] = useState(0);
  const [itemsperPage, setitemsPerPage] = useState(3);
  const numberOfPages = Math.ceil(filterData.length / itemsperPage);
  const pages = [...Array(numberOfPages).keys()];

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
          .delete(`http://localhost:5000/delete/${id}`)
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

  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    console.log(value);
    setitemsPerPage(value);
    setcurrentPage(0);
  };

  const handlePriviousPage = () => {
    if (currentPage > 0) {
      setcurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setcurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="py-10">
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filterData.map((item) => (
          <div
            key={item._id}
            className="relative w-full mx-auto border-2  border-black flex flex-col justify-between max-w-sm lg:max-w-xs  overflow-hidden bg-white shadow-lg dark:bg-gray-800"
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
                <button className="capitalize btn mt-4    bg-blue-300 hover:bg-blue-700 hover:text-white w-full text-center text-lg">
                  view assignment
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className=" py-16 flex justify-center items-center flex-col">
        <p>Current page is {currentPage}</p>

        <div>
          <button
            onClick={handlePriviousPage}
            className="px-4 py-2 rounded-xl bg-blue-300"
          >
            Privious
          </button>
          {pages.map((page) => (
            <button
              onClick={() => setcurrentPage(page)}
              key={page}
              className={` mx-4 px-4 py-2 rounded-xl ${
                currentPage === page ? "bg-orange-500" : "bg-orange-100"
              }`}
            >
              {page}
            </button>
          ))}
          <select
            name=""
            id=""
            value={itemsperPage}
            onChange={handleItemsPerPage}
          >
            <option value="3">3</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 rounded-xl bg-blue-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
