import React from 'react';

const Interes = ({ datos }) => {
  return (
    <div className="container text-center">
      <h2>{datos.titulo}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {datos.elementos.map((elemento, index) => (
          <div key={index} className="m-3">
            <img
              src={elemento.imagen}
              alt={elemento.nombre}
              className="img-fluid rounded"
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
            <p className="mt-2">{elemento.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interes;