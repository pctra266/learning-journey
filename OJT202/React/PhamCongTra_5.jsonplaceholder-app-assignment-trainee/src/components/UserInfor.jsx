const UserInfor = ({ user }) => {
    return (
      <div className="flex flex-col gap-6 text-sm justify-around">
        <div>
          <h4 className="text-info text-lg font-bold mb-2 text-sky-300">Personal:</h4>
          <div className="grid grid-cols-12">
            <div className="col-span-4 md:col-span-3"><p className="">Id:</p></div>
            <div className="col-span-8 md:col-span-9"><p className=" font-bold">{user.id}</p></div>
  
            <div className="col-span-4 md:col-span-3"><p className="">Username:</p></div>
            <div className="col-span-8 md:col-span-9"><p className="font-bold">{user.username}</p></div>
          </div>
        </div>
  
        <div>
          <h4 className="text-info text-lg font-bold mb-2 text-sky-300">Address:</h4>
          <div className="grid grid-cols-12 ">
            <div className="col-span-4 md:col-span-3"><p className="">Street:</p></div>
            <div className="col-span-8 md:col-span-9"><p className=" font-bold">{user.address.street}</p></div>
  
            <div className="col-span-4 md:col-span-3"><p className="">Suite:</p></div>
            <div className="col-span-8 md:col-span-9"><p className=" font-bold">{user.address.suite}</p></div>
  
            <div className="col-span-4 md:col-span-3"><p className="">City:</p></div>
            <div className="col-span-8 md:col-span-9"><p className=" font-bold">{user.address.city}</p></div>
  
            <div className="col-span-4 md:col-span-3"><p className="">Zipcode:</p></div>
            <div className="col-span-8 md:col-span-9"><p className=" font-bold">{user.address.zipcode}</p></div>
          </div>
        </div>
  
        <div>
          <h4 className="text-info text-lg font-bold mb-2 text-sky-300">Company:</h4>
          <div className="grid grid-cols-12 ">
            <div className="col-span-4 md:col-span-3"><p className="">Name:</p></div>
            <div className="col-span-8 md:col-span-9"><p className=" font-bold">{user.company.name}</p></div>
  
            <div className="col-span-4 md:col-span-3"><p className="">CatchPhrase:</p></div>
            <div className="col-span-8 md:col-span-9"><p className=" font-bold">{user.company.catchPhrase}</p></div>
  
            <div className="col-span-4 md:col-span-3"><p className="">Bs:</p></div>
            <div className="col-span-8 md:col-span-9"><p className=" font-bold">{user.company.bs}</p></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserInfor;
  