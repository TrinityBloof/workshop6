import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Casas } from "../pages/Casas";
import { Form } from "../pages/Form";
import { UserAuth } from "../context/AuthContext";
import { ProtectorRutas } from "../components/ProtectorRutas";

export function MyRoutes() {
    const { user } = UserAuth();
    const RequireAuth = ({children})=>{
        return user?children: <Navigate to={"/login"}/>
    }
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<RequireAuth>
            <Home/>
        </RequireAuth>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/casas" element={<ProtectorRutas><Casas/></ProtectorRutas>}/>
        <Route path="/form" element={<ProtectorRutas><Form/></ProtectorRutas>}/>
    </Routes>
    </BrowserRouter>
  );
}