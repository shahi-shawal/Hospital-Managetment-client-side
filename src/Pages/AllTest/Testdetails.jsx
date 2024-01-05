import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { TbHandClick } from "react-icons/tb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import img1 from "../../assets/images/image (1).png"
import Container from "../../Components/Container/Container";
import { BsCalendarDate } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import useAxiosSequre from "../../Hooks/useAxiosSequre";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { FaStripe } from "react-icons/fa";
import useActive from "../../Hooks/useActive";
const Testdetails = () => {
   const {user} = useAuth()
   const [isStatus] = useActive()
   const patientemail= user.email
   const reportStatus ="pending"
   const axiosSequre = useAxiosSequre()
    const details = useLoaderData()
    console.log(details);
    const {_id,name,image,description,timeslots,price,date,slots } = details
    const testbooked= {
      name,image,description,timeslots,date,slots,price, patientemail, reportStatus
    }
    const handelBook=()=>{
    
    axiosSequre.post("/testbook", testbooked)
    .then(res=>{
      if (res.data.insertedId) {
        toast.success(`${name} successFully book`)
      }
    })
   
   axiosSequre.patch(`/test/${_id}`)
   .then(res=>{
    console.log(res.data)
   })


   }
  
  
  
    return (
        <div>
            <Header header={`Deatils/${name}`}></Header>
           <Container>
           <div className=" min-h-screen ">
  <div className="hero-content  items-center  flex-col lg:flex-row">
    <img src={image} className="flex-1 max-w-md rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold mb-5">{name}</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      {
        !isStatus ? <> <div onClick={()=>document.getElementById('my_modal_5').showModal()}    disabled={slots.length<0}>
  
        <button  onClick={()=>handelBook()}  className="btn bg-[#6AAB9C] hover:bg-[#6AAB9C] text-white"><TbHandClick size={26} /> Book Now</button>
       </div>
       </>  :<><h1 className="text-xl font-bold text-red-500">Your Access Is Block</h1></>
      }
    
    {/* Open the modal using document.getElementById('ID').showModal() method */}


    
    </div>
  </div>
  <Tabs className="text-center w-full">
    <TabList className="btn h-20 lg:h-auto w-full bg-[#F7A582] text-white hover:bg-[#6AAB9C] lg:gap-40">
      <Tab>Description</Tab>
      <Tab>Avalaible Date</Tab>
      <Tab>Time Slot</Tab>
      <Tab>Slot</Tab>
      <Tab>Test Location</Tab>
    </TabList>
       
    <TabPanel className="font-bold text-2xl mt-8">
      <h2>{description
}</h2>
    </TabPanel>
    <TabPanel >
      <div className="flex items-center justify-center" > <img className="max-w-sm" src={img1} alt=""  />
    
         <h1 className="font-bold text-2xl"> <BsCalendarDate />
         {date}
         </h1>
</div>
    </TabPanel>
    <TabPanel>
    <div className="flex items-center justify-center" > <img className="max-w-sm" src={img1} alt=""  />
     
         <h1 className="font-bold text-2xl"> <IoMdTime  />
         {timeslots}
         </h1>
</div>
    </TabPanel>
    <TabPanel>
    <h1 className="font-bold text-2xl mt-8">Reamaings Slot : {slots}</h1>
    </TabPanel>
    <TabPanel>
      <h2 className="flex items-center justify-center text-xl font-bold"><IoLocation size={100} />{""}</h2>
    </TabPanel>
  </Tabs>
</div>
           </Container>
        </div>
    );
};

export default Testdetails;



{/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h1 className="text-xl font-bold text-center">Pay Your bill with Stripe </h1>
   <Link to="payment"> <button   className="btn bg-[#F7A582] hover:bg-[#6AAB9C] w-full mt-5 text-white"><FaStripe size={26} />Pay</button></Link>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
//         <button className="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog> */}