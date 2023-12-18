import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo (2).png"
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";
const Navbar = () => {
  const {user, logOut}= useAuth()
  const [isAdmin] = useAdmin()
    const navlinks = <>
       <NavLink to="/"><li><a>Home</a></li></NavLink>
       <NavLink to="/alltest"><li><a>All tests</a></li></NavLink>
        <NavLink><li><a>About</a></li></NavLink>
        <NavLink><li><a>Doctors</a></li></NavLink>
        <NavLink><li><a>Department</a></li></NavLink>
        <NavLink><li><a>Blogs</a></li></NavLink>
        <NavLink><li><a>Contact Us</a></li></NavLink>
        
        {
          user && isAdmin &&  <NavLink to="/dashboard/adminhome"><li><a>Dashboard</a></li></NavLink>
        }
        {
          user && !isAdmin &&  <NavLink to="/dashboard/userhome"><li><a>Dashboard</a></li></NavLink>
        }
      
    </>
    const handelLogout=()=>{
      logOut()
      .then()
      .catch(error=> console.log(error))
    }
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-60 bg-[#6AAB9C]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 hover:text-yellow-400 ">
     {navlinks}
      </ul>
    </div>
    <img src={logo} className="h-10" alt=""  />
    <h1 className="text-xl font-bold">Health Lab.</h1>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu text-white menu-horizontal px-1 ">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <>
       <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL? user.photoURL : "None"} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#6BAC9D] rounded-box w-52 text-white font-bold">
        <li>
          <a className="justify-between">
            {
              user?.displayName? user.displayName :"Your Name"
            }
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handelLogout} ><a>Logout</a></li>
      </ul>
    </div>
   

      </>
      :
      <Link to="/login">
    <button className="btn ">Log in</button>
    </Link>
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;