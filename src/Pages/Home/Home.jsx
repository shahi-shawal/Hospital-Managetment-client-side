import Adress from "./Adreess/Adress";
import Banner from "./Banner/Banner";
import Promotion from "./Promotion/Promotion";
import Recomended from "./Recomended/Recomended";
import Service from "./Service/Service";




const Home = () => {
    return (
        <div>
            <div className="">
            <Banner></Banner>
            <Adress></Adress>
            <Promotion></Promotion>
            <Recomended></Recomended>
            <Service></Service>
            </div>
        </div>
    );
};

export default Home;