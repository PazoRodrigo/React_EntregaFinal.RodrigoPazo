import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TuFiltro from "./components/Pages/TuFiltro";
import TuBusqueda from "./components/Pages/TuBusqueda";
import TuUsuario from "./components/Pages/TuUsuario";
import TuCarrito from "./components/Pages/TuCarrito";
import Inicio from "./components/Pages/Inicio";
import Category from "./components/Category/Category";
import { CarritoProvider } from "./components/Context/CartContext";
import ProductListContainer from "./components/Products/ProductListContainer";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CarritoProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Pages/TuFiltro" element={<TuFiltro />} />
            <Route path="/Pages/TuBusqueda" element={<TuBusqueda />} />
            <Route path="/Pages/TuUsuario" element={<TuUsuario />} />
            <Route path="/Pages/TuCarrito" element={<TuCarrito />} />
            <Route
              path="/Category/Category/:categoryId"
              element={<Category />}
            />
            <Route
              path="/Product/ProductListContainer/:categoryId"
              element={<ProductListContainer />}
            />
            <Route path="/Product/Products/" element={<Products />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
