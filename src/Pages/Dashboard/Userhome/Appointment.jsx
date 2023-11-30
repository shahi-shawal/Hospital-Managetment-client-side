import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import useAuth from "../../../Hooks/useAuth";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const Appointment = () => {
    const {user}= useAuth()
    const axiosSequre = useAxiosSequre()
    const {data: appointments=[], refetch}= useQuery({
        queryKey:["appointment"],
        queryFn:async()=>{
            const res = await axiosSequre.get(`/testbook/${user.email}`)
            return res.data
        }
    })
    console.log(appointments);
    const upcoming = appointments.filter(fill => new Date(fill.date).getTime() >= new Date().getTime())
    console.log(upcoming);

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
                    refetch()
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
    return (
        

        <div>
            <div className="text-black mb-4 font-bold text-2xl">My Upcomimg AppointMent</div>
            <div className="overflow-x-auto">
<table className="table ">
{/* head */}
<thead className="bg-gray-400">
  <tr>
  <th>#</th>
    <th>Image</th>
    <th>name</th>
    <th>Details</th>
    <th>Date</th>
    <th>Time</th>
    <th>Action</th>
  </tr>
</thead>
<tbody className="text-black">

  {
    upcoming.map((item,index)=><tr key={item._id}>
        <td>
            {index+1}
        </td>
    <td>
      <div className="flex items-center gap-3">
      <img src={item.image} className="h-20 w-32" alt=""  />
      </div>
    </td>
    <td><div>
          <div className="font-bold">{item.name}</div>
        </div></td>
        <td><div>

        <div className="font-bold">{item.description}</div>
        </div></td>
        <td><div>
        <div className="font-bold">{item.date}</div>
        </div></td>
        <td><div>
        <div className="font-bold">{item.timeslots}</div>
        </div></td>
    <th className="">
      <button onClick={()=>handelDelete(item._id)} className="btn btn-ghost  text-white bg-red-500 btn-sm">
      Appoint Cancel <FaTimes /> 
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

export default Appointment;