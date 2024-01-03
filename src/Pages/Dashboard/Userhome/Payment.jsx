import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import { Link } from "react-router-dom";


const Payment = () => {
    const {user}= useAuth()
    const axiosSequre = useAxiosSequre()
    const {data: payment=[]} = useQuery({
     queryKey:["payment"],
     queryFn:async()=>{
        const res = await axiosSequre.get(`/testbook/${user.email}`)
        return res.data
     }
    })
    console.log(payment);
    const pay = payment.reduce((total, item)=> total+item.price,0)
    console.log(pay);
    return (
        <div className="text-black">
            <div>
            <div className="flex justify-evenly mb-10">
            <h1 className="card-title">Total Book Test : {payment.length}</h1>
            <h1 className="card-title">Total Price :$ {pay}</h1>
           { payment.length?
            <Link to="pay"><button  className="btn bg-[#6AAB9C] text-white px-8">Pay</button></Link>
            :
            <button disabled className="btn btn-outline  px-8">Pay</button>
          }
            </div>
            <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead className="bg-gray-400">
      <tr>
      <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        {/* <th>Action</th> */}
      </tr>
    </thead>
    <tbody>

      {
        payment.map((item,index)=><tr key={item._id}>
            <td>
                {index+1}
            </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td><div>
              <div className="font-bold">{item.name}</div>
            </div></td>
            <td>
        ${item.price}
        </td>
        {/* <th>
          <button onClick={()=>handelDelete(item._id)} className="btn btn-ghost text-white bg-red-500 btn-sm">
            <FaTrash />
          </button>
        </th> */}
      </tr>)
      }
      </tbody>
    
  </table>
</div>
        </div>
        </div>
    );
};

export default Payment;