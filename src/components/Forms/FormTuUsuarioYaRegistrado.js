import React from "react";

const FormTuUsuarioYaRegistrado = () => {
  return (
    <>
      <div>
        <div className="formTitulo">
          <span>Inicio</span>
        </div>
        <div className="formContenido">
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
          <button
            type="button"
            className="Btn BtnCommit"
            style={{ backgroundColor: "green" }}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default FormTuUsuarioYaRegistrado;
