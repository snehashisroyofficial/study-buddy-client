import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";

const CreateAssignments = () => {
  const { user, loading } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailAddress: user?.email,
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        emailAddress: user?.email,
      });
    }
  }, [user, reset]);

  const handleOnPost = (data) => {
    axios
      .post("http://localhost:5000/create", data)
      .then(() => {
        toast.success("assignment post successfully");
        reset();
      })
      .catch((err) => toast.error(err.message));
  };

  if (loading) {
    return <div>Loading .....</div>;
  }
  return (
    <section className="py-10">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 border">
        <h2 className="py-6 text-3xl font-semibold text-gray-700 capitalize dark:text-white text-center ">
          Create Assignment
        </h2>

        <form onSubmit={handleSubmit(handleOnPost)}>
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* email address  */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                disabled
                name="emailAddress"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("emailAddress")}
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
                placeholder="https://"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("url", { required: true })}
              />
              {errors.url && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
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
                placeholder="1-100"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("marks", { required: true })}
              />
              {errors.marks && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/* due dates       */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="dueDate"
              >
                Due Date
              </label>
              <div className="w-full">
                <DatePicker
                  id="dueDate"
                  className="block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    register("date", { value: date });
                  }}
                />
              </div>
            </div>

            {/* difficulty level  */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="difficulty-level"
              >
                Difficulty Level
              </label>

              <select
                id="difficulty-level"
                name="option"
                className="block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("option", { required: true })}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              {errors.option && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
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
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
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

export default CreateAssignments;
