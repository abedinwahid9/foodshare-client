import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/FKBztrz/pngtree-vegetables-green-food-poster-banner-picture-image-918033-removebg-preview.png)",
        }}
      >
        <div className="w-2/4">
          <div className="card  shadow-2xl bg-[#ffffff1f] p-5">
            <h2 className="text-center text-5xl font-extrabold">Signup</h2>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  value="Login"
                  type="submit"
                  className="btn btn-primary"
                />
              </div>
              <h3 className="text-center text-lg font-medium">
                Already have an account!{" "}
                <Link
                  to="/login"
                  className="font-bold underline text-secondColor"
                >
                  Login
                </Link>
              </h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
