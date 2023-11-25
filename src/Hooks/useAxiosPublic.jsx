import axios from "axios";
const axoisPublic = axios.create({
    baseURL:""
}) 
const useAxiosPublic = () => {
    return axoisPublic
};

export default useAxiosPublic;