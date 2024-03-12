// DetallesRaza.js
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const DetallesRaza = ({ match }) => {
  const [raza, setRaza] = useState(null);

  useEffect(() => {
    const fetchRazaDetails = async () => {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/breeds/${match.params.id}`, {
          headers: {
            'x-api-key': 'live_0R7RrdvDgWQIS9kDPlF3ALcAJH3Fdr8WubyVSg10Iuj5MIKYF89IhzDDPMoSr084',
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener los detalles de la raza');
        }

        const data = await response.json();
        setRaza(data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchRazaDetails();
  }, [match.params.id]);

  if (!raza) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles de la Raza</h2>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={raza.image.url} />
        <Card.Body>
          <Card.Title>{raza.name}</Card.Title>
          <Card.Text>{raza.description}</Card.Text>
          {/* Otros detalles de la raza */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetallesRaza;