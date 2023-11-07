import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedFoods = () => {
  const [foodDatas, setFoodDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/foods").then((data) => {
      setFoodDatas(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="my-10 px-5">
      <h2 className="text-center text-5xl font-extrabold">Featured Foods</h2>
      <div className="divider w-4/5 mx-auto"></div>
      <div>
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-3 my-5">
            {foodDatas.map((foodDatas) => {
              return <Card key={foodDatas._id} foodDatas={foodDatas}></Card>;
            })}
          </div>
        )}
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
