import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    //  Constante de acceso a la Base de datos
    const db = getFirestore();
    //  Hace referencia a la colección de datos (Tabla) con query incluida
    const items = query(collection(db, "productos"));
    //  Obtiene todos los datos y los mapea
    getDocs(items).then((res) => {
      setProductos(res.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <>
      <div className="ProductListContainer">
        {productos.length > 0 ? (
          productos.map((item) => {
            return <Product key={item.productoId} producto={item} />;
          })
        ) : (
          <h2>Cargando...</h2>
        )}
      </div>
    </>
  );
};

export default Products;
