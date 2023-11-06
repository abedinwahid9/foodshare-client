const ContactUs = () => {
  return (
    <div>
      <div
        className="p-5 bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/xDjbmYq/green-grass-white-background-161307-3439-removebg-preview.png)",
        }}
      >
        <h2 className="text-center font-extrabold text-5xl">Contact Us</h2>
        <div className="divider"></div>
        <div className="flex md:flex-row flex-col">
          <div className=" md:w-1/2 w-full">
            <img
              src="https://i.ibb.co/L5q9TMz/28061-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="card md:w-1/2 w-full shadow-2xl bg-[#ffffff1e]">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Message"
                  className="textarea textarea-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-thirdColor text-secondColor text-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
