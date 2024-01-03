import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import { FaSave, FaSeedling, FaStripe, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { BsSend } from "react-icons/bs";
import { toast } from "react-hot-toast";

const Reservation = () => {
    const [searching, seatSearch] = useState('')
    const [reserv, setTest]= useState([])

   useEffect(()=>{
    fetch(`https://assignment-12-server-five-jade.vercel.app/testbook`)
    .then(res=> res.json())
    .then(data=>setTest(data))
 },[])
    const axiosSequre = useAxiosSequre()
    // const {data: reserv=[], refetch}= useQuery({
    //     queryKey:["reservation"],
    //     queryFn:async()=>{
    //         const res = await axiosSequre.get(`/testbook?serach=${searching}`)
    //         return res.data
    //     }
    // })

 

  const handelDelete=(id)=>{
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
      
      axiosSequre.delete(`/testbook/${id}`)
      .then(res=> {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            //   refetch()
            const remaing= reserv.filter(re=> re._id !==id)
            setTest(remaing)
            console.log(remaing)
              Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });  
        
          }
      })
      }
    });
  }

  const handelSearch=e=>{
    e.preventDefault()
    const search = e.target.search.value 
    console.log(search);
    seatSearch(search)
}



const handelReport=async e=>{
    e.preventDefault()
    const report= e.target.report.value
    const email = e.target.patientemail.value
    const reportname= e.target.reportname.value
    const id = e.target.id.value
    console.log(id);
    console.log(report);
    const reports ={email, report,reportname}

    console.log(reports)
    const reportlink = await axiosSequre.post("/report", reports)
        console.log(reportlink.data)
        if (reportlink.data.insertedId) {
            toast.success("Report delivered successFully")
          }
         

    }


    const handelSubmit=(id)=>{
        console.log(id)
        axiosSequre.patch(`/testbook/re/${id}`)
        .then(res=> console.log(res.data))
      }
   




    console.log(reserv);
    return (
        <div className="text-black">
        <div className="flex  justify-evenly mb-10">
        <h1 className="card-title ">Total Reservation : {reserv.length}</h1>
        </div>
        <div>
        <form onSubmit={handelSearch} className=" flex justify-center mt-2 mb-2">
           <input name="search" type="text" placeholder="Search here by Email" className="input input-bordered input-accent w-full max-w-xs"  />
           <input  className="btn btn-accent text-white" type="submit" value="Search" />
           </form>
        </div>
        <div className="overflow-x-auto">
<table className="table ">
{/* head */}
<thead className="bg-gray-400">
  <tr>
  <th>#</th>
    <th>Email</th>
    <th>Test Name</th>
    <th>date</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>

  {
    reserv.map((item,index)=><tr key={item._id}>
        <td>
            {index+1}
        </td>
    <td>
      <div className="flex items-center gap-3">
      {item.patientemail}
      </div>
    </td>
    <td><div>
          <div className="font-bold">{item.name}</div>
        </div></td>
        <td><div>

        <div className="font-bold">{item.date}</div>
        </div></td>
        <td><div>
        <div className="font-bold">{item.reportStatus==="delivered"? <button className="btn btn-sm bg-green-400">Deliverd</button>:<button className="btn btn-sm bg-yellow-400">Pending</button>}</div>
        </div></td>
    <th className="flex gap-4" >
      <button  onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-ghost text-white bg-green-500 btn-sm">
        <FaSave />
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h1 className="text-xl font-bold text-center">Send Report link </h1>
    <form onSubmit={handelReport}>
    <input className="w-full mt-4 p-4 input input-bordered" type="text" placeholder="Report Link" name="report" id="" />
    <input defaultValue={item.patientemail} hidden className="w-full mt-4 p-4 input input-bordered" type="text" placeholder="Report Link" name="patientemail" id="" />
    <input defaultValue={item.name} hidden className="w-full mt-4 p-4 input input-bordered" type="text" placeholder="Report Link" name="reportname" id="" />
    {/* <input defaultValue={item._id} name="id" type="submit" /> */}
    <button onClick={()=>handelSubmit(item._id)}  className="btn bg-[#F7A582] hover:bg-[#6AAB9C] w-full mt-5 text-white"><BsSend size={26} />Send</button>
    </form>
    
    <div className="modal-action">
      <form method="dialog">
        <button  className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      <button onClick={()=>handelDelete(item._id)} className="btn btn-ghost text-white bg-red-500 btn-sm">
        <FaTrashAlt />
      </button>
    </th>
  </tr>)
  }
  </tbody>

</table>
</div>
    </div>
    );
};

export default Reservation;