import React from 'react'
import male from "../assets/male.png"
import female from "../assets/female.png"
import {useState} from 'react'

const CustomerTabs = ({ customer,defaultTab = 'details'  }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
    const total = customer.orders.reduce((sum, o) => sum + o.itemCost, 0);
    return (
        <div>
          <div className="flex border-b mb-4">
            <button
              className={`py-2 px-4 text-sm ${activeTab === 'details' ? 'font-semibold text-black' : 'text-gray-400'}`}
              onClick={() => setActiveTab('details')}
            >
              📋 Customer Details
            </button>
            <button
              className={`py-2 px-4 text-sm ${activeTab === 'orders' ? 'font-semibold text-black' : 'text-gray-400'}`}
              onClick={() => setActiveTab('orders')}
            >
              🏷️ Customer Orders
            </button>
          </div>
    
          {activeTab === 'details' ? (
            <div className="text-center">
              <img
                    src={customer.gender === 'female'
                               ? female
                               : male}
                alt="avatar"
                className="w-20 h-20 mx-auto mb-2 rounded-full"
              />
              <p className="font-semibold text-lg">
                {capitalize(customer.firstName)} {capitalize(customer.lastName)}
              </p>
              <p className="text-gray-600">{customer.address}</p>
              <p className="text-gray-600">
                {customer.city.trim()}, {customer.state.name}
              </p>
            </div>
          ) : (
            <div className="text-sm px-2">
              <p className="mb-2 font-semibold">
                Orders for {capitalize(customer.firstName)} {capitalize(customer.lastName)}
              </p>
              {customer.orders.map((order, index) => (
                <div key={index} className="flex justify-between border-b py-1">
                  <span>{order.productName}</span>
                  <span>${order.itemCost.toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-end font-semibold pt-2">
                <span>Total: ${total.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      );
}
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export default CustomerTabs