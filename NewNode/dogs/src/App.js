import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import ListaRazasPage from './pages/ListaRazasPage';
import DetallesRazaPage from './pages/DetallesRazaPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/razas/:id" component={DetallesRazaPage} />
          <Route path="/razas" component={ListaRazasPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
