import { useEffect } from "react";
import logogoogle from "../assets/logo-google.png";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import "./login.css";

export function Login() {
    const navigate = useNavigate();
    const {user, googleSignIn} = UserAuth();
    const iniciarSesion=async()=>{
        try {
          await googleSignIn();
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(()=>{
    if(user!=null){
      navigate("/")
    }
      },[user])
  return (
      <section className="panelsesion">
        <h2>Iniciar sesión</h2>

        <button onClick={iniciarSesion} className="btniniciar">
          <img src={logogoogle} alt="asd" />
          <span>Iniciar con Gmail</span>
        </button>
      </section>
  );
}
