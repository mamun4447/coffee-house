import React from "react";
import { useLoaderData } from "react-router-dom";

const UsersInfo = () => {
  const users = useLoaderData();
  //   console.log(users);
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4 merienda text]">User List</h2>
      <table className="min-w-full bg-white rounded shadow-md overflow-hidden ">
        <thead className="bg-[#C49A6C] text">
          <tr>
            <th className="text-left py-3 px-4">#</th>
            <th className="text-left py-3 px-4">Name</th>
            <th className="text-left py-3 px-4">Email</th>
            <th className="text-left py-3 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr
              key={user._id}
              className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-3 px-4">{idx + 1}</td>
              <td className="py-3 px-4">{user.name}</td>
              <td className="py-3 px-4">{user.email}</td>
              <td className="py-3 px-4">
                <button className="btn bg-green-300">Edit</button>
                <button className="btn bg-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersInfo;
