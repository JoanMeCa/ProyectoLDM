import React from 'react';
import Row from './Row';

interface TableProps {
  rows: any[]; // Reemplaza 'any' con el tipo de datos adecuado
}

const Table: React.FC<TableProps> = ({ rows }) => {
  return (
    <table className="table table-danger" border={3} cellPadding={5} cellSpacing={0}>
      <thead>
        <tr>
          <th><b>Producto</b></th>
          <th><b>Cantidad</b></th>
          <th><b>Precio</b></th>
          <th><b>Tienda</b></th>
          <th><b>Notas</b></th>
          <th><b>Comprado</b></th>
          <th><b>Imagen</b></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <Row key={index} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;