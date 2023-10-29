import React from "react";
import CategoryItemMenu from "./CategoryItemMenu";
import "./Category.css";

const CategoryListContainer = ({ categorias }) => {
  return (
    <div className="CategoryListContainer">
      {categorias.map((categoria) => {
        return (
          <CategoryItemMenu key={categoria.categoriaId} categoria={categoria} />
        );
      })}
    </div>
  );
};

export default CategoryListContainer;
