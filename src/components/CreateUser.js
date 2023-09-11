import React, { useState, useEffect } from "react";
import "./CreateUser.model.css";
import getPositions from "../utils/getPositions";
import createUserInDb from "../utils/createUser";

const CreateUser = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    positionId: null,
    photo: null,
  });
  const [positions, setPositions] = useState([]);
  const [message, setMessage] = useState("");
  // const [btnActive, setBtnActive] = useState(false);

  useEffect(() => {
    getPositions().then((p) => {
      setPositions(p);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setNewUser({
        ...newUser,
        [name]: files[0],
      });
    } else {
      setNewUser({
        ...newUser,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const result = await createUserInDb(newUser);
    if (result && !result.success) {
      let response = result.message+"<br/>";
      
        for (let i in result.fails) {
          response += `${result.fails[i][0]}   <br/><br/>`;
        }
      

      setMessage(response);
    }
    console.log("result: ", result);

    if (result && result.success) {
      setNewUser({
        name: "",
        email: "",
        phone: "",
        positionId: null,
        photo: null,
      });
      setMessage(result.message);
    }

  };

  if (positions && !positions.success) {
    return <p>Error: {positions.message}</p>;
  }

  return (
    <div className="create-user-container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            required
            placeholder="name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            required
            placeholder="email"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={newUser.phone}
            onChange={handleChange}
            required
            placeholder="phone +380..."
          />
        </div>
        {/* Step 2: Create a select input for positions */}
        <select
          value={newUser.positionId}
          onChange={(e) => {
            setNewUser({
              ...newUser,
              positionId: e.target.value,
            });
          }}
          required
        >
          <option value="">Select a position</option>
          {positions.positions.map((position) => (
            <option key={position.id} value={position.id}>
              {position.name}
            </option>
          ))}
        </select>
        <div>
          <label>Photo:</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Create
        </button>
      </form>
      <div
        className="errors"
        dangerouslySetInnerHTML={{ __html: message }}
      ></div>
    </div>
  );
};

export default CreateUser;
