import { useState } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const Nav = useNavigate();

  const [first, setfirst] = useState(false)
  const NavegarLogin = () => {
    setfirst(true);
    setTimeout(() => {

      setfirst(false);
      Nav("/Login");
    }, 1000);
  };
  return (
    <main className="Main_home">
      <nav>
        <h1>Bienvenido</h1>
        <button onClick={NavegarLogin}>Login</button>
      </nav>

      {first && <h1>Cargando...</h1>}
    </main>
  );
}

export default App;
