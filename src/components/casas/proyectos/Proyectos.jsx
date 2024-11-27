import React from 'react';

function Proyectos() {
  const proyectos = ['Websites', 'Música', 'Juegos', 'Multimedia', 'Arte', 'Escultura', 'Textos', 'Perfo'];

  return (
    <div>
      <h2>Productora</h2>

      <ul>
        {proyectos.map((proyecto, index) => (
          <li key={index}>{proyecto}</li>
        ))}
      </ul>
    </div>
  );
}

export default Proyectos;
