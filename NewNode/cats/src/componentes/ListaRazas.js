// ListaRazas.js
import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListaRazas = () => {
  const [razas, setRazas] = useState([]);

  useEffect(() => {
    const fetchRazas = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds', {
          headers: {
            'x-api-key': 'live_0R7RrdvDgWQIS9kDPlF3ALcAJH3Fdr8WubyVSg10Iuj5MIKYF89IhzDDPMoSr084',
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener las razas');
        }

        const data = await response.json();
        setRazas(data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchRazas();
  }, []);

  return (
    <div>
      <h2>Lista de Razas</h2>
      {razas.map(raza => (
        <Card key={raza.id} style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Img variant="top" src={raza.imagen} />
          <Card.Body>
            <Card.Title>{raza.nombre}</Card.Title>
            <Card.Text>{raza.descripcion}</Card.Text>
            <ListGroup>
              <ListGroup.Item as={Link} to={`/razas/${raza.id}`}>Ver Detalles</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListaRazas;