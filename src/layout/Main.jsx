import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;