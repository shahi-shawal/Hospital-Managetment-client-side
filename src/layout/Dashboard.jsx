import { NavLink, Outlet } from "react-router-dom";
import { FaBookMedical, FaBookmark, FaCalendar, FaExclamation, FaHome,   FaRandom,FaRegShareSquare,FaStripe,FaThemeco,FaThemeisle,FaUsers } from "react-icons/fa";
import logo from "../assets/logo (2).png"
import useAdmin from "../Hooks/useAdmin";
import useActive from "../Hooks/useActive";

const Deshboard = () => {
    
   
    // TODO: get is admin value form database 
    const [isAdmin] = useAdmin()
    const [isStatus] = useActive()
    console.log(isStatus);
    return (
        <div className="flex text-white font-bold">
             <div className="w-64 min-h-screen bg-[#6AAB9C]">
                <img src={logo} className="text-white mb-5 mt-5 mx-auto bg-white" alt=""  />
                <h1 className="text-2xl font-bold text-center">Health Lab</h1>
                {
                    isAdmin? <>
                      <ul className="menu text-xl">
                <li className="">
                        <NavLink to="/dashboard/adminhome"><FaHome className="text-2xl" /> Admin Home</NavLink></li>
                <li>
                        <NavLink to="/dashboard/addbanner"><FaThemeisle className="text-2xl" /> Add Banner</NavLink></li>
                <li>
                        <NavLink to="/dashboard/allbanner"><FaThemeco className="text-2xl" /> All Banner</NavLink></li>
                    
                     <li>
                        <NavLink to="/dashboard/addtests"><FaExclamation className="text-2xl" />Add tests</NavLink></li>
                     <li>
                        <NavLink to="/dashboard/allservice"><FaBookMedical className="text-2xl" />All tests</NavLink></li>
                     <li>
                        <NavLink to="/dashboard/reservation"><FaRandom className="text-2xl" />Reservation</NavLink></li>
                     <li>
                        <NavLink to="/dashboard/allusers"><FaUsers className="text-2xl" />All users </NavLink></li>
                </ul>
                    </> :
                    <>
                    {
                        !isStatus? 
                        <>
                         <ul className="menu text-xl">
              <li>
                      <NavLink to="/dashboard/userhome"><FaHome className="text-2xl" /> My Profile </NavLink></li>
              <li>
                      <NavLink to="/dashboard/appointments"><FaCalendar className="text-2xl" />My Upcoming Appointments</NavLink></li>
                  
                   <li>
                      <NavLink to="/dashboard/testresult"><FaRegShareSquare className="text-2xl" />Test results</NavLink></li>
                   <li>
                      <NavLink to="/dashboard/payment"><FaStripe className="text-2xl" />Payment</NavLink></li>
              </ul>
                           
                       
                  </>
                        
                        :<>
                          
                          <h1 className="text-red-600 p-2 text-2xl font-bold">Your Access is Block</h1>
                         
                        </>
                    }
                    </>
                }
                <hr></hr>
                <ul className="menu text-xl">
                    <li>
                        <NavLink to="/">
                            <FaHome className="text-2xl" />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/alltest">
                            <FaBookmark className="text-2xl" />All Test</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
        
    );
};

export default Deshboard;