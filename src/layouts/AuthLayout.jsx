import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
};
export default AuthLayout;
