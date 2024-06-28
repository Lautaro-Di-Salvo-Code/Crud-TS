import { signOut } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import { auth } from "../../Firebase/FirebaseModule";
import Form from "../ReadTasks/FormCrud/Form";

const Posteos = () => {
  const [user] = useAuthState(auth);

  const Nav = useNavigate();

  const UserLogoutGoogle = () => {
    signOut(auth);
    window.localStorage.removeItem("ID de usuario mio");
    Nav("/Login");
  };

  return (
    <div>
      {user && (
        <nav className="navbar">
          <div className="navbar-right">
            <div className="navbar-left">
              <img
                className="img"
                src={user?.photoURL || "sin foto"}
                alt="Imagen pequeña"
              />
              <p>{user?.displayName || "sin nombre"}</p>
              <button className="google" onClick={UserLogoutGoogle}>
                <FcGoogle className="iconLogout" />
                <CgLogOut className="iconLogout" />
              </button>
            </div>
          </div>
        </nav>
      )}

      <Form />
    </div>
  );
};

export default Posteos;
