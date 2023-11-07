/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ foodDatas }) => {
  const {
    _id,
    Foodimageurl,
    foodName,
    donarInfo,
    FoodQuantity,
    ExpiredDate,
    Pickuplocation,
    AdditionalNotes,
  } = foodDatas;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 h-2/5">
        <img src={Foodimageurl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  h-3/5">
        <h2 className="card-title">food name:{foodName}</h2>
        <div className="flex justify-center items-center gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://i.ibb.co/s5pnwB5/download-1-removebg-preview.png"
            alt=""
          />
          <p className="text-lg font-extrabold"> {donarInfo.name}</p>
        </div>
        <p className="font-bold">
          Food Quantity: <span className="font-normal">{FoodQuantity} pcs</span>
        </p>
        <p className="font-bold">
          Expired Date/Time: <span className="font-normal">{ExpiredDate}</span>
        </p>
        <p className="font-bold">
          Pickup Location: <span className="font-normal">{Pickuplocation}</span>
        </p>
        <p className="font-bold">
          Additional Notes:{" "}
          <span className="font-normal">{AdditionalNotes}</span>
        </p>
        <div className="card-actions">
          <Link
            className="btn bg-thirdColor text-secondColor w-full"
            to={`/details/${_id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
