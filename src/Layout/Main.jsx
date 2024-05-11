import Navbar from "../Pages/Shared/Navbar.jsx/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className=" font-body">
      <div className="bg-orange-100 sticky z-10 top-0">
        <Navbar />
      </div>
      <div className="max-w-6xl min-h-[calc(100vh-317px)] mx-auto p-4 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
