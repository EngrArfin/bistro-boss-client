import { useContext } from "react";
import {} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <li><Link className="uppercase" to="/">Home</Link></li>
      <li><Link className="uppercase" to="/menu">Our Menu</Link></li>
      <li><Link className="uppercase" to="/order/salad">Order Food</Link></li>
      {/* {
        isAdmin ? <li><Link className="uppercase" to= "adminhome" >Dashboard</Link></li> :
        <li><Link className="uppercase" to= "userhome" >Dashboard</Link></li>
      } */}

      {
            user && isAdmin && <li><Link to="/dashboard/adminhome" className="uppercase">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userhome" className="uppercase">Dashboard</Link></li>
        }
       
      <Link to='/dashboard/mycart' className="btn gap-2">
        <FaShoppingCart></FaShoppingCart>
        {cart?.length || 0 }
        <div className="badge badge-secondary">+</div>
      </Link>

      {user ? <>
                {/* <span>{user?.displayName}</span> */}
                <button onClick={handleLogOut} className="btn btn-ghost uppercase" >LogOut</button>
            </> : <>
                <li><Link to="/login" className="uppercase">Login</Link></li>
            </>
            }
      
    </>
  );
  return (
    <>
      <div className="navbar max-w-8xl fixed z-10 bg-opacity-30 bg-black text-white">
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
          <a className="btn btn-ghost uppercase  text-xl">Sa Food Restaurants</a>
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
