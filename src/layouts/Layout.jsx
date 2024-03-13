import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-[calc(100vh-96px)] overflow-y-auto justify-center items-center lg:px-6 px-4">
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
