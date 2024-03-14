import React from 'react';
import '../index.css';
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

export default function Breeds() {
    const [razas, setRazas] = React.useState([] as Razas);
    React.useEffect(() => {
        fetch("https://api.thedogapi.com/v1/breeds", {
            headers: {
                "x-api-key": "live_0R7RrdvDgWQIS9kDPlF3ALcAJH3Fdr8WubyVSg10Iuj5MIKYF89IhzDDPMoSr084",
            }
        })
        .then((response) => response.json())
        .then((data: Razas) => {
            setRazas(data)
        });
    }, []);
    return (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {razas.map((raza, i) => (
              <div key={i} className="col">
                <div className="card border-dark text-center hover-expansion" style={{ width: '100%', height: '100%' }}>
                  <div className="card-body">
                  <img
              src={`https://api.thedogapi.com/v1/images/${raza.reference_image_id}?api_key=live_0R7RrdvDgWQIS9kDPlF3ALcAJH3Fdr8WubyVSg10Iuj5MIKYF89IhzDDPMoSr084`}
              className="card-img-top"
              alt={raza.name}
            />
                    <h5 className="card-title">{raza.name}</h5>
                    {/* Agrega más elementos según sea necesario */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };