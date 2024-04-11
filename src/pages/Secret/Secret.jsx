import { useQuery } from "@tanstack/react-query";

const Secret = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
          const res = await fetch('http://localhost:5000/users')
          return res.json();
        })

    return (
        <div>
            <h2>Secret Page</h2>
            <h3 className="text-3xl font-semibold my-4">
                Total Users Here: {users.length}
            </h3>

        </div>
    );
};

export default Secret;