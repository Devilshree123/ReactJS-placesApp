import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "shreyas",
      image:
        "data:image/jpeg;base64,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",
      places: 3,
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
