import { Navigate, Outlet } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";
import { useState } from "react";
import { useEffect } from "react";

const PrivateRouter = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setStatus(true);
        console.log(user);
      } else {
        setStatus();
      }
    });
  },[]);
  // console.log(status)
  return <> {status ? <Outlet /> : <Navigate to="/login" />}</>;
};
export default PrivateRouter;
