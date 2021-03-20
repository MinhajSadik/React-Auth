const { createContext } = require("react");

const UserContext = createContext();
export const UserProvider = UserContext.Provider;

export default UserContext;