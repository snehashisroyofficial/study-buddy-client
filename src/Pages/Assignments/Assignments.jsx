import { useLoaderData } from "react-router-dom";

const Assignments = () => {
  const data = useLoaderData();

  console.log(data[1].difficulty);
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center mb-8">All Assignments</h1>
      <div className="grid lg:grid-cols-3  gap-10">
        {data.map((item) => (
          <div
            key={item._id}
            className="w-full border-2  border-gray-400 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
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
              <button className="capitalize btn   bg-blue-300 hover:bg-blue-700 hover:text-white w-full text-center text-lg">
                view assignment
              </button>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
