import Container from "../../../Components/Container/Container";
import bannerimg from "../../../assets/images/2150796712.jpg"
import icon1 from "../../../assets/images/icon (3).png"
import icon2 from "../../../assets/images/icon (2).png"
import icon3 from "../../../assets/images/icon (1).png"
import icon4 from "../../../assets/images/icon (4).png"

const Service = () => {
    return (
        <Container>
            <h1 className="font-bold text-center mt-5  text-2xl">Why Choose Us</h1>
            <p className="text-center mb-5">Our department & special service</p>
            <div className="hero min-h-screen" style={{backgroundImage:`url()`}}>
  <div className="hero-content gap-6 justify-between flex-col lg:flex-row">
    <img src={bannerimg} className="w-[600px] rounded-lg " />
    <div>
    <div className="flex gap-5 items-center justify-center rounded-lg mb-10">
                    <img src={icon1} className="" alt=""  />
                    <div className="text-black">
                        <div>
                        <h1 className="font-bold text-xl">Health Information</h1>
                        </div>
                        <p className="">Contrary to popular belief, <br /> Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical <br /> Latin literature from 45 BC.</p>
                    </div>
    </div>
    <div className="flex gap-5 items-center justify-center rounded-lg mb-10">
                    <img src={icon2} className="" alt=""  />
                    <div className="text-black">
                        <div>
                        <h1 className="font-bold text-xl">Medical Education</h1>
                        </div>
                        <p className="">Contrary to popular belief, <br /> Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical <br /> Latin literature from 45 BC.</p>
                    </div>
    </div>
    <div className="flex gap-5 items-center justify-center rounded-lg mb-10">
                    <img src={icon3} className="" alt=""  />
                    <div className="text-black">
                        <div>
                        <h1 className="font-bold text-xl">Symptom Check</h1>
                        </div>
                        <p className="">Contrary to popular belief, <br /> Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical <br /> Latin literature from 45 BC.</p>
                    </div>
    </div>
    <div className="flex gap-5 items-center justify-center rounded-lg ">
                    <img src={icon4} className="" alt=""  />
                    <div className="text-black">
                        <div>
                        <h1 className="font-bold text-xl">Qualified Doctors</h1>
                        </div>
                        <p className="">Contrary to popular belief, <br /> Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical <br /> Latin literature from 45 BC.</p>
                    </div>
    </div>
     
    </div>
  </div>
</div>
        </Container>
    );
};

export default Service;