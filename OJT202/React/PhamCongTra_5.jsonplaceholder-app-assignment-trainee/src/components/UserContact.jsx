import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserContact = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [contact, setContact] = useState(user || {});
  const [formData, setFormData] = useState({
    email: '',
    website: '',
    phone: ''
  });

  // Initialize contact and formData when user prop changes
  useEffect(() => {
    if (user) {
      setContact(user);
      setFormData({
        email: user.email || '',
        website: user.website || '',
        phone: user.phone || ''
      });
    }
  }, [user]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    // Reset form and exit edit mode
    setFormData({
      email: contact.email,
      website: contact.website,
      phone: contact.phone
    });
    setEditing(false);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${contact.id}`,
        {
          email: formData.email,
          website: formData.website,
          phone: formData.phone
        }
      );
      // Update local contact with response (fake API returns the sent data)
      setContact(prev => ({ ...prev, ...response.data }));
      setEditing(false);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 flex items-center justify-between">
          <h4 className="text-lg font-bold text-sky-300">Contact:</h4>
          
        </div>

        {editing ? (
          <>
          <div className="col-span-12">
            <label className="block mb-1 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        
          <div className="col-span-12 mt-4">
            <label className="block mb-1 font-medium">Website:</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        
          <div className="col-span-12 mt-4">
            <label className="block mb-1 font-medium">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        
          <div className="col-span-12 flex gap-2 justify-end mt-6">
            <button
              type="button"
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
              onClick={handleSave}
            >
              Submit
            </button>
        
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={handleCancel}
            >
              Reset
            </button>
          </div>
        </>
        
        ) : (
          <>
          
            <div className="col-span-12">
              <div className="grid grid-cols-12 items-start">
                <div className="col-span-4 md:col-span-3">
                  <p className="m-0">Email:</p>
                </div>
                <div className="col-span-8 md:col-span-9">
                  <p className="m-0 font-bold">{contact.email}</p>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="grid grid-cols-12 items-start">
                <div className="col-span-4 md:col-span-3">
                  <p className="m-0">Website:</p>
                </div>
                <div className="col-span-8 md:col-span-9">
                  <p className="m-0 font-bold">{contact.website}</p>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="grid grid-cols-12 items-start">
                <div className="col-span-4 md:col-span-3">
                  <p className="m-0">Phone:</p>
                </div>
                <div className="col-span-8 md:col-span-9">
                  <p className="m-0 font-bold">{contact.phone}</p>
                </div>
              </div>
            </div>
          </>
        )}
        {!editing && (
            <button
              type="button"
              className="px-2 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              onClick={handleEditClick}
            >
              Edit
            </button>
          )}
      </div>
    </div>
  );
};
export default UserContact;