import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Assignments = () => {
  const data = useLoaderData();

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

  const handleOnFilter = (e) => {
    setValue(e.target.value);
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
            className="w-full mx-auto border-2  border-black max-w-sm lg:max-w-xs  overflow-hidden bg-white shadow-lg dark:bg-gray-800"
          >
            <img
              className="object-cover w-full h-56"
              src={item?.url}
              alt="avatar"
            />

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
    </div>
  );
};

export default Assignments;
