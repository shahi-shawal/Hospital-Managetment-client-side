import Container from "../../../Components/Container/Container";
import time from "../../../assets/images/Frame.png"
import loc from "../../../assets/images/Frame (1).png"
import mbl from "../../../assets/images/Frame (2).png"

const Adress = () => {
    return (
        <div className="pl-12">
           <Container>
                <div className="mt-5 mb-5 flex gap-6">
                   <div className="flex gap-4 items-center justify-center rounded-lg bg-[#6AAB9C] w-[364px] h-[202px]">
                    <img src={time} className="" alt=""  />
                    <div className="text-white">
                        <h1 className="font-bold">Opening Hours</h1>
                        <p>Open 9.00 am to 5.00pm<br></br>Everyday</p>
                    </div>
                   </div>
                   <div className="flex gap-4 items-center justify-center rounded-lg bg-[#F7A582] w-[364px] h-[202px]">
                    <img src={loc} className="" alt=""  />
                    <div className="text-white">
                        <h1 className="font-bold">Our Locations</h1>
                        <p>Dhanmondi 17, Dhaka <br /> -1200, Bangladesh</p>
                    </div>
                   </div>
                   <div className="flex gap-4 items-center justify-center rounded-lg bg-[#6AAB9C] w-[364px] h-[202px]">
                    <img src={mbl} className="" alt=""  />
                    <div className="text-white">
                        <h1 className="font-bold">Contact Us</h1>
                        <p>+88 01750 00 00 00 <br />
                          +88 01750 00 00 00</p>
                    </div>
                   </div>
                </div>
                </Container>
        </div>
    );
};

export default Adress;