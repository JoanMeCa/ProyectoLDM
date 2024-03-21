import React from 'react';
import { useParams } from 'react-router-dom';

export interface Dog {
    id: string
    url: string
    breeds: Breed[]
    width: number
    height: number
  }
  
  export interface Breed {
    weight: Weight
    height: Height
    id: number
    name: string
    bred_for: string
    breed_group: string
    life_span: string
    temperament: string
    origin: string
    reference_image_id: string
  }
  
  export interface Weight {
    imperial: string
    metric: string
  }
  
  export interface Height {
    imperial: string
    metric: string
  }

function BreedDetails() {
    const [image, setImage] = React.useState<string>("");
    const [raza, setRaza] = React.useState<Breed>();
    const queryParameters = new URLSearchParams(window.location.search)
    const raza_id = queryParameters.get("raza_id")

    React.useEffect(() => {
        fetch("https://api.thedogapi.com/v1/images/" + raza_id, {
            headers: {
                "x-api-key": "live_0R7RrdvDgWQIS9kDPlF3ALcAJH3Fdr8WubyVSg10Iuj5MIKYF89IhzDDPMoSr084",
            }
        })
        .then((response) => response.json())
        .then((data: Dog) => {
            setImage(data.url)
            setRaza(data.breeds[0])
        });
    }, []);

    return (
        <div className="container-fluid mt-5 text-light" style={{ minHeight: "100vh" }}>
            {raza && (
                <div className="row">
                    <div className="col-md-6">
                        <img src={image} alt={raza.name} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h1>{raza.name}</h1>
                        <p><strong>Bred For:</strong> {raza.bred_for}</p>
                        <p><strong>Breed Group:</strong> {raza.breed_group}</p>
                        <p><strong>Life Span:</strong> {raza.life_span}</p>
                        <p><strong>Temperament:</strong> {raza.temperament}</p>
                        <p><strong>Origin:</strong> {raza.origin}</p>
                        <p><strong>Weight:</strong> {raza.weight.imperial} (imperial) / {raza.weight.metric} (metric)</p>
                        <p><strong>Height:</strong> {raza.height.imperial} (imperial) / {raza.height.metric} (metric)</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BreedDetails;