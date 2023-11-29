import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Allservice = () => {
    const axiosSequre = useAxiosSequre()
    const {data: alltest=[], refetch}= useQuery({
        queryKey:["alltest"],
        queryFn:async()=>{
            const res = await axiosSequre.get("/tests")
            return res.data
        }
    }) 

    const handelUpdate=(item)=>{
        console.log(item);

    }

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
          
          axiosSequre.delete(`/tests/${id}`)
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
        <div className="text-black">
        <div className="flex  justify-evenly mb-10">
        <h1 className="card-title ">Total Test : {alltest.length}</h1>
        </div>
        <div className="overflow-x-auto">
<table className="table ">
{/* head */}
<thead className="bg-gray-400">
  <tr>
  <th>#</th>
    <th>Name</th>
    <th>price</th>
    <th>date</th>
    <th>slots</th>
    <th>Reservation</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>

  {
    alltest.map((item,index)=><tr key={item._id}>
        <td>
            {index+1}
        </td>
    <td>
      <div className="flex items-center gap-3">
      {item.name}
      </div>
    </td>
    <td><div>
          <div className="font-bold">{item.price}</div>
        </div></td>
        <td><div>

        <div className="font-bold">{item.date}</div>
        </div></td>
        <td><div>
        <div className="font-bold">{item.slots}</div>
        </div></td>
        <td><div>
        <div className="font-bold">Reservation</div>
        </div></td>
    <th className="flex gap-4">
      <Link to={`/dashboard/updateTest/${item._id}`}><button onClick={()=>handelUpdate(item)} className="btn btn-ghost text-white bg-green-500 btn-sm">
        <FaEdit />
      </button></Link>
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

export default Allservice;