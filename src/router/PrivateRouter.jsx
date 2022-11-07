import { Navigate, Outlet } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";
import { useState } from "react";

const PrivateRouter = () => {
  const [status, setStatus] = useState();

  onAuthStateChanged(auth, (user) => {
    if(user){
        setStatus(user)
    }else{
        setStatus();
    }
  });
console.log(status)
  return <> {status ? <Outlet/> : <Navigate to="/login"/>}</>;
};
export default PrivateRouter;
