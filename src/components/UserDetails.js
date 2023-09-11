import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getUser from "../utils/getUser";
import "./UserDetails.model.css";

function UserDetails() {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUser(id).then((u) => {
      console.log("From User Details: ", u);
      setUser(u.user);
    });
  }, [id]);
  
  if (user && !user.id) {
    return <p>Loading...</p>;
  }

  if (user && user.success === false) {
    return <p>Error: {user.message}</p>;
  }

  return (
    <div className="user-details">
      <div className="user-avatar">
        <img src={user.photo} alt={user.name} />
      </div>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Position: {user.position}</p>
      </div>
    </div>
  );
}

export default UserDetails;
