import { Link } from "react-router-dom";
import Card from "../Card/Card";

const FeaturedFoods = () => {
  return (
    <div className="my-10 px-5">
      <h2 className="text-center text-5xl font-extrabold">Featured Foods</h2>
      <div className="divider w-4/5 mx-auto"></div>
      <div>
        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-3 my-5">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className="flex justify-center">
          <Link
            to="/AvailableFoods"
            className="btn bg-thirdColor text-secondColor text-lg font-bold"
          >
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFoods;
