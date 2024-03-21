import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export type Razas = Raza[]

export interface Raza {
  weight: Weight
  id: string
  name: string
  cfa_url?: string
  vetstreet_url?: string
  vcahospitals_url?: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  lap?: number
  alt_names?: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url?: string
  hypoallergenic: number
  reference_image_id?: string
  cat_friendly?: number
  bidability?: number
}

export interface Weight {
  imperial: string
  metric: string
}

const Breeds: React.FC = () => {
  const [razas, setRazas] = useState([] as Razas);
  const [imagenes, setImagenes] = useState({} as Record<string, string>);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": "live_0R7RrdvDgWQIS9kDPlF3ALcAJH3Fdr8WubyVSg10Iuj5MIKYF89IhzDDPMoSr084",
      }
    })
    .then((response) => response.json())
    .then((data: Razas) => {
      setRazas(data);
      const imageRequests = data.map(raza => {
        return fetch(`https://api.thedogapi.com/v1/images/${raza.reference_image_id}?api_key=live_0R7RrdvDgWQIS9kDPlF3ALcAJH3Fdr8WubyVSg10Iuj5MIKYF89IhzDDPMoSr084`)
          .then(response => response.json())
          .then(imageData => {
            return {
              [raza.id]: imageData.url
            };
          });
      });
      Promise.all(imageRequests)
        .then(imageDataArray => {
          const imageMap = Object.assign({}, ...imageDataArray);
          setImagenes(imageMap);
        });
    });
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredRazas = razas.filter(raza =>
    raza.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container-fluid mt-4 min-vh-100">
      <input
        type="text"
        placeholder="Buscar raza..."
        value={searchText}
        onChange={handleSearchChange}
        className="form-control mb-3"
      />
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {filteredRazas.map((raza, i) => (
          <div key={i} className="col">
            <div className="card border-primary text-center hover-expansion bg-info h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <Link to={`ProyectoLDM/NewNode/breeds/build/detalles?raza_id=${raza.reference_image_id}`}>
                  <img 
                    src={imagenes[raza.id]}
                    className="card-img-top"
                    alt={raza.name}
                  />
                </Link>
                <h5 className="card-title text-secondary">{raza.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breeds;