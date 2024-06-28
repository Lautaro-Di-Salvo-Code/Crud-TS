import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../Firebase/FirebaseModule";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const LoginGoogle = () => {
  const Nav = useNavigate();

  const LoginGoogle = async () => {
    const res = await signInWithPopup(auth, provider);
    console.log(res.user.uid);
    window.localStorage.setItem("ID de usuario mio", res.user.uid);
    Nav("/About");
  };

  return (
    <>
      <button className="google" onClick={LoginGoogle}>
        Iniciar Secion
        <FcGoogle className="icon" />
      </button>
    </>
  );
};

export default LoginGoogle;
