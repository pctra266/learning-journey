import React, { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const defaultUser: User = {
  id: 0,
  name: '',
  email: '',
  phone: '',
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User>(defaultUser);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(() => alert('Failed to fetch users'));
  }, []);

  const handleChange = (e: any) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isEditing) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${newUser.id}`, newUser)
        .then(() => {
          setUsers(prev => prev.map(u => u.id === newUser.id ? newUser : u));
          setNewUser(defaultUser);
          setIsEditing(false);
        });
    } else {
      axios.post('https://jsonplaceholder.typicode.com/users', newUser)
        .then(res => {
          setUsers(prev => [...prev, { ...newUser, id: Date.now() }]); 
          setNewUser(defaultUser);
        });
    }
  };

  const handleEdit = (user: User) => {
    setNewUser(user);
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
  if (!confirm("Are you sure you want to delete this user?")) return;

    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(prev => prev.filter(u => u.id !== id));
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>User List (CRUD)</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={newUser.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'} User</button>
        {isEditing && (
          <button type="button" onClick={() => {
            setIsEditing(false);
            setNewUser(defaultUser);
          }}>
            Cancel
          </button>
        )}
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email} - {user.phone}
            <button onClick={() => handleEdit(user)} style={{ marginLeft: 10 }}>Edit</button>
            <button onClick={() => handleDelete(user.id)} style={{ marginLeft: 5 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
