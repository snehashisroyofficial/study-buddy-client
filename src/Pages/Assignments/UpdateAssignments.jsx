import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";

const UpdateAssignments = () => {
  const data = useLoaderData();

  //   const {
  //     _id,
  //     emailAddress,
  //     photoURL,
  //     buyerName,
  //     title,
  //     url,
  //     marks,
  //     difficulty,
  //     description,
  //     date,
  //   } = data;
  const { date } = data;
  const [startDate, setStartDate] = useState(new Date(date));

  const handleOnUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const url = form.url.value;
    const marks = form.marks.value;
    const date = startDate;
    const difficulty = form.difficulty.value;
    const description = form.description.value;
    const patchData = {
      title,
      url,
      marks,
      date,
      difficulty,

      description,
    };

    console.log(patchData);
  };

  return (
    <section className="py-10">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 border">
        <h2 className="py-6 text-3xl font-semibold text-gray-700 capitalize dark:text-white text-center ">
          Update Assignment
        </h2>

        <form onSubmit={handleOnUpdate}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* title  */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="title"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                defaultValue={data?.title}
                placeholder="Enter Assignment Title"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            {/* image url  */}
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="url">
                Thumbnail Image URL
              </label>
              <input
                id="url"
                type="url"
                defaultValue={data?.url}
                placeholder="https://"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            {/* marks  */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="marks"
              >
                Marks
              </label>
              <input
                max={100}
                id="marks"
                type="number"
                name="marks"
                defaultValue={data?.marks}
                placeholder="1-100"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            {/* due dates */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="dueDate"
              >
                Due Date
              </label>
              <div>
                <DatePicker
                  id="dueDate"
                  className="block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                  }}
                />
              </div>
            </div>

            {/* difficulty level  */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="difficulty"
              >
                Difficulty Level
              </label>

              <select
                id="difficulty-level"
                name="difficulty"
                defaultValue={data?.difficulty}
                className="block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
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
              name="description"
              id=""
              rows="10"
              placeholder="type here ..."
              defaultValue={data?.description}
            ></textarea>
          </div>

          <div className="flex w-full my-6">
            <button
              type="submit"
              className="px-8 py-4 w-full leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateAssignments;
