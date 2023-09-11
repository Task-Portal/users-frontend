import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getUsers from "../utils/getUsers";

function UserList() {
  const [data, setData] = useState({});
  const [pagParams, setPagParams]=useState({count: 5, page: 1, offset:0} )

  useEffect(() => {
    getUsers({count: pagParams.count, offset: pagParams.offset, page:pagParams.page}).then((u) => {
      console.log("From UserList: ", u);
   
      setData(u);
    });
  }, []);

  if (data&& data.users&& data.users.length === 0) {
    return <p>Loading...</p>;
  }

  if (data && !data.success) {
    return <p>Error: {data.message}</p>;
  }
const getPaginationParams=(event)=>{
const value = event.target.value;
setPagParams({
    ...pagParams,
    [event.target.name]: value
  });
}
const bring=()=>{
  console.log("Params: ", pagParams)
  getUsers(pagParams).then((u) => {
    console.log("From UserList: ", u);
   
    setData(u);
  });
}

  return (
   
    <div>
       <div className="user-list-header"><h1>Users</h1></div>
      <div className="box"> 
      <div className="info-box"><span>Count users on Page: {data.count} </span>
      
      <span>Total Pages: {data.total_pages}</span>
      <span>Total Users: {data.total_users}</span>
      </div>

      <div className="info-box"> Users on page:
      <input type="number" name="count" className="count-page" min={1} max={100} onBlur={getPaginationParams} />
      Page number: 
      <input type="number" name="page" className="count-page" min={1} max={data.total_pages} onBlur={getPaginationParams} />
      Offset number: 
      <input type="number" name="offset" className="count-page" min={0} max={data.total_users} onBlur={getPaginationParams} />
      <button onClick={bring}>Bring</button>
      </div>
     
      </div>
     
      <div className="user-list">
        {data.users.map((user) => (
          <>
            <div className="user-card" key={user.id}>
              <div className="user-photo">
                <img src={user.photo} alt="Avatar" />
              </div>
              <Link to={`/user/${user.id}`}> <div className="user-name">{user.name}</div>  </Link>
             
              <div className="user-email">{user.email}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default UserList;
