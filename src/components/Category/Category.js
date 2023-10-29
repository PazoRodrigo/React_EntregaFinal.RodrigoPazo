import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import { useLocation } from "react-router-dom";
import Product from "../Products/Product";

const Category = () => {
  const location = useLocation();
  const categoria = location.state.categoria;

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    //  Constante de acceso a la Base de datos
    const db = getFirestore();
    //  Hace referencia a la colección de datos (Tabla) con query incluida
    const items = query(
      collection(db, "productos"),
      where("categoryId", "==", categoria.categoriaId)
    );
    //  Obtiene todos los datos y los mapea
    getDocs(items).then((res) => {
      setProductos(res.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <div>
          {productos.map((item) => {
            return <Product key={item.productoId} producto={item} />;
          })}
        </div> */}
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

export default Category;
