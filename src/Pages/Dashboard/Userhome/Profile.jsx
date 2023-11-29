import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import useAuth from "../../../Hooks/useAuth";

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
      <div>
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={profile.uploadimage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
