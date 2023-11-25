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
        fetch("/banners.json")
        .then(res=> res.json())
        .then(data=> setBanner(data))
    },[])
    return (
        <div>
            {
                banner.map((hero, idx)=><div key={idx}>
                   {
                    hero.isActive==='true'?<div className="hero min-h-screen" style={{backgroundImage:`url(${hero.image})`}}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                      <div data-aos="fade-up" className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">{hero.title}</h1>
                        <p className="mb-2">{hero.text}</p>
                        <p className="mb-2">Try To Healthy <span className="text-2xl font-bold text-green-400">{hero.coupon.code}</span> </p>
                        <Link><button className="btn btn-accent text-white">Get Started</button></Link>
                      </div>
                    </div>
                  </div>
                  :
                  <>No data</>
                   }
                      
                </div>)
            }
        </div>
    );
};

export default Banner;