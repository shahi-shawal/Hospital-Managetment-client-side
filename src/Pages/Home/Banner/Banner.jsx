import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
const Banner = () => {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    useEffect(()=>{
        fetch("https://assignment-12-server-five-jade.vercel.app/banner")
        .then(res=> res.json())
        .then(data=> setBanner(data))
    },[])
    return (
        <div className="">
            {
                banner.map((hero, idx)=><div key={idx}>
                   {
                    hero.isActive==='true'?<div className="hero min-h-screen" style={{backgroundImage:`url(${hero.image})`}}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                      <div data-aos="fade-up" className="max-w-md mt-28 lg:mt-auto">
                        <h1 className="mb-5 text-2xl lg:text-4xl font-bold">{hero.title}</h1>
                        <p className="mb-2">{hero.text}</p>
                        <p className="mb-2">Try To Healthy <span className="text-3xl font-bold ">{hero.coupon_code}</span> </p>
                        <Link to="/alltest"><button className="btn bg-[#6AAB9C] hover:bg-[#6AAB9C] text-white">Get Started</button></Link>
                      </div>
                    </div>
                  </div>
                  :
                  <></>
                   }
                      
                </div>)
            }
        </div>
    );
};

export default Banner;