import React from 'react';
import DetallesRaza from '../componentes/DetallesRaza';

const DetallesRazaPage = ({ match }) => {
  return (
    <div>
      <h1>Explorador de Razas - Detalles de la Raza</h1>
      <DetallesRaza match={match} />
    </div>
  );
};

export default DetallesRazaPage;