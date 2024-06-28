import { Navigate, Outlet } from "react-router-dom";
const Protected = ({ user }:any) => {
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet/>;
};

export default Protected;
