import React from "react";
import "../LUM.css";

const FormTuUsuarioNuevaCuenta = () => {
  return (
    <>
      <div className="formContenedor">
        <div className="formTitulo">
          <span>Nueva Cuenta</span>
        </div>
        <div className="formContenido">
          <p>Nombre</p>
          <p>
            <input name="nombre" type="text" placeholder="Ingresa tu NOMBRE" />
          </p>
          <p>Correo Electrónico</p>
          <p>
            <input type="text" placeholder="Ingresa tu CORREO ELECTRONICO" />
          </p>
          <p>Contraseña</p>
          <p>
            <input type="password" placeholder="Ingresa tu Contraseña" />
          </p>
        </div>
        <div className="formBtnSubmit">
          <button type="button" className="Btn BtnCommit">
            Crear Cuenta
          </button>
        </div>
      </div>
    </>
  );
};

export default FormTuUsuarioNuevaCuenta;
