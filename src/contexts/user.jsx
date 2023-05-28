import { createContext, useState } from "react";
import PropTypes from "prop-types";

const userAuth = {
  userId: "",
  name: "",
  token: "",
};

export const UserContext = createContext(userAuth);

UserAuthProvider.propTypes = {
  children: PropTypes.any,
};

export function UserAuthProvider(props) {
  const [user, setUser] = useState(userAuth);

  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
}
