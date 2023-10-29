import React, { useContext, useState } from "react";
import Boton from "./Boton";
import Contador from "./Contador";
import { CartContext } from "../Context/CartContext";
import Toast from "../Toast/Toast";

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
      //  Toast
      setIsOpen(true);
      setMensaje("Producto añadido correctamente");
      setEstado("success");
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } else {
      setIsOpen(true);
      setMensaje("La cantidad de Producto debe ser mayor a 0");
      setEstado("error");
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }
  };

  const [mensaje, setMensaje] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [estado, setEstado] = useState("");

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
      <Toast mensaje={mensaje} isOpen={isOpen} estado={estado} />
    </>
  );
};

export default ItemCount;
