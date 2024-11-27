import React, { useState } from 'react';
import styles from './Conexion.module.css';

const categorias = {
  Universidades: [
    { nombre: 'Universidad Nacional de Buenos Aires', telefono: '011-1234-5678' },
    { nombre: 'Universidad de Córdoba', telefono: '0351-9876-5432' },
  ],
  Financiadoras: [
    { nombre: 'Banco Nación', telefono: '011-3456-7890' },
    { nombre: 'Fondos de Inversión ABC', telefono: '011-4567-8901' },
  ],
  Festivales: [
    { nombre: 'Festival Internacional de Buenos Aires', telefono: '011-5678-1234' },
    { nombre: 'Festival de Jazz de Córdoba', telefono: '0351-6789-0123' },
  ],
  Concursos: [
    { nombre: 'Concurso Nacional de Innovación', telefono: '011-7890-1234' },
    { nombre: 'Concurso de Arte Contemporáneo', telefono: '011-8901-2345' },
  ],
  Personas: [
    { nombre: 'Juan Pérez', telefono: '123-456-789' },
    { nombre: 'María López', telefono: '987-654-321' },
  ],
  Empresas: [
    { nombre: 'Empresa XYZ', telefono: '011-2345-6789' },
    { nombre: 'Compañía ABC', telefono: '011-3456-7890' },
  ],
};

function Conexion() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria === categoriaSeleccionada ? null : categoria);
  };

  return (
    <div>
      <h2>Conexión</h2>
      <ul className={styles.categoriasList}>
        {Object.keys(categorias).map((categoria) => (
          <li key={categoria} className={styles.categoriaItem}>
            <button 
              className={styles.toggleButton}
              onClick={() => handleCategoriaChange(categoria)}
            >
              {categoria}
            </button>
            {categoriaSeleccionada === categoria && (
              <ul className={styles.contactosList}>
                {categorias[categoria].map((contacto, index) => (
                  <li key={index}>
                    {contacto.nombre} - {contacto.telefono}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Conexion;
