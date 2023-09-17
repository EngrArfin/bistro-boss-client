import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  //TODO: load data from server to have dynamic isAdmin base on data

  //const isAdmin = true;
  const [isAdmin] = useAdmin();

  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      {" "}
      {/* drawer-mobile */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054] ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  ">
          {/* Sidebar content here */}

          {isAdmin ? <>
              <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
              <li><NavLink to="/dashboard/reservation"><FaUtensils></FaUtensils>Add Items</NavLink></li>
              <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Manages Items</NavLink></li>
              <li><NavLink to="/dashboard/history"><FaBook></FaBook>Manages Bookings</NavLink></li>
              <li><NavLink to="/dashboard/allusers"> <FaUsers></FaUsers> All Users</NavLink></li>
    
            </> : <>

              <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
              <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
              <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          }

          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
          <li><NavLink to="/menu"><FaWallet></FaWallet> Our Menu</NavLink></li>
          <li><NavLink to="/order/salad"> <FaWallet></FaWallet>Order Food</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
