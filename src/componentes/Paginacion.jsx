import React from "react";
import "../styles/Paginacion.css"

const Paginacion = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-number ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      {generatePageNumbers()}
      <button
        className="pagination-button"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
