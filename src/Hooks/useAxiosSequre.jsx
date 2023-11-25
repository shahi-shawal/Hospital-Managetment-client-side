import axios from "axios";

const axiosSequre = axios.create({
    baseURL:""
})
const useAxiosSequre = () => {
    return axiosSequre
};

export default useAxiosSequre;