import React from "react";
import male from "../assets/male.png";
import female from "../assets/female.png";
import { Link } from "react-router-dom";
const CustomerList = ({ customers, viewMode }) => {
  if (viewMode === "list") {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700 text-left uppercase">
            <tr>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Order Total</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 text-blue-600 font-medium">
                  <div className="flex items-center gap-2">
                    <img
                      src={c.gender === "female" ? female : male}
                      alt="avatar"
                      className="w-6 h-6 rounded-full"
                    />
                    <Link to={`/customers/${c.id}`} className="hover:underline">
                      {capitalize(c.firstName)}
                    </Link>
                  </div>
                </td>
                <td className="px-4 py-2">{capitalize(c.lastName)}</td>
                <td className="px-4 py-2">{c.address}</td>
                <td className="px-4 py-2">{c.city.trim()}</td>
                <td className="px-4 py-2">{c.state.name}</td>
                <td className="px-4 py-2">
                  {getOrderTotal(c.orders).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="px-4 py-2 text-blue-500 hover:underline cursor-pointer">
                <Link to={`/customers/${c.id}?tab=orders`} className="hover:underline">View Orders</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      {customers.map((c) => (
        <div key={c.id} className="border border-gray-300 w-52">
          <Link to={`/customers/${c.id}`}>
            <div className="bg-blue-600 text-white px-2 py-2 flex justify-between items-center">
              <span>
                {capitalize(c.firstName)} {capitalize(c.lastName)}
              </span>
              <span className="cursor-pointer">✏️</span>
            </div>
          </Link>
          <div className="p-2 text-center">
            <img
              src={c.gender === "female" ? female : male}
              alt="avatar"
              className="w-15 rounded-full mx-auto"
            />
            <p className="mt-2">
              {c.city.trim()}, {c.state.name}
            </p>
            <a href="#" className="text-blue-600 hover:underline">
            <Link to={`/customers/${c.id}?tab=orders`} className="hover:underline">View Orders</Link>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
  
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const getOrderTotal = (orders) => {
  if (!orders || !Array.isArray(orders)) return 0;
  return orders.reduce((sum, order) => sum + order.itemCost, 0);
};

export default CustomerList;
