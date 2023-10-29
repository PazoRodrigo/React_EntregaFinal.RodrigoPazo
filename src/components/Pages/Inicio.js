import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import CategoryListContainer from "../Category/CategoryListContainer";

const Inicio = () => {
  const [categorias, SetCategorias] = useState([]);

  useEffect(() => {
    //  Constante de acceso a la Base de datos
    const db = getFirestore();
    //  Hace referencia a la colección de datos (Tabla)
    const items = collection(db, "categorias");
    //  Obtiene todos los datos y los mapea
    getDocs(items).then((res) => {
      SetCategorias(res.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <>
      {categorias.length > 0 ? (
        <div className="pages">
          <CategoryListContainer
            categorias={categorias.filter((elem) => elem.impPresentacion <= 3)}
          />
          <CategoryListContainer
            categorias={categorias.filter((elem) => elem.impPresentacion > 3)}
          />
        </div>
      ) : (
        <h2>Cargando...</h2>
      )}
    </>
  );
};

export default Inicio;
