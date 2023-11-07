const ManageFood = () => {
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
                {/* row 1 */}
                <tr>
                  <th>
                    {" "}
                    <img
                      className="w-12 h-12 my-4 rounded-full"
                      src="https://i.ibb.co/s5pnwB5/download-1-removebg-preview.png"
                      alt=""
                    />
                  </th>
                  <td>Req name</td>
                  <td>Quality Control Specialist</td>
                  <td>1-55-663</td>
                  <td>
                    <select className="select select-bordered w-3/4 max-w-xs">
                      <option>Delivery</option>
                      <option>Pending</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>
                    {" "}
                    <img
                      className="w-12 h-12 my-4 rounded-full"
                      src="https://i.ibb.co/s5pnwB5/download-1-removebg-preview.png"
                      alt=""
                    />
                  </th>
                  <td>Req name</td>
                  <td>Quality Control Specialist</td>
                  <td>12245</td>
                  <td>
                    <select className="select select-bordered w-3/4 max-w-xs">
                      <option>Delivery</option>
                      <option>Pending</option>
                    </select>
                  </td>
                </tr>
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
                  </button>
                </form>
                <div className="card  ">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://i.ibb.co/L5q9TMz/28061-removebg-preview.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body ">
                    <h2 className="card-title">food name</h2>
                    <h2 className="card-title">food id</h2>
                    <div className="flex  items-center gap-3">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://i.ibb.co/s5pnwB5/download-1-removebg-preview.png"
                        alt=""
                      />
                      <div>
                        <p className="text-lg font-extrabold">donar name </p>
                        <p className="text-lg ">donar email </p>
                      </div>
                    </div>
                    <p className="text-lg font-extrabold">User name: </p>
                    <p className="font-bold">Request Date: </p>

                    <p className="font-bold">
                      Food Quantity: <span className="font-normal">5pcs</span>
                    </p>
                    <p className="font-bold">
                      Expired Date/Time:{" "}
                      <span className="font-normal">2days</span>
                    </p>
                    <p className="font-bold">
                      Pickup Location:{" "}
                      <span className="font-normal">dhaka</span>
                    </p>
                    <p className="font-bold">
                      <p> Additional Notes:</p>
                      <textarea
                        className="textarea textarea-warning"
                        placeholder="Notes"
                      ></textarea>
                    </p>
                    <div>
                      <label>Donation Money:</label>
                      <input
                        type="number"
                        // value="0"
                        placeholder="0"
                        className="input input-bordered w-28 input-warning ml-3"
                      />
                    </div>
                    <div className="card-actions">
                      <button
                        className="btn bg-thirdColor text-secondColor"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Confirm Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFood;
