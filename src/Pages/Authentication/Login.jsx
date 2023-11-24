
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';
import logimg from "../../assets/images/image (14).png"
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
// import useAuth from '../../Hooks/useAuth';
const Login = () => {
  const navigate = useNavigate()
//   const axiosPublic = useAxiosPublic()
const location = useLocation()
    const {login}=useContext(AuthContext)
    const handelLogin=e=>{
        e.preventDefault()
        const form =e.target
        const email = form.email.value
        const password = form.password.value 
        const loginData = {email, password}
        console.log(loginData);
        
        if (password.length < 6) {
          return toast.error("Password should be at least 6 characters");
        } else if (!/[A-Z]/.test(password) || !/[.!@#$%^&*()_+-=]/.test(password)) {
           return toast.error("Password should contain at least one uppercase letter and one special character");
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
          return  toast.error("Please check your email and provide a valid email address");
        }



        login(email, password)
        .then(result =>{
          console.log(result.user)
          navigate(location?.state? location.state : "/")
          return  toast.success("Log in successfully")
        })
        .catch(error=> {console.error(error)
          return toast.error("Check your Email and Password")
        })
    }
    
    return (
        <div>
            <div className='flex justify-between items-center'>
           <div className='hidden md:block'>
            <h1 className='text-4xl text-center'>Health Lab, We aim to make<br></br>your life better</h1>
             <img src={logimg} alt=""  />
           </div>
           <div className="hero min-h-screen">
    <div className=" flex-shrink-0 w-full max-w-[500px] p-10 bg-[#6AAB9C] lg:h-[100vh]">
    <h1 className="text-6xl mt-10 text-white text-center mb-5">Sign in</h1>
    <hr></hr>
      <form onSubmit={handelLogin} className="card-body">
        <div className="form-control">
          <label className="label text-white">
            <span className="">Email address</span>
          </label>
          <input type="email" name="email" placeholder="name@example.com" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label text-white">
            <span className="">Password</span>
          </label>
          <input type="password" name="password" placeholder="*********" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <div className="mx-auto mt-6 ">
          <button  className="btn bg-white hover:-translate-y-2">Sign in</button>
        </div>
        </div>
        <h1 className='text-white text-center mt-6'>Dont have an account yet? <span className='text-black'><Link to="/signup">Sign up </Link></span> here</h1>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;