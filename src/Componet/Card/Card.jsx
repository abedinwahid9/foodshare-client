import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://i.ibb.co/L5q9TMz/28061-removebg-preview.png"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">food name</h2>
        <div className="flex justify-center items-center gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://i.ibb.co/s5pnwB5/download-1-removebg-preview.png"
            alt=""
          />
          <p className="text-lg font-extrabold">donar name</p>
        </div>
        <p className="font-bold">
          Food Quantity: <span className="font-normal">5pcs</span>
        </p>
        <p className="font-bold">
          Expired Date/Time: <span className="font-normal">2days</span>
        </p>
        <p className="font-bold">
          Pickup Location: <span className="font-normal">dhaka</span>
        </p>
        <div className="card-actions">
          <Link
            to="/details/:id"
            className="btn bg-thirdColor text-secondColor "
          >
            View Detail Button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
