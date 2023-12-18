import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import useAuth from "../../../Hooks/useAuth";
import { FaDownload } from "react-icons/fa";
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

const Testresults = () => {
    const targetRef = useRef();
    const {user} = useAuth()
    const axiosSequre = useAxiosSequre()
    const {data: reports=[]}= useQuery({
       queryKey:['result'],
       queryFn:async()=>{
        const res = await axiosSequre.get(`/report/${user.email}`)
        console.log(res.data)
        return res.data
       
    }
    })
    console.log(reports)
    return (
        <div className="text-black">
            <h1 className="text-black font-bold text-2xl mb-3">Test Result</h1>
            <div className="overflow-x-auto">
<table className="table ">
{/* head */}
<thead className="bg-gray-400">
  <tr>
    <th>Email</th>
    <th>Name</th>
    <th>Report</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>

  <tr >
    <td>
      <div className="flex items-center gap-3">
      {reports.email}
      </div>
    </td>
    <td><div>
          <div className="font-bold">{reports.reportname}</div>
        </div></td>
        <td><div>

        <div ref={targetRef} className="font-bold">{reports.report}</div>
        </div></td>
       
    <th className="flex gap-4">
      
    <button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}><FaDownload /> Download PDF</button>
        

    </th>
  </tr>

  </tbody>

</table>
</div>
        </div>
    );
};

export default Testresults;