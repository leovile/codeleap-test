import React, { createContext, useState } from "react";

export const UserContext = createContext();

const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState();
  const [posts, setPosts] = useState();

  const dataValues = {
    username,
    setUsername,
    posts,
    setPosts,
  };

  return <Provider value={dataValues}>{children}</Provider>;
};

export default UserProvider;
