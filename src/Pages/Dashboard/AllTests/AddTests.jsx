
import {  FaFileMedical } from "react-icons/fa";
import { uploedImage } from "../../../Utility/Utility";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import { toast } from "react-hot-toast";


const AddTests = () => {
    const axiosSequre = useAxiosSequre()
    const handleSubmit = async e => {
        e.preventDefault()
        const form=e.target
        const name= form.name.value
        const timeslots= form.timeslots.value
        const slots=parseInt(form.slots.value)
        const price=parseInt(form.price.value)
        const  date=form.date.value
        const book=0
        const description=form.description.value
        const image= form.image.files[0]
        const imagedata = await uploedImage(image)
        const uploadimage= imagedata.data.display_url
       console.log(imagedata);
       

        const addTest = {
            name,
            timeslots,
            slots,
            price,
            date,
            image:uploadimage,
            description,
            book
        }
      console.log(addTest);
        const testItem = await axiosSequre.post("/tests", addTest)
        console.log(testItem.data)
        if (testItem.data.insertedId) {
            toast.success("Test Add successFully")
          }
    
          
    
    }


    
    return (
        <div>
           
                <h1 className="text-center text-black font-bold text-2xl">Add Test</h1>
          
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full my-5">
            <label className="label">
              <span className="label-text">Test Name*</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Test Name"
              required
              className="input input-bordered text-black w-full "
            />
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Time Slots*</span>
              </label>
              <select
               name="timeslots"
                className="select text-black select-bordered w-full "
              >
                <option disabled >
                  Select a Time Slot
                </option>
                <option value="7 AM - 9 AM">7 AM - 9 AM</option>
                <option value="11 AM - 2 PM">11 AM - 2 PM</option>
                <option value="4 PM - 6 PM">4 PM - 6 PM</option>
                <option value="8 PM - 10 PM">8 PM - 10 PM</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
               name="price"
                type="text"
                placeholder="price"
                required
                className="input input-bordered text-black w-full "
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Date*</span>
              </label>
              <input
                name="date"
                type="date"
                placeholder="date"
                required
                className="input input-bordered text-black w-full "
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Slots*</span>
              </label>
              <input
                name="slots"
                type="text"
                placeholder="slot"
                required
                className="input input-bordered text-black w-full "
              />
            </div>
          </div>





          <div className="form-control my-6">
            <label className="label">
              <span className="label-text">Test Details</span>
            </label>
            <textarea
           name="description"
              className="textarea text-black textarea-bordered h-24"
              placeholder="test description"
            ></textarea>
          </div>
          <div className="form-control my-6">
          <input name="image" type="file" className="file-input text-black file-input-bordered w-full max-w-xs" />
          </div>
          {/* <input  type="submit" value="Add item" /> */}
          <button className="btn bg-[#6AAB9C] hover:bg-[#6AAB9C] text-white" ><FaFileMedical size={26} /> Add Test </button>
        </form>
      </div>
    );
};

export default AddTests;