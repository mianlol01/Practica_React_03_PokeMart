import React, { useEffect, useState } from "react";
import { obtenerDatosItems } from "../funciones/arregloItems";
import Item from "./Item";
import Descripcion from "./Descripcion";
import Paginacion from "./Paginacion";
import Dinero from "./Dinero";
import Comprar from "./Comprar";
import "../styles/Tienda.css";

const Tienda = () => {
  const itemsPerPage = 5;
  const [datosItems, setDatosItems] = useState([]);
  const [descripcion, setDescripcion] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemSelected, setItemSelected] = useState(obtenerDatosItems(0));
  const [contador, setContador] = useState(1);
  const [money, setMoney] = useState(10000);
  const [total, setTotal] = useState(200);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await obtenerDatosItems();
        setDatosItems(items);
        setItemSelected(items[0]);
        setDescripcion(items.length > 0 ? items[0].descripcion : "");
      } catch (error) {
        console.error("Error al obtener datos de items:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Item seleccionado:", itemSelected);
  }, [itemSelected]);

  const handleItemClick = (clickedItem) => {
    setDescripcion(clickedItem.descripcion);
    setItemSelected(clickedItem);
    setTotal(clickedItem.precio);
    setContador(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const indexOfFirstItem = (page - 1) * itemsPerPage;
    setDescripcion(
      datosItems.length > 0 ? datosItems[indexOfFirstItem].descripcion : ""
    );
    setItemSelected(datosItems[indexOfFirstItem]);
    setContador(1);
    setTotal(datosItems.length > 0 ? datosItems[indexOfFirstItem].precio : "");
  };

  const handleIncrement = () => {
    if (contador < 99) {
      setContador(contador + 1);
      setTotal(total + itemSelected.precio);
    }
  };

  const handleDecrement = () => {
    if (contador > 1) {
      setContador(contador - 1);
      setTotal(total - itemSelected.precio);
    }
  };

  useEffect(() => {
    console.log(contador);
  }, [contador]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datosItems.slice(indexOfFirstItem, indexOfLastItem);

  function operar() {
    setMoney(money - contador * itemSelected.precio);
    setContador(1);
    setTotal(itemSelected.precio);
  }

  return (
    <div className="contenedor-tienda">
      <div className="contenedor-vendedor">
        <div className="dinero">
          <Dinero dinero={money} />
        </div>
        
<div className="controles">
          <div className="cantidad">
            <button onClick={handleDecrement}>-</button>
            <div>
              <p>{contador}</p>
            </div>
            <button onClick={handleIncrement}>+</button>
          </div>
          <div>
            <h1>Total: {total}$</h1>
          </div>
          <Comprar
            item={itemSelected}
            cantidad={contador}
            dinero={money}
            operacion={operar}
          />
        </div>
        <div className="descripcion-cont">
          <img
            className="item-imagen"
            src={itemSelected.imagen}
            alt={itemSelected.nombre}
          />
          <Descripcion texto={descripcion} />
        </div>
      </div>
      <div className="items">
        {currentItems.map((item) => (
          <Item
            key={item.nombre}
            item={item}
            onClick={() => handleItemClick(item)}
          />
        ))}
        <Paginacion
          currentPage={currentPage}
          totalPages={Math.ceil(datosItems.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Tienda;
