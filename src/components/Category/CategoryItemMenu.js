import React from "react";
import "./Category.css";
import "../LUM.css";
import { Link } from "react-router-dom";

const CategoryItemMenu = ({ categoria }) => {
  return (
    <>
      <Link
        className="CategoryItemMenu"
        state={{ categoria: categoria }}
        to={`/Product/ProductListContainer/${categoria.categoriaId}`}
      >
        <div className="MenuCategoriaTitulo">{categoria.titulo}</div>
        <div className="MenuCategoriaImagen">Imagen</div>
      </Link>
    </>
  );
};
export default CategoryItemMenu;
