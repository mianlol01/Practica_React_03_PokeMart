import React from "react";
import "../styles/Item.css";

const Item = ({ item, onClick }) => {
  const handleItemClick = () => {
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <div className="item-contenedor" onClick={handleItemClick}>
      <h2 className="item-nombre">{item.nombre}</h2>
      <p className="item-costo">Costo: {item.precio}$</p>
      <img className="item-imagen" src={item.imagen} alt={item.nombre} />
    </div>
  );
};

export default Item;
