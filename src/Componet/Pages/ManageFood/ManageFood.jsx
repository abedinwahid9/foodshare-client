import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ManageFood = () => {
  const [addDatas, setaddDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(addDatas);

  const email = "admin@gmail.com";
  const id = useParams();

  useEffect(() => {
    axios(`http://localhost:5000/reqfood?email=${email}&sort=${id.id}`)
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
                {addDatas.map((addData) => {
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
                      <td>{addData.email}</td>
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
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card bg-transparent">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/GQMxDTd/1-fe-MTb-NGk-DO37-R9c1k-LHMTA.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body md:px-20 py-10">
          <h2 className="font-extrabold text-6xl">food name</h2>

          <p className="font-bold text-xl">
            Food Quantity: <span className="font-normal">5pcs</span>
          </p>
          <p className="font-bold text-xl">
            Expired Date/Time: <span className="font-normal">2days</span>
          </p>

          <p className="font-bold text-xl">
            Additional Notes:{" "}
            <span className="font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur, nihil!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManageFood;
