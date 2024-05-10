import Navbar from "../Pages/Shared/Navbar.jsx/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="container mx-auto font-Lato">
      <Navbar />
      <div className="max-w-6xl min-h-[calc(100vh-317px)] mx-auto p-4 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
