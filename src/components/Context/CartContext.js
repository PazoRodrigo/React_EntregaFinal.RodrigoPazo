import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Nuestro Carrito:");
    console.log(cart);
    console.log(cart.length);
  }, [cart]);

  const eliminarProducto = (id) => {
    const nuevoCarrito = cart.filter((producto) => producto.id !== id);
    setCart(nuevoCarrito);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        productosCarrito: cart,
        agregarProducto: setCart,
        eliminarProducto,
        limpiarCarrito: clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
