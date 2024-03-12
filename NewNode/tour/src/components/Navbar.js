import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand ml-3" to="ProyectoLDM/NewNode/tour/build/">Guía Turística</Link> {/* Añadida la clase ml-3 aquí */}
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="ProyectoLDM/NewNode/tour/build/puntos-interes">Puntos de Interés</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="ProyectoLDM/NewNode/tour/build/restaurantes">Restaurantes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="ProyectoLDM/NewNode/tour/build/hoteles">Hoteles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="ProyectoLDM/NewNode/tour/build/actividades">Actividades (Epilepsy Warning!)</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;