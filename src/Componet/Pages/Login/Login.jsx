import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const { signInUser, googleLogin } = useContext(AuthProvider);
  const navigate = useNavigate();

  // Add state for error message
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);

        setErrorMessage("Incorrect password. Please try again.");
      });
  };

  const handlegoogleLogin = () => {
    googleLogin(provider)
      .then(() => {
        console.log("success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // Set the error message here
        setErrorMessage("Google Login Failed");
      });
  };

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
            <form className="card-body" onSubmit={handleLoginForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {errorMessage && (
                <p className="text-[#ff3030] text-sm font-bold">
                  {errorMessage}
                </p>
              )}
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
              <div className="mt-5 flex justify-center items-center">
                <h2 className="text-textColors text-lg font-medium  mr-4">
                  Signup with:
                </h2>
                <div onClick={handlegoogleLogin}>
                  <FcGoogle className="text-6xl" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
