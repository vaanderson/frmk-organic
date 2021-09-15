import { createContext } from "react";

const UserLoggedContext = createContext([[], () => {}]);
 
export default UserLoggedContext;
