import {useEffect,useState} from 'react'
import CustomerControls from '../components/CustomerControls'
import CustomerList from '../components/CustomerList'
import { getAllCustomers } from '../services/axios';

const Customer = () => {
    const [customers, setCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [viewMode, setViewMode] = useState('card'); 
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          const res = await getAllCustomers();
          setCustomers(res);
          setFilteredCustomers(res);
        };
        fetchData();
      }, []);

      useEffect(() => {
        const term = filter.toLowerCase();
        const filtered = customers.filter(c =>
          c.firstName.toLowerCase().includes(term) || c.lastName.toLowerCase().includes(term)
        );
        setFilteredCustomers(filtered);
      }, [filter, customers]);

  return (
    <div className=''>
    <CustomerControls
      viewMode={viewMode}
      setViewMode={setViewMode}
      filter={filter}
      setFilter={setFilter}
    />
    <CustomerList customers={filteredCustomers} viewMode={viewMode} />
  </div>
  )
}

export default Customer