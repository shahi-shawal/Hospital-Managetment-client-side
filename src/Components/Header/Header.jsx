import headerimg from "../../assets/images/header.jpg"
const Header = ({header}) => {
    return (
        <div className="hero min-h-[30vh]" style={{
            backgroundImage:`url(${headerimg})`
        
        }}>
            <h1 className="text-4xl font-bold text-white mt-12 -ml-[900px]">{header}</h1>
        </div>
    );
};

export default Header;