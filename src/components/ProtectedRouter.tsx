import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth"
import { URL_HOME } from "../constants/Contants";

const ProtectedRouter = ({children}:any) =>{
  const {user} = useAuth()
  const currentLocation = useLocation()
  console.log(user);
  if(!user.name){
    console.log("Entro a Navigate");
    return <Navigate to={URL_HOME} state={{from:currentLocation}} replace/>
  }

  return children;
}

export default ProtectedRouter;