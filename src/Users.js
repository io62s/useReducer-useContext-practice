import React, { useContext } from "react";
import { CountContext } from "./Context";

const Users = () => {
  const users = useContext(CountContext);
  const { data, getUser, name, setName, dispatch } = users;

  const handleUsers = e => {
    dispatch(setName(e.target.value));
  };

  const renderUsers = data
    .filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
    .map(user => (
      <div key={user.id}>
        <h1>Name: {user.name}</h1>
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
      </div>
    ));

  return (
    <React.Fragment>
      <div>
        <button onClick={getUser}>Fetch Users</button>
      </div>
      <input
        type="text"
        value={name}
        placeholder="filter users by name"
        onChange={handleUsers}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {renderUsers}
      </div>
    </React.Fragment>
  );
};

export default Users;
