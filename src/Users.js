import React from "react";
import User from "./User";

const Users = (props) => {
  const { users } = props;
  return (
    <div className="users">
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
};

export default Users;
