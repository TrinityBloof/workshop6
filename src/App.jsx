import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import { MyRoutes } from "./routers/Routes";

function App() {
  return (
    <AuthContextProvider>
        <MyRoutes />
    </AuthContextProvider>
  );
}

export default App;
