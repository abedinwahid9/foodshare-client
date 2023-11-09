import axios from "axios";
import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthProvider } from "../../../AuthContext/AuthContext";

const AddFood = () => {
  const { control, handleSubmit } = useForm();
  const { user } = useContext(AuthProvider);

  const donarInfo = {
    donarName: user.displayName,
    imgUrl: user.photoURL,
  };
  const Accessibility = true;

  const onSubmit = (data) => {
    axios
      .post("https://food-community-sever.vercel.app/addfood", {
        ...data,
        email: user.email,
        ...donarInfo,
        Accessibility,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire("Food add success ");
        }
      });
  };
  return (
    <div
      className="py-10 bg-no-repeat bg-contain bg-cover"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/bmY5jcH/pexels-ella-olsson-1640774-removebg-preview.png)",
      }}
    >
      {" "}
      <h2 className="text-5xl text-center font-extrabold">Add Sharing Food</h2>
      <div className="divider w-3/4 mx-auto"></div>
      <div className="flex justify-center min-h-screen ">
        <div className="md:w-3/5 w-full">
          <div className="card  shadow-2xl bg-[#ffffff50]">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold">
                    Food Name
                  </span>
                </label>
                {/* <input type="email" placeholder="email" /> */}
                <Controller
                  render={({ field }) => (
                    <input
                      type="text"
                      placeholder="Food Name"
                      className="input input-bordered"
                      required
                      {...field}
                    />
                  )}
                  name="foodName"
                  control={control}
                  defaultValue=""
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold">
                    Food Image Url
                  </span>
                </label>
                <Controller
                  render={({ field }) => (
                    <input
                      type="text"
                      placeholder="Food Image Url"
                      className="input input-bordered"
                      required
                      {...field}
                    />
                  )}
                  name="Foodimageurl"
                  control={control}
                  defaultValue=""
                />
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-bold">
                      Food Quantity
                    </span>
                  </label>
                  <Controller
                    render={({ field }) => (
                      <input
                        type="number"
                        placeholder="Food Quantity"
                        className="input input-bordered"
                        required
                        {...field}
                      />
                    )}
                    name="FoodQuantity"
                    control={control}
                    defaultValue=""
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-bold">
                      Expired Date/Time
                    </span>
                  </label>
                  <Controller
                    render={({ field }) => (
                      <input
                        type="date"
                        className="input input-bordered"
                        required
                        {...field}
                      />
                    )}
                    name="ExpiredDate"
                    control={control}
                    defaultValue=""
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-bold">
                      Pickup Location
                    </span>
                  </label>
                  <Controller
                    render={({ field }) => (
                      <input
                        type="text"
                        placeholder="Pickup Location"
                        className="input input-bordered"
                        required
                        {...field}
                      />
                    )}
                    name="Pickuplocation"
                    control={control}
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold">
                    Additional Notes
                  </span>
                </label>
                <Controller
                  render={({ field }) => (
                    <textarea
                      type="text"
                      rows="3"
                      placeholder="Additional Notes:"
                      className="textarea textarea-bordered"
                      required
                      {...field}
                    />
                  )}
                  name="AdditionalNotes"
                  control={control}
                  defaultValue=""
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Add Product"
                  className="btn bg-thirdColor text-secondColor text-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
