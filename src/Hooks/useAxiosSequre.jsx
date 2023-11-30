import axios from "axios";

const axiosSequre = axios.create({
    baseURL:"https://assignment-12-server-five-jade.vercel.app"
})
const useAxiosSequre = () => {
    return axiosSequre
};

export default useAxiosSequre;