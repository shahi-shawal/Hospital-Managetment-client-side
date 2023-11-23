import { useContext } from 'react';
import logimg from "../../assets/images/image (14).png"
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';
const Register = () => {
    // const axoisPublic = useAxiosPublic()
    const navigate = useNavigate()
    // const {createUser}= useContext(AuthContext)
    const handelLogin=e=>{
        e.preventDefault()
        const form =e.target
        const email = form.email.value
        const password = form.password.value 
        const name= form.name.value
        const loginData = {email, password, name}
        console.log(loginData);

       
        


         createUser(email, password)
        .then(result =>{
          console.log(result.user)
        
          axoisPublic.post("/users", loginData)
          .then(res=> {
            if(res.data.insertedId){
              alert("log in successFully")
            }
            navigate("/")
          })
        })
        .catch(error=> console.error(error))
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
    <h1 className="text-6xl  text-white text-center mb-5">Create Account</h1>
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
            <span className="">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label text-white">
            <span className="">Password</span>
          </label>
          <input type="password" name="password" placeholder="*********" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label text-white">
            <span className="">Confirm Password</span>
          </label>
          <input type="password" name="Confirm_password" placeholder="*********" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <div className="mx-auto mt-6 ">
          <button  className="btn bg-white hover:-translate-y-2">Get Start</button>
        </div>
        </div>
        <h1 className='text-white text-center mt-6'>Already Have an account <span className='text-black'><Link to="/login">Sign in </Link></span> here</h1>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;