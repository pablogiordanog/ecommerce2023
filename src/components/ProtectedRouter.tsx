import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth"
import { URL_LOGIN } from "../constants/Contants";

const ProtectedRouter = ({children}:any) =>{
  const {user} = useAuth()
  const currentLocation = useLocation()
  if(!user.name){
    return <Navigate to={URL_LOGIN} state={{from:currentLocation}} replace={true}/>
  }

  return children;
}

export default ProtectedRouter;