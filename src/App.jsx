import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import OlvidePassword from "./pages/OlvidePassword";
import NuevoPassword from "./pages/NuevoPassword";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import Noticias from "./pages/Noticias";
import Conflictos from "./pages/Conflictos";
import Intervenciones from "./pages/Intervenciones";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Area publica */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="olvide-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="conflictos" element={<Conflictos />} />
          <Route path="intervenciones" element={<Intervenciones />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
