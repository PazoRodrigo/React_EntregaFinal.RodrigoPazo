import React from "react";

const Boton = ({ texto, esBotonDeClic, manejarClic }) => {
  return (
    <button
      style={{
        backgroundColor: "blue",
        color: "white",
        borderRadius: "5px",
        padding: "10px",
        cursor: "pointer",
        border: "none",
        margin: "10px",
      }}
      className={esBotonDeClic ? "boton-sumar" : "boton-restar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
};

export default Boton;
