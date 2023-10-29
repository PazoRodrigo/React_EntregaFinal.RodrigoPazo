import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartArrowDown,
  faMagnifyingGlass,
  faMarsAndVenus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navegacion, setNavegacion] = useState([]);
  useEffect(() => {
    //  Constante de acceso a la Base de datos
    const db = getFirestore();
    //  Hace referencia a la colección de datos (Tabla)
    const itemNavegacion = collection(db, "navegacion");
    //  Obtiene todos los datos y los mapea
    getDocs(itemNavegacion).then((res) => {
      // setNavegacion(res.docs.map((doc) => doc.data()));
      setNavegacion(
        "*** 3 CUOTAS SIN INTERÉS EN TODAS TUS COMPRAS | ENVÍO GRATIS A PARTIR DE $35.000 | RETIRO EN TIENDA SIN CARGO ***"
      );
    });
  }, []);

  const TieneItemsEnCarrito = () => {
    //TODO: Remplazar con longitud del carrito
    return true;
  };

  return (
    <>
      {/* <div className="cabecera">{navegacion[0].promo}</div> */}

      <div className="cabecera">{navegacion}</div>
      <div className="navBarMain">
        <div className="filtros">
          <Link to="../Pages/TuFiltro">
            <FontAwesomeIcon
              icon={faBars}
              className="iconoFiltroMenu"
              title="Filtros"
            />
          </Link>
        </div>
        <div className="empresa">
          <FontAwesomeIcon icon={faMarsAndVenus} flip className="iconoMarca" />
          <Link to="/">
            <span className="letraMarca">ContraMano</span>
          </Link>
          <FontAwesomeIcon icon={faMarsAndVenus} flip className="iconoMarca" />
        </div>
        <div className="links">
          <Link to="../Pages/TuBusqueda">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="iconoLinksMenu"
              title="Búsqueda"
            />
          </Link>
          <Link to="../Pages/TuUsuario">
            <FontAwesomeIcon
              icon={faUser}
              className="iconoLinksMenu"
              title="Tu Usuario"
            />
          </Link>
          <Link to="../Pages/TuCarrito">
            <FontAwesomeIcon
              icon={faCartArrowDown}
              className={
                TieneItemsEnCarrito()
                  ? "iconoLinkCarritoConItems"
                  : "iconoLinksMenu"
              }
              title="Tu Carrito"
            />
          </Link>
        </div>
      </div>
      <div className="navBarBotton">
        <Link to="/">
          <span className="iconoTodosMenu" title="Todas las Categorías">
            Todas las Categorías
          </span>
        </Link>
        <Link to="/Product/Products/">
          <span className="iconoTodosMenu" title="Todos los Productos">
            Todos los Productos
          </span>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
