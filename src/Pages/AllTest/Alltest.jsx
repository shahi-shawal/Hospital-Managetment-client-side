import { useQuery} from "@tanstack/react-query";
import Header from "../../Components/Header/Header.jsx"
import { BsCalendar2DayFill, BsCalendarDate, BsCode } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import {Link} from "react-router-dom"
import useAxiosPublic from "../../Hooks/useAxiosPublic.jsx";
import { useEffect, useState } from "react";
import { FaArrowAltCircleDown, FaArrowCircleUp, FaCalculator, FaFileCode, FaFileExcel } from "react-icons/fa";
const Alltest = () => {
//    const axiosPublic = useAxiosPublic()
   const [searching, seatSearch] = useState('')
   const [test, setTest]= useState([])

   useEffect(()=>{
    fetch(`http://localhost:5000/tests?search=${searching}`)
    .then(res=> res.json())
    .then(data=>setTest(data))
 },[searching])

console.log(test);


    // const {data: test=[], refetch} = useQuery({
    //     queryKey:["tests"],
    //     queryFn:async()=>{
    //         const res = await axiosPublic.get(`/tests?search=${searching}`,{})
    //         return(res.data, refetch());
    //     }
    // })
    // console.log(test);
  
    const handelSearch=e=>{
        e.preventDefault()
        const search = e.target.search.value 
        console.log(search);
        seatSearch(search)
    }



    return (
        <div className="">
           <Header header={"All Tests"}></Header>
           <div className="bg-gray-200">
           <form onSubmit={handelSearch} className=" flex justify-center pt-6">
           <input name="search" type="text" placeholder="Search here by date" className="input input-bordered input-accent w-full max-w-xs"  />
           <input  className="btn btn-accent text-white" type="submit" value="Search" />
           </form>
           </div>
          <div className="grid grid-cols-3 pl-10 bg-gray-200 ">
          {
            test.map((alltest)=> <div key={alltest.id}>
            <div className="mt-10 mb-10">
     <div className="w-96 bg-white p-8 rounded-md shadow-md">
        <div className="">
        <div className="mb-4">
             <img src={alltest.image} alt="Sample Image" className="w-full h-full object-cover rounded-md" />
         </div>
        <div>
        <div>
        <h2 className="text-xl text-center font-semibold mb-2"> <span>{alltest.name}</span></h2>
         <div className="flex gap-2">
         <h2 className="flex flex-col flex-wrap gap-1 mb-2 pr-3 border-r-2">Available Dates: <h1 className="flex items-center gap-2"><BsCalendarDate />{alltest.date}</h1> </h2>
           <h2 className="flex-1  flex flex-col flex-wrap  gap-1  mb-2">Time Slots: <h1 className="flex items-center gap-2"><IoMdTime />{alltest.timeslots}</h1> </h2>
         </div>
         <div className="flex flex-col gap-2">
         <h2 className="flex items-center gap-2"><FaArrowCircleUp />Remainings Days: <h1 className="flex items-center gap-2">{Math.floor((new Date(alltest.date).getTime()- new Date().getTime())/(1000*60*60*24))===0 && "Next Day"}</h1> </h2>
           <h2 className="flex items-center gap-2"><FaArrowAltCircleDown />Remainings Slots:<h1 className="font-bold">{alltest.slots}</h1> </h2>
         </div>
         </div>
         <div className="mt-4 text-center">
         <Link to={`/details/${alltest._id}`}><button className="btn btn-outline btn-accent hover:text-white">Details</button></Link>
         </div>
        </div>
        </div>
     </div>
 </div>
            </div>)
          }
          </div>
        </div>
    );
};

export default Alltest;