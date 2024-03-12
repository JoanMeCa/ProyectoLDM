import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Restaurant from './components/Restaurant';
import Hotel from './components/Hotel';
import Interes from './components/Interes';
import Ocio from './components/Ocio';

const PuntosInteresData = {
  titulo: "Puntos de Interés",
  elementos: [
    { nombre: "Estatua de la Libertad", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg" },
    { nombre: "Torre Eiffel", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Eiffelturm.JPG/275px-Eiffelturm.JPG" },
  ],
};

const RestaurantesData = {
  titulo: "Restaurantes",
  elementos: [
    { nombre: "Bob's Burger", imagen: "https://wallpapers.com/images/hd/bob-s-burgers-background-1920-x-1080-9hpz3ggin8z6l2jl.jpg" },
    { nombre: "Gusteau's", imagen: "https://www.cronista.com/files/image/456/456497/6250a9ae6571b.jpg" },
  ],
};

const HotelesData = {
  titulo: "Hoteles",
  elementos: [
    { nombre: "Hazbin Hotel", imagen: "https://blenderartists.org/uploads/default/original/4X/e/1/e/e1ee454e28fe6010f19d0a42dcd744f74df2c53f.jpeg" },
    { nombre: "Hotel TRANSylvania", imagen: "https://i.pinimg.com/originals/88/a9/8c/88a98ce61ce7f5e6b750c263453c78ec.jpg" },
  ],
};

const ActividadesData = {
  titulo: "Actividades al Aire Libre",
  elementos: [

    { nombre: "Bailar", imagen: "https://media2.giphy.com/media/QuxqWk7m9ffxyfoa0a/giphy.gif?cid=6c09b9520atxroe1n6jhro34h9vc3oemumcnpicmvolve3tq&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" },
    { nombre: "Bailar", imagen: "https://media1.tenor.com/m/Tr4svi_j4zEAAAAC/skeleton-dancing.gif" },
    { nombre: "Bailar", imagen: "https://i.makeagif.com/media/3-28-2020/X_wPrO.gif" },
    { nombre: "Bailar", imagen: "https://media1.tenor.com/m/Tr4svi_j4zEAAAAC/skeleton-dancing.gif" },
    { nombre: "Bailar", imagen: "https://media2.giphy.com/media/QuxqWk7m9ffxyfoa0a/giphy.gif?cid=6c09b9520atxroe1n6jhro34h9vc3oemumcnpicmvolve3tq&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" },
    { nombre: "Bailar", imagen: "https://i.pinimg.com/originals/6e/e2/3d/6ee23da15b437dd6cc229c45a73afb9d.gif" },
    { nombre: "Bailar", imagen: "https://media1.tenor.com/m/Tr4svi_j4zEAAAAC/skeleton-dancing.gif" },
    { nombre: "💀", imagen: "https://imgflip.com/s/meme/Waiting-Skeleton.jpg" },
    { nombre: "Bailar", imagen: "https://media1.tenor.com/m/Tr4svi_j4zEAAAAC/skeleton-dancing.gif" },
    { nombre: "Bailar", imagen: "https://i.pinimg.com/originals/6e/e2/3d/6ee23da15b437dd6cc229c45a73afb9d.gif" },
    
  ],
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="ProyectoLDM/NewNode/tour/build/" element={<Inicio />} />
        <Route path="/puntos-interes" element={<Interes datos={PuntosInteresData} />} />
        <Route path="/restaurantes" element={<Restaurant datos={RestaurantesData} />} />
        <Route path="/hoteles" element={<Hotel datos={HotelesData} />} />
        <Route path="/actividades" element={<Ocio datos={ActividadesData} />} />
      </Routes>
    </Router>
  );
}

export default App;