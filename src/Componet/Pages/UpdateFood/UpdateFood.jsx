import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const { control, handleSubmit } = useForm();
  const [fooddata, setFooddata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://food-community-sever.vercel.app/foods/update/${params.id}`)
      .then((data) => {
        setIsLoading(true);
        setFooddata(data.data);
        setIsLoading(false);
      });
  }, [params.id]);

  const {
    foodName,
    Foodimageurl,
    FoodQuantity,
    Pickuplocation,
    ExpiredDate,
    AdditionalNotes,
  } = fooddata;

  console.log(fooddata);

  const onSubmit = (data) => {
    axios
      .put(
        `https://food-community-sever.vercel.app/foods/update/${params.id}`,
        { ...data }
      )
      .then((data) => {
        if (data.data.acknowledged) {
          Swal.fire("food update success ");
        }
      });
  };

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div
      className="py-10 bg-no-repeat bg-contain bg-cover"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/bmY5jcH/pexels-ella-olsson-1640774-removebg-preview.png)",
      }}
    >
      {" "}
      <h2 className="text-5xl text-center font-extrabold">
        Update Sharing Food
      </h2>
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
                  defaultValue={foodName}
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
                  defaultValue={Foodimageurl}
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
                    defaultValue={FoodQuantity}
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
                    defaultValue={ExpiredDate}
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
                    defaultValue={Pickuplocation}
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
                  defaultValue={AdditionalNotes}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Update Product"
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

export default UpdateFood;
