import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import useAuth from "../../../Hooks/useAuth";
import { FaEdit, FaRegEdit } from "react-icons/fa";
import { TbEdit, TbEditCircle } from "react-icons/tb";

const Profile = () => {
  const { user } = useAuth();
  const axiosSequre = useAxiosSequre();

  const { data: profile = [] } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axiosSequre.get(`/users/${user.email}`);
      return res.data;
    },
  });
  console.log(profile);
  return (
    <div>
      <div className="text-2xl font-bold text-black">My Profile</div>
      <div className="text-2xl text-center font-bold text-black">
        Welcome to{" "}
        <span className="text-[#6AAB9C] uppercase">{profile.name}</span>
      </div>
      <div className="card mt-10 absolute mx-auto text-center  flex flex-col justify-center items-center ">
  <figure className="px-10 pt-10 flex-1">
    <img src={profile.uploadimage} alt="image" className="w-40 h-40 rounded-xl" />
  </figure>
  <div className="card-body  flex-1  text-black">
    <h2 className="card-title">Name: {profile.name}</h2>
    <h2 className="card-title">Email: {profile.email}</h2>
    <h2 className="card-title">Blood: {profile.blood}</h2>
    <h2 className="card-title">District: {profile.district}</h2>
    <h2 className="card-title">Upazila: {profile.upazila}</h2>
    <div className=" text-center">
    {/* relative -top-[410px] bottom-0 left-[130px] */}
      <button className="flex justify-center items-center gap-1 bg-green-500 btn"><TbEditCircle size={18} />Edit </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Profile;
