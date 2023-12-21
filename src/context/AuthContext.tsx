import { createContext } from "react";

const AuthContext = createContext({user:{name:"",pws:""}});

export default AuthContext;