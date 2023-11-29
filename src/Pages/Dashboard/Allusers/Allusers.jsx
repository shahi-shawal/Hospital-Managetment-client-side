import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import { FaInfo, FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const Allusers = () => {
    const axiosSequre = useAxiosSequre()
    const {data: users=[], refetch}= useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            const res= await axiosSequre.get("/users")
            return res.data
        }
    })
    const handelMakeadmin=(item)=>{
        axiosSequre.patch(`/users/admin/${item._id}`)
        .then(res=>{
          console.log(res.data)
        if (res.data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            title: `${item.name} is admin now`,
            icon: "success"
          }); 
        }
        })
    }

  const handelMakeblock=(item)=>{
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, BLOCK it!"
    }).then((result) => {
      if (result.isConfirmed) {
      axiosSequre.patch(`/users/block/${item._id}`)
      .then(res=>{
        console.log(res.data)
      if (res.data.modifiedCount > 0) {
        refetch()
        Swal.fire({
          title: "Block!",
          text: "Your file has been Block.",
          icon: "success"
        });  
        
      }
  })
  }
});
}

const handelMakeActive=(item)=>{
  console.log(item);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Active it!"
  }).then((result) => {
    if (result.isConfirmed) {
    axiosSequre.patch(`/users/active/${item._id}`)
    .then(res=>{
      console.log(res.data)
    if (res.data.modifiedCount > 0) {
      refetch()
      Swal.fire({
        title: "Block!",
        text: "Your file has been Active.",
        icon: "success"
      });  
      
    }
})
}
});
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
      
      axiosSequre.delete(`/users/${id}`)
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
    console.log(users);
    return (
        <div className="text-black">
        <div className="flex  justify-evenly mb-10">
        <h1 className="card-title ">Total Users : {users.length}</h1>
        </div>
        <div className="overflow-x-auto">
<table className="table ">
{/* head */}
<thead className="bg-gray-400">
  <tr>
  <th>#</th>
    <th>Name</th>
    <th>Email</th>
    <th>See Info</th>
    <th>Role</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>

  {
    users.map((item,index)=><tr key={item._id}>
        <td>
            {index+1}
        </td>
    <td>
      <div className="flex items-center gap-3">
      {item.name}
      </div>
    </td>
    <td><div>
          <div className="font-bold">{item.email}</div>
        </div></td>
    <td><div>
    <button onClick={()=>handelMakeadmin(item)} className="btn btn-ghost text-white bg-yellow-500 btn-sm">
        <FaInfo />
      </button>
        </div></td>
        <td><div>
       {
        item.role ==="admin"? "Admin": <button onClick={()=>handelMakeadmin(item)} className="btn btn-ghost text-white bg-green-500 btn-sm">
        <FaUsers />
      </button>
       }
        </div></td>
        <td><div>
       {
        item.status==="active"? <button onClick={()=>handelMakeblock(item)} className="btn btn-sm bg-green-400">{item.status}</button>: <button onClick={()=>handelMakeActive(item)}  className="btn btn-ghost text-white bg-red-500 btn-sm">
        Block
      </button>
       }
        </div></td>
    <th>
      <button onClick={()=>handelDelete(item._id)} className="btn btn-ghost text-white bg-red-500 btn-sm">
        <FaTrash />
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

export default Allusers;