import React, { useContext, useState } from "react";
import Boton from "./Boton";
import Contador from "./Contador";
import { CartContext } from "../Context/CartContext";

const ItemCount = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const [cantClicks, setCantClicks] = useState(0);
  const fnAgregar = () => {
    setCantClicks(cantClicks + 1);
  };
  const fnQuitar = () => {
    if (cantClicks > 0) {
      setCantClicks(cantClicks - 1);
    }
  };
  const fnAgregarProductoAlCarrito = () => {
    if (cantClicks > 0) {
      producto.cant = cantClicks;
      agregarProducto((oldData) => [...oldData, producto]);
    }
  };
  return (
    <>
      <div className="alineadoRow">
        <Boton texto="-" esBotonDeClic={true} manejarClic={fnQuitar}></Boton>
        <Contador valorClics={cantClicks} />
        <Boton texto="+" esBotonDeClic={true} manejarClic={fnAgregar}></Boton>
      </div>
      <button
        className="BtnAgregarAlCarro"
        onClick={() => fnAgregarProductoAlCarrito()}
      >
        Agregar al carro
      </button>
    </>
  );
};

export default ItemCount;
