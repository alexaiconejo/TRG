import React from 'react';

function Social() {
  const eventos = ['Concierto', 'Reunión con amigos', 'Cumpleaños', 'Evento de trabajo'];

  return (
    <div>
      <h2>Social</h2>
      <ul>
        {eventos.map((evento, index) => (
          <li key={index}>{evento}</li>
        ))}
      </ul>
    </div>
  );
}

export default Social;
