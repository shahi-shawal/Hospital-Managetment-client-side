import { useQuery } from "@tanstack/react-query";
import Header from "../../Components/Header/Header.jsx"
import { BsCalendarDate } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import useAxiosPublic from "../../Hooks/useAxiosPublic.jsx";
const Alltest = () => {
   const axiosPublic = useAxiosPublic()
    const {data: test=[]} = useQuery({
        queryKey:["tests"],
        queryFn:async()=>{
            const res = await axiosPublic.get("/tests.json",{})
            return(res.data);
        }
    })
    console.log(test);
  
    return (
        <div className="">
           <Header header={"All Tests"}></Header>
           <div className="bg-gray-200">
           <form className=" flex justify-center pt-6">
           <input type="text" placeholder="Search here " className="input input-bordered input-accent w-full max-w-xs"  />
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
        <h2 className="text-xl text-center font-semibold mb-2"> <span>{alltest.title}</span></h2>
         <div className="flex gap-2">
         <h2 className="flex flex-col flex-wrap gap-1 mb-2 pr-3 border-r-2">Available Dates: {alltest.availableDates.map((date)=><h1 className="flex items-center gap-2" key={date}><BsCalendarDate />{date}</h1>)} <span></span></h2>
         <h2 className="flex-1  flex flex-col flex-wrap  gap-1  mb-2">Available Slots: {alltest.timeSlots.map((time)=><h1 className="flex items-center gap-2" key={time}><IoMdTime />{time}</h1>)} <span></span></h2>
         </div>
         </div>
         <div className="mt-4 text-center">
         <button className="btn btn-outline btn-accent hover:text-white">Details</button>
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