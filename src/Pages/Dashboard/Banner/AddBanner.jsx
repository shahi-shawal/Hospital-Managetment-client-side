import { FaThemeco } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { uploedImage } from "../../../Utility/Utility";
import { toast } from "react-hot-toast";

const AddBanner = () => {
    const axiosPublic = useAxiosPublic()
    const handleSubmit=async e=>{
    e.preventDefault()
    const form = e.target
    const name= form.name.value
    
        const title=form.title.value
        const text=form.text.value
        const  coupon_code=form.coupon_code.value
        const coupon_rate=form.coupon_rate.value
        const image= form.image.files[0]
        const imagedata = await uploedImage(image)
        const uploadimage= imagedata.data.display_url
        const isActive= form.isActive.value
        const addbanner = {
            name,
            title,
            text,
            coupon_code,
            coupon_rate,
            image:uploadimage,
            isActive
        }
   const addBanner=await axiosPublic.post("/banner", addbanner)
   console.log(addBanner.data)
   if (addBanner.data.insertedId) {
       toast.success("Banner Add successFully")
     }
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-black">Add Banner</h1>

            <form onSubmit={handleSubmit}>
          <div className="form-control w-full my-5">
            <label className="label">
              <span className="label-text">Name</span>
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
          <div className=" form-control w-full my-6">
            <label className="label">
              <span className="label-text">Text</span>
            </label>
            <textarea
           name="text"
              className="textarea text-black textarea-bordered h-24 w-full"
              placeholder="text"
            ></textarea>
          </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
               name="title"
                type="text"
                placeholder="title"
                required
                className="input input-bordered text-black w-full"
              />
            </div>
         
          </div>
         
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Coupon Code</span>
              </label>
              <input
                name="coupon_code"
                type="text"
                placeholder="Coupon"
                required
                className="input input-bordered text-black w-full "
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Coupon Code rate</span>
              </label>
              <input
                name="coupon_rate"
                type="text"
                placeholder="coupon rate"
                required
                className="input input-bordered text-black w-full "
              />
            </div>
          </div>





          <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Active</span>
              </label>
              <input
                name="isActive"
                type="text"
                disabled
                defaultValue="false"
                placeholder=""
                className="input input-bordered text-black w-full "
              />
            </div>
          <div className="form-control my-6">
          <input name="image" type="file" className="file-input text-black file-input-bordered w-full max-w-xs" />
          </div>
          {/* <input  type="submit" value="Add item" /> */}
          <button className="btn bg-[#6AAB9C] hover:bg-[#6AAB9C] text-white" ><FaThemeco size={26} /> Add Banner </button>
        </form>
        </div>
    );
};

export default AddBanner;