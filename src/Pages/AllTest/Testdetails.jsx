import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { TbHandClick } from "react-icons/tb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import img1 from "../../assets/images/image (1).png"
import Container from "../../Components/Container/Container";
import { BsCalendarDate } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
const Testdetails = () => {

    const details = useLoaderData()
    console.log(details);
    const {name,image,description,timeslots,date,slots } = details
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
      <button disabled={slots.length<0} className="btn bg-[#6AAB9C] hover:bg-[#6AAB9C] text-white"><TbHandClick size={26} /> Book Now</button>
    </div>
  </div>
  <Tabs className="text-center w-full">
    <TabList className="btn w-full bg-[#F7A582] text-white hover:bg-[#6AAB9C] gap-40">
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
      <div className="flex items-center" > <img className="max-w-sm" src={img1} alt=""  />
    
         <h1> <BsCalendarDate />
         {date}
         </h1>
</div>
    </TabPanel>
    <TabPanel>
    <div className="flex items-center" > <img className="max-w-sm" src={img1} alt=""  />
     
         <h1> <IoMdTime  />
         {timeslots}
         </h1>
</div>
    </TabPanel>
    <TabPanel>
    <h1 className="font-bold text-2xl mt-8">{slots}</h1>
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