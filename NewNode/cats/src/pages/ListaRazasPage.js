import React, { useState, useEffect } from 'react';
import ListaRazas from '../componentes/ListaRazas';

const ListaRazasPage = () => {
  return (
    <div>
      <h1>Explorador de Razas</h1>
      <ListaRazas />
    </div>
  );
};

export default ListaRazasPage;