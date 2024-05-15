import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RotatingLines } from "react-loader-spinner";
import { Helmet } from "react-helmet";

const MySubmittedAssignments = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [assignment, setAssignment] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
    setLoading(false);
  }, [user]);

  const getData = async () => {
    const { data } = await axiosSecure(
      `/my-submitted-assignments/${user?.email}`
    );
    setAssignment(data);
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

  if (assignment.length == 0) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <h1 className="text-2xl font-bold">No Pending Assignments</h1>
      </div>
    );
  }
  return (
    <section className="py-20">
      <Helmet>
        <title>Submitted Assignments</title>
      </Helmet>
      <div className="container px-4 mx-auto ">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            My Submitted Assignments
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {assignment.length} Assignment
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Current Status</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Assignment Marks
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Obtained Marks
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Feedback
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {assignment.map((item) => (
                      <tr key={item._id}>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {item.title}
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                              item.status === "pending"
                                ? "bg-red-100/60"
                                : "bg-emerald-100/60"
                            }  dark:bg-gray-800`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                item.status === "pending"
                                  ? "bg-red-500"
                                  : "bg-emerald-500"
                              } `}
                            ></span>

                            <h2
                              className={`text-sm font-normal ${
                                item.status === "pending"
                                  ? "text-red-500"
                                  : "text-emerald-500"
                              }`}
                            >
                              {item.status}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {item.marks}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {item?.obtainedMarks
                            ? item.obtainedMarks
                            : "No Available"}
                        </td>
                        <td className="px-4 py-4  max-w-56 text-wrap text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {item?.feedBack ? item.feedBack : "No Available"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySubmittedAssignments;
