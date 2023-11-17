import React from "react";

const Comprar = ({ item, cantidad, dinero, operacion }) => {
  const comprar = () => {
    const total = item.precio * cantidad;
    if (dinero >= total) {
      alert("Ha comprado: " + cantidad + " " + item.nombre + " por " + total + "₽");
      operacion();
    }
    else{
        alert("No cuentas con el suficiente dinero")
    } 
  };

  return (
    <div>
      <button className="comprar" onClick={comprar}>Comprar</button>
    </div>
  );
};

export default Comprar;
