import axios from "axios";
const axoisPublic = axios.create({
  baseURL: "https://assignment-12-server-five-jade.vercel.app",
});
const useAxiosPublic = () => {
  return axoisPublic;
};

export default useAxiosPublic;
