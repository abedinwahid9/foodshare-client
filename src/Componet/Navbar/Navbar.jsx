import { NavLink } from "react-router-dom";

function NavbarSite() {
  const links = (
    <>
      <NavLink className="mr-3 text-lg font-bold" to="/">
        Home
      </NavLink>
      <NavLink className="mr-3 text-lg font-bold" to="/availableFoods">
        AvailableFoods
      </NavLink>
      <NavLink className="mr-3 text-lg font-bold" to="/addfood">
        Add Food
      </NavLink>
      <NavLink className="mr-3 text-lg font-bold" to="/managemyfoods">
        Manage My Foods
      </NavLink>
      <NavLink className="mr-3 text-lg font-bold" to="/MyreqFood">
        My Food Request
      </NavLink>
      <NavLink className="mr-3 text-lg font-bold" to="/login">
        Login
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar  md:p-3 bg-firstColor drop-shadow-lg z-50 relative">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2 text-lg font-medium"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-lg font-medium shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-12 h-12 rounded-full bg-[#3fb920] border-4 mr-2"
              src="https://i.ibb.co/C0mV5n8/28051061-removebg-preview.png"
              alt=""
            />

            <h2 className="text-secondColor font-bold text-4xl ">
              Food
              <span className="text-thirdColor font-bold text-xl ">Share</span>
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarSite;
