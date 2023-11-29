import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaTrashAlt} from "react-icons/fa";

const AllBanner = () => {
    const axiosPublic = useAxiosPublic()
    const {data: banner=[], refetch}=useQuery({
        queryKey:["banner"],
        queryFn:async()=>{
            const res = await axiosPublic.get("/banner")
            return res.data
        }
    })
    console.log(banner);
    const handelActive=(item)=>{
      axiosPublic.patch(`/banner/${item._id}`)
      .then(res=>{
        console.log(res.data)
      if (res.data.modifiedCount > 0) {
        refetch()
        Swal.fire({
          title: `Banner is Active  now`,
          icon: "success"
        }); 
      }
      })
    }

    const handelDelete=(id)=>{
            console.log(id)
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
              
              axiosPublic.delete(`/banner/${id}`)
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
            <h1 className="text-black text-2xl font-bold">All Banner</h1>
            <div className="overflow-x-auto">
<table className="table ">
{/* head */}
<thead className="bg-gray-400">
  <tr>
  <th>#</th>
    <th>Image</th>
    <th>Title</th>
    <th>Text</th>
    <th>Coupon</th>
    <th>Active</th>
    <th>Action</th>
  </tr>
</thead>
<tbody className="text-black">

  {
    banner.map((item,index)=><tr key={item._id}>
        <td>
            {index+1}
        </td>
    <td>
      <div className="flex items-center gap-3">
      <img src={item.image} className="h-20 w-32" alt=""  />
      </div>
    </td>
    <td><div>
          <div className="font-bold">{item.title}</div>
        </div></td>
        <td><div>

        <div className="font-bold">{item.text}</div>
        </div></td>
        <td><div>
        <div className="font-bold">{item.coupon_code}</div>
        </div></td>
        <td><div>
            {
                item.isActive==="false"? <button onClick={()=>handelActive(item)} className="btn btn-ghost bg-red-400 btn-sm">InActive</button> : <button className="btn btn-ghost bg-green-400 btn-sm">Active</button>
            }
        </div></td>
    <th className="">
      {/* <Link to={`/dashboard/updateTest/${item._id}`}><button onClick={()=>handelUpdate(item)} className="btn btn-ghost text-white bg-green-500 btn-sm">
        <FaEdit />
      </button></Link> */}
      <button onClick={()=>handelDelete(item._id)} className="btn btn-ghost  text-white bg-red-500 btn-sm">
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

export default AllBanner;