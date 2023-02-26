import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// layout
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth";

//pages auth
import Login from "./pages/auth/Login";

//pages admin
import Home from "./pages/admin/Home";
import Error404 from "./pages/Error404";
import Platillos from "./pages/admin/Platillos";
import Ingredientes from "./pages/admin/Ingredients";
import Consumo from "./pages/PruebasConsimoAPI";
import Rrick from "./pages/admin/Products";
import Add from "./pages/PruebasConsimoAPI";
import ProductAdd from './pages/admin/ProductAdd'

function isAuth() {
  // Comprobar si el usuario está autenticado o no (p. ej., mediante un token de autenticación en localStorage)
  return localStorage.getItem("token") !== null;
}

function PrivateRoute({ element: Component, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        isAuth() ? (
          <Component {...rest} />
        ) : (
          <Navigate to="/" replace />
        )
      }
    />
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LayoutAuth />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/admin/*" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="home" element={<PrivateRoute element={<Home />} />} />
          <Route path="platillos" element={<PrivateRoute element={<Platillos />} />} />ñ
          <Route path="ingredientes" element={<PrivateRoute element={<Ingredientes />} />} />
          <Route path="pruebas" element={<PrivateRoute element={<Consumo />} />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;