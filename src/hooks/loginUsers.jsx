
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const loginUsers = () => {
    const {user} = useContext(AuthContext);
    const { refetch, data: allusers = [] } = useQuery({
        queryKey: ['allusers', user?.email],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        },
      })
      return[allusers, refetch]
};

export default loginUsers;
