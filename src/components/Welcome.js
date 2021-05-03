import React, { useContext } from "react";
import { AuthContext } from "./auth/Auth";

const Welcome = () => {
  const { currentUser } = useContext(AuthContext);
  const currentUserEmail = currentUser ? currentUser.email : "";

  return <div>{`Welcome ${currentUserEmail}`}</div>;
};

export default Welcome;
