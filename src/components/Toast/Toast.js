import React from "react";

const Toast = ({ mensaje, isOpen, estado }) => {
  // const [mensaje, setMensaje] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  // const [estado, setEstado] = useState("");

  return (
    <div style={isOpen ? styles.toastOpen : styles.toastClose}>
      <div
        style={
          estado === "error"
            ? styles.toastMessageError
            : styles.toastMessageSuccess
        }
      >
        {mensaje}
      </div>
    </div>
  );
};
const styles = {
  toastOpen: {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    background: "black",
    border: "1px black solid",
    color: "#fff",
    padding: "1rem",
    borderRadius: "0.5rem",
    zIndex: 1000,
  },
  toastClose: {
    display: "none",
  },
  toastMessageError: {
    fontSize: "1.5rem",
    background: "black",
    color: "red",
  },
  toastMessageSuccess: {
    fontSize: "1.5rem",
    background: "black",
    color: "lightgreen",
  },
};

export default Toast;
