import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutAuth from "./layouts/LayoutAuth";

//pages auth
import Login from "./pages/auth/Login";
// import LoginPrueba from "./pages/LoginPrueba"
import Register from "./pages/auth/Login";

//pages admin
import Home from "./pages/admin/Home";
import Error404 from "./pages/Error404";
import Platillos from "./pages/admin/Platillos";
import Ingredientes from "./pages/admin/Ingredients";
import Consumo from "./pages/PruebasConsimoAPI";
import Rrick from "./pages/admin/Products";
import Add from "./pages/PruebasConsimoAPI";
import ProductAdd from './pages/admin/ProductAdd'

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
        </Route>
        <Route path="/home" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="platillos" element={<ProductAdd />} />
          <Route path="ingredientes" element={<Ingredientes />} />

          <Route path="pruebas" element={<Add />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
  
  );
}
export default App;
