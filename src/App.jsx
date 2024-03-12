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
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import RutaProtegida from "./layouts/RutaProtegida.jsx";
import PanelAdministrador from "./pages/PanelAdministrador.jsx";

import { AuthProvider } from "./context/AuthProvider";
import { EcuotProvider } from "./context/EcuotProvider.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EcuotProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="noticias" element={<Noticias />} />
              <Route path="conflictos" element={<Conflictos />} />
              <Route path="intervenciones" element={<Intervenciones />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>
            <Route path="/administrar" element={<RutaProtegida />}>
              <Route index element={<PanelAdministrador />} />
            </Route>
          </Routes>
        </EcuotProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
