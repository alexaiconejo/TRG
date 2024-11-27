import React, { useState } from 'react';
import styles from './Casa.module.css';

const itemsPorHabitacion = {
  Pasillo: ['Sanitarios'],
  Patio: ['Plantas', 'Espejo'],
  Cocina: ['Lámparas', 'Arreglar canilla'],
  Estudio: ['Escritorio', 'Silla', 'Andamio'],
  Cuarto: ['Colchón'],
  Cápsula: ['Perilla'],
  Baño: ['Porta papel', 'Porta toalla'],
  Escalera: ['Red'],
};

function Casa() {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (habitacion) => {
    setExpanded(expanded === habitacion ? null : habitacion);
  };

  return (
    <div>
      <h2>Casa</h2>
      <h3>Habitaciones</h3>
      <ul className={styles.habitacionesList}>
        {Object.keys(itemsPorHabitacion).map((habitacion, index) => (
          <li key={index} className={styles.habitacionItem}>
            <button 
              className={styles.toggleButton}
              onClick={() => handleToggle(habitacion)}
            >
              {habitacion}
            </button>
            {expanded === habitacion && (
              <ul className={styles.itemsList}>
                {itemsPorHabitacion[habitacion].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <h3>Impuestos</h3>
      <ul>
        {['Luz', 'Agua', 'Gas', 'Celular', 'Internet', 'ABL', 'IA', 'Monotributo'].map((impuesto, index) => (
          <li key={index}>{impuesto}</li>
        ))}
      </ul>
    </div>
  );
}

export default Casa;
