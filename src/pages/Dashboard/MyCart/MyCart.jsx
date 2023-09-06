import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  //how does reduce work
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = item =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('')
      }
    })
  }
 /*  Swal.fire(
    'Deleted!',
    'Your file has been deleted.',
    'success'
  ) */

  return (
    <section>
       <SectionTitle
        heading={"Wanna Add More"}
        subHeading={"--My Cart--"}
      ></SectionTitle> 
      <div className="w-full">
        <Helmet>
          <title>Bistro Boss | My Cart</title>
        </Helmet>
        <div className="uppercase flex justify-evenly items-center h-[60px]">
          <h3 className="text-3xl">Total Items:{cart.length} </h3>
          <h3 className="text-3xl">Total Price: ${total} </h3>
          <button className="btn btn-warning btn-sm">Pay</button>
        </div>
        {/* table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-end">${item.price}</td>
                  <td>
                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-sm text-white bg-red-600">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
