import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { Inputs } from "../TypesInterfaces/TypesInterfaces";
import Loader from "../Loader/Loader";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import LoginGoogle from "./Login/LoginGoogle";
import "../Styles/index.css";
import "./Login/Styles/style.css"

const LoginComponent = ({ setUser, user }: any) => {
  

  const [firstt, setfirstt] = useState(false);

    const LogoutUser = () => {
    setUser(null);
  };

  const { handleSubmit, register } = useForm<Inputs>();
  const onsubmit = () => {

    if (user) {
      console.log(user);
    }
  };

  // console.log(watch("email"));

  return (
    <>
      {!firstt ? (
        <form onSubmit={handleSubmit(onsubmit)} action="">
          <div className="email">
            <label htmlFor="email">email</label>
            <input id="email" disabled type="text" {...register("email")} />
            <MdOutlineMarkEmailRead className="iconInput" />
          </div>

          <div className="password">
            <label htmlFor="password">password</label>
            <input id="password" disabled type="password" {...register("password")} />

            {user ? (
              <input onClick={LogoutUser} type="submit" value="Logout" />
            ) : (
              <input type="submit" value="Login" />
            )}
            <RiLockPasswordLine className="iconInput" />
          </div>

          <LoginGoogle />
        </form>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default LoginComponent;
