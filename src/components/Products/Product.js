import React from "react";
// import React, { useContext, useState } from "react";
// import { CartContext } from "../Context/CartContext";
// import Contador from "./Contador";
// import Boton from "./Boton";
import "./Products.css";
import "../LUM.css";
import ItemCount from "./ItemCount";

const Product = ({ producto }) => {
  return (
    <>
      <div className="alineadoColumn ProductItemMenu">
        <h2>{producto.titulo}</h2>
        <div>Imagen{producto.imagen}</div>
        <h4>Valor $ {producto.precio}</h4>
        <ItemCount producto={producto} />
      </div>
    </>
  );
};

export default Product;
