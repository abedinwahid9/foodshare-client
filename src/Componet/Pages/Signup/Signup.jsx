import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const provider = new GoogleAuthProvider();
  const Auth = useContext(AuthProvider);

  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  const { createUser, loading, googleLogin } = Auth;

  const isPasswordValid = (password) => {
    if (password.length < 6) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    if (!isPasswordValid(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one capital letter with no special characters."
      );
      return;
    }

    const emailForm = { name, email, photoUrl, password };

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log("Display name updated successfully");
          })
          .catch((error) => {
            // Handle errors
            console.error("Error updating display name", error);
          });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
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
      });
  };

  return (
    <div>
      <div
        className="hero  min-h-screen bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/FKBztrz/pngtree-vegetables-green-food-poster-banner-picture-image-918033-removebg-preview.png)",
        }}
      >
        <div className="md:w-2/4 w-full">
          <div className="card  shadow-2xl bg-[#ffffff1f] p-5">
            <h2 className="text-center text-5xl font-extrabold">Signup</h2>
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
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
                  name="photoUrl"
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
                  name="email"
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
              {isPasswordValid && (
                <div className="text-[#ff2f2f]">{passwordError}</div>
              )}
              <div className="form-control mt-6">
                <input
                  value="Signup"
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

export default Signup;
