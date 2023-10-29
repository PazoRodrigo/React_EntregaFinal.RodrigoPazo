import React from "react";
import "./Pages.css";
import FormTuUsuarioYaRegistrado from "../Forms/FormTuUsuarioYaRegistrado";
import FormTuUsuarioNuevaCuenta from "../Forms/FormTuUsuarioNuevaCuenta";

const TuUsuario = () => {
  return (
    <>
      <div className="tuUsuarioForm">
        <div className="contenedortuUsuarioForm" id="YaRegistrado">
          <FormTuUsuarioYaRegistrado />
        </div>
        <div className="contenedortuUsuarioForm" id="NuevaCuenta">
          <FormTuUsuarioNuevaCuenta />
        </div>
      </div>
    </>
  );
};

export default TuUsuario;
