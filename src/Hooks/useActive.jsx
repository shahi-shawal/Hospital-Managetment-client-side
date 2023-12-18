import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSequre from "./useAxiosSequre";

const useActive = () => {
    const {user} = useAuth()
    const axiosSequre = useAxiosSequre()

    const {data: isStatus,} = useQuery({
        queryKey:[user?.email,"status"],
        queryFn:async()=>{
            const res = await axiosSequre.get(`/users/status/${user.email}`)
            console.log(res.data.status);
            return res.data?.status
            
        }
    })
    return  [isStatus]
};

export default useActive;