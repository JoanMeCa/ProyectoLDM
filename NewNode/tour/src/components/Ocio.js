import React, { useState, useEffect } from 'react';

const Ocio = ({ datos }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Estado para el color de fondo

  useEffect(() => {
    // Cambiar el color de fondo cada 5 segundos (5000 milisegundos)
    const intervalId = setInterval(() => {
      setBackgroundColor(generarColorAleatorio());
    }, 100);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El efecto solo se ejecuta una vez al montar el componente

  // Función para generar un color hexadecimal aleatorio
  const generarColorAleatorio = () => {
    const letrasHex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letrasHex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="container text-center" style={{ backgroundColor }}>
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

export default Ocio;