import { signOut } from "@firebase/auth";
import { auth , database} from "../Firebase/FirebaseModule";
import {addDoc, collection} from 'firebase/firestore'
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { FormType } from "../TypesInterfaces";

const Posteos = () => {
  const [user] = useAuthState(auth);
  const Nav = useNavigate();
  const UserLogoutGoogle = () => {
    signOut(auth);
    window.localStorage.removeItem("ID de usuario mio");
    Nav("/Login");
  };

  const RefColeccion = collection(database, "primeraColeccion")

  const { register, handleSubmit , formState: {errors}} = useForm<FormType>();


  const PostToDatabase = async (datos: FormType ) => {
    await addDoc(RefColeccion, {
      ...datos,
    })

  };

  return (
    <div>
      {user && (
        <nav className="navbar">
          <form onSubmit={handleSubmit(PostToDatabase)} className="navbar-center">
            <input
              type="text"
              placeholder="titulo tarea"
              {...register("title")}
            />
            <input
              type="datetime-local"
              placeholder="fecha y hora"
              {...register("fecha")}
            />
            <input type="submit" value="Enviar" />
          </form>
          <div className="navbar-right">
            <div className="navbar-left">
              <p>{user?.displayName || "sin nombre"}</p>
            </div>
            <button className="google" onClick={UserLogoutGoogle}>
              <FcGoogle className="iconLogout" />
              <CgLogOut className="iconLogout" />
            </button>
            <img
              className="img"
              src={user?.photoURL || "sin foto"}
              alt="Imagen pequeña"
            />
          </div>
        </nav>
      )}
      
    </div>
  );
};

export default Posteos;
