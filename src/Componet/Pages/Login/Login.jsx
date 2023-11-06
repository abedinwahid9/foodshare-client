import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/FKBztrz/pngtree-vegetables-green-food-poster-banner-picture-image-918033-removebg-preview.png)",
        }}
      >
        <div className="md:w-2/4 w-full">
          <div className="card  shadow-2xl bg-[#ffffff1f] p-5">
            <h2 className="text-center text-5xl font-extrabold">Login</h2>
            <form className="card-body">
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
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <input
                  value="Login"
                  type="submit"
                  className="btn btn-primary"
                />
              </div>
              <h3 className="text-center text-lg font-medium">
                create an new account!{" "}
                <Link
                  to="/signup"
                  className="font-bold underline text-secondColor"
                >
                  Signup
                </Link>
              </h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
