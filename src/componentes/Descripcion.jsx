import React from "react";

const Descripcion = ({ texto }) => {
  return (
    <div className="descripcion-contenedor">
      <p className="descripcion-texto">{texto}</p>
    </div>
  );
};
export default Descripcion;
