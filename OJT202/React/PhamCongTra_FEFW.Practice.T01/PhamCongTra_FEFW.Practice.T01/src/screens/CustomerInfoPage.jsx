import React from 'react'
import CustomerTabs from '../components/CustomerTabs'
import { useParams, Link,useLocation } from 'react-router-dom';
import { getCustomerById } from '../services/axios';
import {useEffect,useState} from 'react'
import people from "../assets/people.png";

const CustomerInfoPage = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get('tab');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCustomerById(id);
      setCustomer(res);
    };
    fetchData();
  }, [id]);
  if (!customer) return <div className="p-4">Loading...</div>;

 return (
    <div className="border border-gray-300 max-w-xl mx-auto mt-8">
      <div className="bg-blue-500 text-white px-4 py-2 text-lg font-semibold flex">
        <img src={people} alt="people" />Customer Manager
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">👤 Customer Information</h2>
        <CustomerTabs customer={customer} defaultTab={tab || 'details'}/>
        <div className="mt-4">
          <Link to="/" className="text-blue-500 hover:underline">View all Customers</Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfoPage