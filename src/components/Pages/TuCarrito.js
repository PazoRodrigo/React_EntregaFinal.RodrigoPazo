import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./Pages.css";
import CarritoList from "../Carrito/CarritoList";

const TuCarrito = () => {
  const [carritosCliente, setCarritosCliente] = useState([]);

  useEffect(() => {
    //  Constante de acceso a la Base de datos
    const db = getFirestore();
    //  Hace referencia a la colección de datos (Tabla) con query incluida
    const items = query(
      collection(db, "carritos"),
      where("clienteId", "==", 1)
    );
    // const items = collection(db, "carritos");
    //  Obtiene todos los datos y los mapea
    getDocs(items).then((res) => {
      setCarritosCliente(res.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <div className="tuCarritoForm">
        <CarritoList carritoCliente={carritosCliente[0]} />
      </div>
      <div className="tuCarritoFormCerrar">
        <button
          type="button"
          className="Btn"
          style={{ backgroundColor: "red" }}
        >
          Limpiar Carrito
        </button>
        {/* </div>
      <div className="tuCarritoFormCerrar"> */}
        <button
          type="button"
          className="Btn BtnCommit"
          style={{ backgroundColor: "green" }}
        >
          Comprar
        </button>
      </div>
    </>
  );
};

export default TuCarrito;
