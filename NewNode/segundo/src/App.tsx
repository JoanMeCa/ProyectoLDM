import React from 'react';
import Table from './components/Table';
import { filas } from './lista';

const App: React.FC = () => {
  return (
    <div className='container col-8 text-center'>
      <h1>Lista de Compras</h1>
      <Table rows={filas} />
    </div>
  );
};

export default App;