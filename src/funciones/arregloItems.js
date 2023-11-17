export const obtenerDatosItem = async (id) => {
  const url = `https://pokeapi.co/api/v2/item/${id}/`;

  try {
    const respuesta = await fetch(url);
    const datosItem = await respuesta.json();

    const imagen = datosItem.sprites.default;
    const nombre = datosItem.names[5].name;
    const precio = datosItem.cost;
    const categoria = datosItem.category.name;
    const descripcion = datosItem.flavor_text_entries.find(entry => entry.language.name === 'es').text;

    return { imagen, nombre, precio, categoria, descripcion};
  } catch (error) {
    console.error(`Error al obtener datos del Item con ID ${id}: ${error}`);
    return null;
  }
};

export const obtenerDatosItems = async () => {
  const arregloIds = [
    4, 3, 2, 17, 26, 25, 24, 18, 19, 20, 21, 22, 27, 23, 28, 46, 47, 48, 49, 52,
    57, 58, 59, 60, 61, 62, 79, 76, 77,50
  ];
  const arregloItems = [];

  for (const id of arregloIds) {
    const datosItem = await obtenerDatosItem(id);

    if (datosItem) {
      arregloItems.push(datosItem);
    }
  }
  return arregloItems;
};
