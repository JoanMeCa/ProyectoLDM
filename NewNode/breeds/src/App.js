import BreedDetails from './components/BreedDetails.tsx';
import Breeds from './components/Breeds.tsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS

function App() {
  return (
    <div className="bg-dark"> {/* Cambia el fondo a oscuro */}
      <Router>
        <nav className="navbar navbar-expand navbar-dark border-bottom border-2 border-success bg-primary">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Listado</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid p-0"> {/* Utiliza container-fluid para que ocupe todo el ancho */}
          <Routes>
            <Route path="/" element={<Breeds/>} />
            <Route path="/detalles" element={<BreedDetails/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;