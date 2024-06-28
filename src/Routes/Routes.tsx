import { Route, Routes } from "react-router-dom";
import App from "../App";
import LoginComponent from "../Componentes/Login";
import Protected from "../Componentes/Protected";
import Posteos from "../Componentes/Login/YourLoginInfo";
import { useState } from "react";
import { Login } from "../TypesInterfaces";

const RoutesComponent = () => {
  const [user, setUser] = useState<Login | null>(null);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/Login"
        element={<LoginComponent setUser={setUser} user={user} />}
      />
      <Route  element={<Protected user={user}></Protected>}>
        <Route path="/About" element={<Posteos />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
