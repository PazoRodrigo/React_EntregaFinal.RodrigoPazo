import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./Carrito.css";

const CarritoItem = (props) => {
  // Trae todos los productos de la base de datos
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    //  Constante de acceso a la Base de datos
    const db = getFirestore();
    //  Hace referencia a la colección de datos (Tabla) con query incluida
    const items = query(
      collection(db, "productos"),
      where("productoId", "==", props.productoId)
    );

    //  Obtiene todos los datos y los mapea
    getDocs(items).then((res) => {
      setProducto(res.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <>
      {console.log(props)}
      {console.log(producto)}
      <div className="CarritoItem">
        <span>{props.productoId}</span>
        {/* <span>{producto[0].titulo}</span> */}
        <span>{props.talla}</span>
        <span>{props.productoCant}</span>
      </div>
    </>
  );
};

export default CarritoItem;
