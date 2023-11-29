import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import { uploedImage } from "../../../Utility/Utility";
import { useLoaderData } from "react-router-dom";

const EditTest = () => {
    const testData= useLoaderData()
    const {image, name,price,date,_id,slots,description,timeslots}= testData
    const axiosSequre = useAxiosSequre()
    const handleSubmit = async e => {
        e.preventDefault()
        const form=e.target
        const name= form.name.value
        const timeslots= form.timeslots.value
        const slots=form.slots.value
        const price=form.price.value
        const  date=form.date.value
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
            description
        }
      console.log(addTest);
        const testItem = await axiosSequre.put(`/tests/${_id}`, addTest)
        console.log(testItem.data)
        if (testItem.data.modifiedCount) {
            toast.success("Test update successFully")
          }
    
          
    
    }
    return (
        <div>
            <h1 className="text-black text-center text-2xl font-bold">Update Test</h1>
            <form onSubmit={handleSubmit}>
          <div className="form-control w-full my-5">
            <label className="label">
              <span className="label-text">Test Name*</span>
            </label>
            <input
              name="name"
              type="text"
              defaultValue={name}
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
               defaultValue={timeslots}
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
                defaultValue={price}
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
                defaultValue={date}
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
                defaultValue={slots}
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
           defaultValue={description}
              className="textarea text-black textarea-bordered h-24"
              placeholder="recipe details"
            ></textarea>
          </div>
          <div className="form-control my-6">
          <input  name="image" type="file" className="file-input text-black file-input-bordered w-full max-w-xs" />
          <div className="bg-black">
    
      </div>
          </div>
          {/* <input  type="submit" value="Add item" /> */}
          <button className="btn bg-[#6AAB9C] hover:bg-[#6AAB9C] text-white" ><FaEdit size={26} /> Update </button>
        </form>
        </div>
    );
};

export default EditTest;