import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div
      className=" flex flex-col items-center mt-32 
    "
    >
      <img
        className="w-2/5"
        src="https://i.ibb.co/89NcnTt/error.jpg"
        alt="error"
      />

      <p className="mt-4">Here is helpful link:</p>
      <NavLink className="underline text-2xl" rel="stylesheet" href="/">
        Home
      </NavLink>
    </div>
  );
};

export default Error;
