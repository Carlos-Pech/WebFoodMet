// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

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
  return localStorage.getItem("token") !== null;
}

function RouteWithAuth({ element: Component, ...rest }) {
  return isAuth() ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" replace />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LayoutAuth />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/home" element={<LayoutAdmin />}>
          <Route index element={<RouteWithAuth element={Home} />} />
          <Route path="platillos" element={<RouteWithAuth element={ProductAdd} />} />
          <Route path="ingredientes" element={<RouteWithAuth element={Ingredientes} />} />
          <Route path="pruebas" element={<RouteWithAuth element={Consumo} />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;