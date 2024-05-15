import Navbar from "../Pages/Shared/Navbar.jsx/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className=" font-body dark:bg-gray-900 dark:text-white">
      <div className="bg-base-100 dark:bg-gray-900 sticky z-10 top-0 border-b-2 border-gray-600/40 ">
        <Navbar />
      </div>
      <div className="max-w-6xl min-h-[calc(100vh-317px)] mx-auto  ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
