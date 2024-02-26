import React from 'react';

interface RowProps {
  row: any; // Reemplaza 'any' con el tipo de datos adecuado
}

const Row: React.FC<RowProps> = ({ row }) => {
  return (
    <tr>
      <td>{row.producto}</td>
      <td>{row.cantidad}</td>
      <td>{row.precio}</td>
      <td>{row.tienda}</td>
      <td>{row.notas}</td>
      <td>{row.comprado ? 'Comprado' : 'NO Comprado'}</td>
      <td><img src={row.imagen} alt={row.producto} style={{ width: '50px', height: '50px' }} /></td>
    </tr>
  );
};

export default Row;