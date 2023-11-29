import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "./useAxiosSequre";
import useAuth from "./useAuth";

const useAdmin = () => {
    const {user} = useAuth()
    const axiosSequre = useAxiosSequre()
   
    const {data: isAdmin, isPending: isLoadingAdmin}= useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn:async()=>{
            const res = await axiosSequre.get(`/users/admin/${user.email}`)
            return res.data?.admin
        }
    })


    return [isAdmin, isLoadingAdmin]
};

export default useAdmin;