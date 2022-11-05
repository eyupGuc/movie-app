import { Navigate, Outlet } from "react-router"

const PrivateRouter=()=>{
const user=true;
    return (
        <> {user ? <Outlet/> :<Navigate to="/Login"/>}</>
    )
}