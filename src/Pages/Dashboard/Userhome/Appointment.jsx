import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import useAuth from "../../../Hooks/useAuth";

const Appointment = () => {
    const {user}= useAuth()
    const axiosSequre = useAxiosSequre()
    const {data: appointments=[], refetch}= useQuery({
        queryKey:["appointment"],
        queryFn:async()=>{
            const res = await axiosSequre.get(`/testbook/${user.email}`)
            return res.data
        }
    })
    console.log(appointments);
    const upcoming = appointments.filter((fill)=>{new Date(fill.date).getTime() === new Date().getTime()})
    console.log(upcoming);
    return (
        

        <div>
            <div className="text-black font-bold text-2xl">My Upcomimg AppointMent</div>
            <div>
                {/* {
                    appointments.map((app)=><div key={app.id}>

                    </div>)
                } */}
            </div>
        </div>
    );
};

export default Appointment;