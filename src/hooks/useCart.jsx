//import { useContext } from 'react';
//import { AuthContext } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './userAxiosSecure';

const useCart = () => {
  //const token = localStorage.getItem('access-token')
  const {user, loading} = useAuth(); 
  const [axiosSecure] = useAxiosSecure();
    
   const {refetch,  data: cart= [] } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`)
      console.log('res from axios', res)
      return res.data;
  },
    
  })
  return[cart, refetch]
};

export default useCart;


/* queryFn: async() =>{
        const res = await fetch(`http://localhost:5000/carts?email=${user.email}

        `,{headers: {
          authorization:` bearer ${token}`
        }})
        return res.json();
    }, */