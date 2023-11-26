import Container from "../../../Components/Container/Container";
import deal from "../../../assets/images/image (5).png"
const Promotion = () => {
    return (
        <div>
            <Container>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={deal} className="w-[800px] rounded-lg " />
    <div className="">
      <h1 className="text-5xl font-bold text-[#6AAB9C]">ToDays Offer!!</h1>
      <p className="py-6 text-xl font-semibold">Payment With Stripe. You will get <span className="text-4xl">10%</span> discount Offer for all test.</p>
      <button className="btn bg-[#6AAB9C] hover:bg-[#6AAB9C] text-white">Get Started</button>
    </div>
  </div>
</div>
            </Container>
        </div>
    );
};

export default Promotion;