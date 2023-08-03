import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./nabvar.css"; 

export function Navigation() {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  const cerrarSesión = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoHouse = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleGoProducts = async (e) => {
    e.preventDefault();
    navigate("/casas");
  };

  const handleGoForm = async (e) => {
    e.preventDefault();
    navigate("/form");
  };

  return (
    <nav>
      <div>
        <p>
          <span>Bienvenido</span> {user.displayName}
        </p>
        <ul>
          <li>
            <button onClick={handleGoHouse}>Home</button>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={handleGoProducts}>Casas</button>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={handleGoForm}>Form</button>
          </li>
        </ul>
        <button onClick={cerrarSesión}>Cerrar Sesión</button>
      </div>
    </nav>
  );
}