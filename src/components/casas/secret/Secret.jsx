// Secret.jsx
import React from 'react';

const password = '123'; // Aquí se guarda la contraseña

function Secret() {
  const contraseñas = ['Correo: ********', 'Banco: ********', 'Redes Sociales: ********'];

  return (
    <div>
      <h2>Secret</h2>
      <ul>
        {contraseñas.map((password, index) => (
          <li key={index}>{password}</li>
        ))}
      </ul>
    </div>
  );
}

export { password };
export default Secret;
