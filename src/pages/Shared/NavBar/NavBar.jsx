import { useContext } from "react";
import {} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <li>
        <Link className="uppercase" to="/">Home</Link>
      </li>
      <li>
        <Link className="uppercase" to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link className="uppercase" to="/order/salad">Order Food</Link>
      </li>

      <button className="btn">
        <FaShoppingCart></FaShoppingCart>
        <div className="badge badge-secondary">+00</div>
      </button>

      {user ? (
        <>
          <button onClick={handelLogOut} className="btn btn-ghost uppercase">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link className="uppercase" to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar max-w-7xl fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost uppercase  text-xl">Food Restaurants</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
