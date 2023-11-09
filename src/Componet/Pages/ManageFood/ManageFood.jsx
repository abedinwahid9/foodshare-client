import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthProvider } from "../../../AuthContext/AuthContext";

const ManageFood = () => {
  const [addDatas, setaddDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthProvider);
  const [singleData, setSingleData] = useState({});

  const { Foodimageurl, foodName, FoodQuantity, ExpiredDate, AdditionalNotes } =
    singleData;

  const email = user.email;
  const id = useParams();

  useEffect(() => {
    fetch(`https://food-community-sever.vercel.app/foods/details/${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setSingleData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios(
      `https://food-community-sever.vercel.app/reqfood?email=${email}&sort=${id.id}`
    )
      .then((response) => {
        setLoading(true);
        setaddDatas(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (loading) {
    return <>loading.....</>;
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
        <h2 className="text-4xl font-extrabold">Requster Information:</h2>
        <div className="divider w-2/5 mx-auto"></div>
        <div className="flex justify-center items-center gap-3">
          {/* <img
            className="w-12 h-12 my-4 rounded-full"
            src="https://i.ibb.co/s5pnwB5/download-1-removebg-preview.png"
            alt=""
          />
          <p className="text-2xl font-extrabold ">donar name</p> */}
          <div className="w-3/4">
            <table className="table table-zebra text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Requester Email</th>
                  <th>Request Time and Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {addDatas.length === 0 ? (
                  <h2 className="text-center text-lg font-extrabold">
                    No data found
                  </h2>
                ) : (
                  addDatas.map((addData) => {
                    return (
                      <tr key={addData._id}>
                        <th>
                          <img
                            className="w-12 h-12 my-4 rounded-full"
                            src={addData.Foodimageurl}
                            alt=""
                          />
                        </th>
                        <td>{addData.donarName}</td>
                        <td>{addData.donarEmail}</td>
                        <td>{addData.reqDate}</td>
                        <td>
                          <select
                            value={addData.Accessibility}
                            className="select select-bordered w-3/4 max-w-xs"
                          >
                            <option>Delivery</option>
                            <option>Pending</option>
                          </select>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card bg-transparent">
        <figure className="px-10 pt-10">
          <img src={Foodimageurl} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body md:px-20 py-10">
          <h2 className="font-extrabold text-6xl">{foodName}</h2>

          <p className="font-bold text-xl">
            Food Quantity:{" "}
            <span className="font-normal">{FoodQuantity} pcs</span>
          </p>
          <p className="font-bold text-xl">
            Expired Date/Time:{" "}
            <span className="font-normal">{ExpiredDate}</span>
          </p>

          <p className="font-bold text-xl">
            Additional Notes:{" "}
            <span className="font-normal">{AdditionalNotes}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManageFood;
