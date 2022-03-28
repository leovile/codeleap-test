import { useContext } from "react";
import { UserContext } from "../context";

const useUsername = () => {
  const value = useContext(UserContext);

  return value;
};

export default useUsername;
