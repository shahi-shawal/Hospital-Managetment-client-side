import { useContext, useEffect, useState } from 'react';
import logimg from "../../assets/images/image (14).png"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { uploedImage } from '../../Utility/Utility';

const Register = () => {
    const navigate = useNavigate()
    const {createUser}= useContext(AuthContext)
    const [district, setDistrict]= useState([])
    const [upazila, setUpazila]= useState([])
    
    useEffect(()=>{
      fetch("/districts.json")
      .then(res=>res.json())
      .then(data=> setDistrict(data))
    },[])
    useEffect(()=>{
      fetch("/upazilas.json")
      .then(res=>res.json())
      .then(data=> setUpazila(data))
    },[])
    const handelLogin=async e=>{
        e.preventDefault()
        const form =e.target
        const email = form.email.value
        const password = form.password.value
        const Confirmpassword = form.Confirm_password.value
        const name= form.name.value
        const image= form.image.files[0]
        const imagedata = await uploedImage(image)
        const uploadimage= imagedata.data.display_url
        const blood= form.blood.value
        const upazila= form.upazila.value
        const district= form.district.value
        const loginData = {email, password,Confirmpassword,uploadimage, name, upazila,district,blood}
        console.log(loginData);

        if (password.length < 6) {
          return toast.error("Password should be at least 6 characters");
        }
        else if (!/[A-Z]/.test(password) || !/[.!@#$%^&*()_+-=]/.test(password)) {
           return toast.error("Password should contain at least one uppercase letter and one special character");
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
          return  toast.error("Please check your email and provide a valid email address");
        }
        else if(password !==Confirmpassword){
          return toast.error("Your password dont Match")
        }

      

         createUser(email, password)
         .then(result=> {
          // const cuser= result.user;
         toast.success("Successfully register")
         updateProfile(result.user, {
          displayName:name,
          photoURL:uploadimage
         })
         .then()
         .catch()
         navigate("/")
         return 
       })
       .catch(error=>{
          console.error(error)
          return toast.error("Check your email and password")
          
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
    <div className=" flex-shrink-0 w-full max-w-[500px] p-10 bg-[#6AAB9C]">
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
        <div className="form-control w-full ">
  <label className="label text-white">
    <span className="">Image</span>
  </label>
  <input name='image' type="file" className="file-input file-input-bordered  w-full" />
</div>
        <div className="form-control w-full ">
  <label className="label text-white">
    <span className="">Your Blood Group</span>
  </label>
  <select name='blood' className="select select-bordered">
    <option disabled selected>Blood Group</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </select>
</div>

<div className="form-control w-full ">
  <label className="label text-white">
    <span className="">Upazila</span>
  </label>
  <select name='upazila' className="select select-bordered">
    <option disabled selected>Upazila</option>
    {
      upazila.map((upa)=><option value={upa.name} key={upa.id}>{upa.name}</option>)
    }
  </select>
</div>

<div className="form-control w-full ">
  <label className="label text-white">
    <span className="">District</span>
  </label>
  <select name="district" className="select select-bordered">
    <option disabled selected>District</option>
    {
      district.map((dis)=><option key={dis.id}>{dis.name}</option>)
    }
  </select>
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