import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
const Recomended = () => {
    const [slider, setSlider]=  useState([])
    useEffect(()=>{
        fetch("/recomendation.json")
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            setSlider(data)}
            )
    },[])


    return (
        <div>
            <Swiper 
             autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                
           {
            slider.map((slide)=><SwiperSlide key={slide.id}>
            <div className="hero min-h-screen"  style={{
                backgroundImage:`url(${slide.image})`,
            
            }
            }>
             
             <div className="hero-overlay bg-opacity-60">
             <h1 className="text-4xl text-white mt-5 font-bold text-center">Recommendations</h1>
                <div className="hero-content text-center">
                    <div className="max-w-md mt-40">
                    <h1 className="mb-5 text-4xl font-bold text-white">{slide.type}</h1>
      <p className="mb-5 text-xl text-white font-semi-bold">{slide.content}</p>
                    
                    </div>
                
                </div>
      
    </div>
            </div>
         </SwiperSlide>)
           }
      </Swiper>      
        </div>
    );
};

export default Recomended;