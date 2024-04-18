import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const [showFifthCard, setShowFifthCard] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error al cargar los datos', error));

    const intervalId = setInterval(() => {
      setShowFifthCard(show => !show);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mt-5 main-container">
      <div className="row">
        {data.slice(0, 4).map(item => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card h-100 d-flex justify-content-center align-items-center">
              <img src={item.imatgeUrl} className="card-img-top" alt={item.nom} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.nom}</h5>
                <p className="card-text">
                  Status: {item.activo ? 'Activo' : 'Fallecido'}
                </p>
                <p>
                    {item.bio}
                  </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showFifthCard && (
        <div className="row mt-4 justify-content-center">
          {data.slice(4, 5).map(item => (
            <div key={item.id} className="col-md-3">
              <div className="card h-100 d-flex justify-content-center align-items-center bg-dark text-white">
                <img src={item.imatgeUrl} className="card-img-top" alt={item.nom} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.nom}</h5>
                  <p className="card-text">
                  S̶̩̘̱̄t̴̫̥͕̲̳͇̯̞͙͋̄͜ą̶̗̫͕͈̦̅̀̿̎͒͘͠ͅt̴̨͖͔͛̓̇̏̍ŭ̵̹̲̗̱͓̬̘̖͋͗́̚̕ş̸̪̰̳̜̈̀̃:̵̨̨̻̝̳̲̦̱̪͗͐̓͑̇͜ {item.activo ? 'Activo' : 'F̸͔̆̄á̵̛̩͙͉͖̻̇̿̎̃̚ļ̷̛͇͓̞̳̻̺̞̦̪̈̊̄͠͝l̴͚͛̈̊͊͛͗͋͘͠e̴̱̳̮͙̪̓͆̆̂͐͊̚͝c̶̢̢̭͕̯̳̙͖͔̤̻͑̆̇ì̷̢͈̤͚̰̬̪͙̗̅͆̊̒͐̉͑͌̉̈́̌ͅd̵̦͒̈́̈́̀̐̾̿̀͆ỏ̷̧̧̜̬͎̘̮̭̬̝̘̪̹̒̑̀́̈́̄͘͘͝'}
                  </p>
                  <p>
                    {item.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;