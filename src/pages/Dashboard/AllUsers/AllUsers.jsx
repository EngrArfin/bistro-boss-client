/* import { useQuery } from "@tanstack/react-query";
 *//* import useAxiosSecure from "../../../hooks/userAxiosSecure";
 */
import { Helmet } from "react-helmet";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import loginUsers from "../../../hooks/loginUsers";

const AllUsers = () => {
  const [users, refetch] = loginUsers();

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is admin`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })

  }

  const handleDelete = user => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
      }
    });

  }



  /* const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], 
  async () => {
    const res = await axiosSecure.get('/users');
    return res.data;
  });  */

  /* const handleMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin Now !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }; */

  /* const handleDelete = user => {
    
  }  */


  /*  const axiosSecure = useAxiosSecure();
   const { data: users = [], refetch } = useQuery({
     queryKey: ['users'],
     queryFn: async () => {
       const res = await axiosSecure.get('http://localhost:5000/users');
       return res.data;
     }
   })
 
   const handleMakeAdmin = user => {
     axiosSecure.patch(`http://localhost:5000/users/admin/${user._id}`)
       .then(res => {
         console.log(res.data)
         if (res.data.modifiedCount > 0) {
           refetch();
           Swal.fire({
             position: "top-end",
             icon: "success",
             title: `${user.name} is an Admin Now!`,
             showConfirmButton: false,
             timer: 1500
           });
         }
       })
   }
 
   const handleDeleteUser = user => {
     Swal.fire({
       title: "Are you sure?",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!"
     }).then((result) => {
       if (result.isConfirmed) {
 
         axiosSecure.delete(`http://localhost:5000/users/${user._id}`)
           .then(res => {
             if (res.data.deletedCount > 0) {
               refetch();
               Swal.fire({
                 title: "Deleted!",
                 text: "Your file has been deleted.",
                 icon: "success"
               });
             }
           })
       }
     });
   }
    */
  return (
    <div className="w-full p-1">
      <Helmet>
        <title>Bistro Boss | All User</title>
      </Helmet>

      <h2 className='text-3xl front-semibold'>Welcome to All Users: {users.length} </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role === 'admin' ? 'admin' :
                      <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-red-500 text-white">
                        <FaUserShield></FaUserShield>
                      </button>

                  }
                </td>
                <td>
                  <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-700 text-white">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
