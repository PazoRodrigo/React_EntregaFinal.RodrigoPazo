import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import CarritoItem from "./CarritoItem";

const CarritoList = ({ carritoCliente }) => {
  // Trae los productos del carrito
  const [itemsCarrito, setItemsCarrito] = useState([]);
  useEffect(() => {
    //  Constante de acceso a la Base de datos
    const db = getFirestore();
    //  Hace referencia a la colección de datos (Tabla) con query incluida
    const items = query(
      collection(db, "carritosProductos"),
      where("carritoId", "==", 1)
    );
    //  Obtiene todos los datos y los mapea
    getDocs(items).then((res) => {
      setItemsCarrito(res.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <div className="CarritoList">
        {itemsCarrito.map((item) => (
          <CarritoItem key={item.productoId} {...item} />
        ))}
      </div>
    </>
  );
};

export default CarritoList;
