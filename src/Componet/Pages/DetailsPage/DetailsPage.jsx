import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [foodData, setFoodData] = useState({});
  const id = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/foods/details/${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setFoodData(data);
        setLoading(false);
      });
  }, []);

  const {
    _id,
    Pickuplocation,
    foodName,
    Foodimageurl,
    donarName,
    email,
    FoodQuantity,
    ExpiredDate,
    AdditionalNotes,
    Accessibility,
  } = foodData;

  const date = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + "-" + mm + "-" + yyyy;

    return today;
  };

  const handleReqForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const notes = form.notes.value;
    const donationAmount = form.donationAmount.value;

    const requestDetails = {
      id: _id,
      foodName: foodName,
      donarName,
      reqDate: date(),
      FoodQuantity,
      ExpiredDate,
      email,
      Pickuplocation,
      Foodimageurl,
      AdditionalNotes,
      notes,
      donationAmount,
      Accessibility,
    };

    console.log(requestDetails);

    axios
      .post("http://localhost:5000/reqfood", {
        ...requestDetails,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire("request success ");
        }
      });
  };

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div
      className="py-10 bg-no-repeat bg-contain bg-cover"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/p1486NH/pngtree-green-lawn-green-food-product-promotion-poster-background-material-picture-image-1084457-rem.png)",
      }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-extrabold">Donor Information:</h2>
        <div className="divider w-2/5 mx-auto"></div>
        <div className="flex justify-center items-center gap-3">
          <img
            className="w-12 h-12 my-4 rounded-full"
            src="https://i.ibb.co/s5pnwB5/download-1-removebg-preview.png"
            alt=""
          />
          <p className="text-2xl font-extrabold ">donar name: {donarName}</p>
        </div>
        <p className="font-bold text-3xl">
          Pickup Location: <span className="font-normal">{Pickuplocation}</span>
        </p>
      </div>
      <div className="card bg-transparent">
        <figure className="px-10 pt-10">
          <img src={Foodimageurl} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body md:px-20 py-10">
          <h2 className="font-extrabold text-6xl">{foodName}</h2>

          <p className="font-bold text-xl">
            Food Quantity: <span className="font-normal">{FoodQuantity}</span>
          </p>
          <p className="font-bold text-xl">
            Expired Date/Time:{" "}
            <span className="font-normal">{ExpiredDate}</span>
          </p>

          <p className="font-bold text-xl">
            Additional Notes:{" "}
            <span className="font-normal">{AdditionalNotes}</span>
          </p>
          <div className="card-actions">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-thirdColor text-secondColor"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Request
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>{" "}
                </form>
                <form onSubmit={handleReqForm}>
                  <div className="card  ">
                    <figure className="px-10 pt-10">
                      <img
                        src={Foodimageurl}
                        alt="Shoes"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body ">
                      <h2 className="card-title">Food Name: {foodName}</h2>
                      <h2 className="card-title">id: {_id}</h2>
                      <div className="flex  items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full"
                          src="https://i.ibb.co/s5pnwB5/download-1-removebg-preview.png"
                          alt=""
                        />
                        <div>
                          <p className="text-lg font-extrabold">{donarName} </p>
                          <p className="text-lg ">{email}</p>
                        </div>
                      </div>
                      <p className="text-lg font-extrabold">
                        User name: login{" "}
                      </p>
                      <p className="font-bold">Request Date: {date()}</p>

                      <p className="font-bold">
                        Food Quantity:{" "}
                        <span className="font-normal">{FoodQuantity}</span>
                      </p>
                      <p className="font-bold">
                        Expired Date/Time:{" "}
                        <span className="font-normal">{ExpiredDate}</span>
                      </p>
                      <p className="font-bold">
                        Pickup Location:{" "}
                        <span className="font-normal">{Pickuplocation}</span>
                      </p>
                      <p className="font-bold">
                        <p> Additional Notes:</p>
                        <textarea
                          name="notes"
                          required
                          className="textarea textarea-warning"
                          placeholder="Notes"
                        ></textarea>
                      </p>
                      <div>
                        <label>Donation Money:</label>
                        <input
                          name="donationAmount"
                          type="number"
                          required
                          // value="0"
                          placeholder="0"
                          className="input input-bordered w-28 input-warning ml-3"
                        />
                      </div>
                      <div className="card-actions">
                        <input
                          type="submit"
                          value="Confirm Request"
                          className="btn bg-thirdColor text-secondColor"
                          onClick={() =>
                            document.getElementById("my_modal_3").showModal()
                          }
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
