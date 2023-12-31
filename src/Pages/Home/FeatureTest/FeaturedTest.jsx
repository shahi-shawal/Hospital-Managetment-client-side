import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";

const FeaturedTest = () => {
    const axoisPublic = useAxiosPublic()
    const {data: featuretest=[]}= useQuery({
        queryKey:["featuretest"],
        queryFn:async()=>{
        const res = await axoisPublic.get("/tests")
        return res.data
        }
    })
    console.log(featuretest)

    return (
        <div className="bg-[#E8F5FF]">
            <div>
                <h1 className="font-bold text-center p-4  text-4xl">Our Featured Tests</h1>
            </div>
            <div className="flex flrx-col lg:flex-row flex-wrap  lg:gap-6 pl-5 lg:pl-10 ">
          {
            featuretest.map((alltest)=> <div key={alltest.id}>
            <div className="mt-10 mb-10">
     {
        alltest.book > 1 &&  <div className="w-96 bg-white p-8 rounded-md shadow-md">
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
         <h2 className="flex items-center gap-2"><FaArrowCircleUp />Remainings Days: <h1 className="flex items-center gap-2">{Math.floor((new Date(alltest.date).getTime()- new Date().getTime())/(1000*60*60*24))}</h1> </h2>
           <h2 className="flex items-center gap-2"><FaArrowAltCircleDown />Remainings Slots:<h1 className="font-bold">{alltest.slots}</h1> </h2>
         </div>
         </div>
         <div className="mt-4 text-center">
         <Link to={`/details/${alltest._id}`}><button className="btn btn-outline btn-accent hover:text-white">Details</button></Link>
         </div>
        </div>
        </div>
     </div>
     }
 </div>
            </div>)
          }
          </div>
        </div>
    );
};

export default FeaturedTest;