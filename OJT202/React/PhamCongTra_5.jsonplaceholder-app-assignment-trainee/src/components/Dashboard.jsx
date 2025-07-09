import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="px-6 py-4">
      <h1 className="font-bold text-3xl mb-4">Users</h1>

      <table className="w-full table-auto text-sm">
        <thead className=" text-gray-800">
          <tr>
            <th className="px-4 py-2 text-left">id</th>
            <th className="px-4 py-2 text-left">name</th>
            <th className="px-4 py-2 text-left">username</th>
            <th className="px-4 py-2 text-left">email</th>
            <th className="px-4 py-2 text-left">phone</th>
            <th className="px-4 py-2 text-left">website</th>
            <th className="px-4 py-2 text-left">city</th>
            <th className="px-4 py-2 text-left">Company Name</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              className={`cursor-pointer ${
                index % 2 === 1 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.username}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phone}</td>
              <td className="px-4 py-2">{user.website}</td>
              <td className="px-4 py-2">{user.address.city}</td>
              <td className="px-4 py-2">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
