import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import UserInfor from './UserInfor';
import UserContact from './UserContact';
import UserPhotoAlbum from './UserPhotoAlbum';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [album,setAlbum] = useState(null);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(res => setUser(res.data));

          axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
          .then(res => setAlbum(res.data));

      }, [id]);
      if (!user) {
        return <div className="p-6 text-gray-500">Loading user data...</div>;
      }
      return (
        <>
          <Header />
          <div className="px-10 py-4">
            <h1 className="text-3xl font-bold mb-6">{user.name}</h1>
      
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div className="flex-1">
                <UserInfor user={user} />
              </div>
              <div className="flex-1">
                <UserContact user={user} />
              </div>
            </div>
      
            <hr className="my-6" />
            <UserPhotoAlbum album={album} />
          </div>
        </>
      );
      
}

export default UserDetail