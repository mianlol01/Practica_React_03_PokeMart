import React, { useState, useEffect } from "react";

// Contador.js
const Contador = ({ valorInicial, onContadorChange }) => {
  return (
    <div>
      {/* Estructura del contador, sin lógica */}
      <button>-</button>
      <p>Contador aquí</p>
      <button>+</button>
    </div>
  );
};

export default Contador;