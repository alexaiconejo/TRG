import { useEffect, useState } from 'react';
import axios from 'axios';

const Astros = () => {
  const [astroData, setAstroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/astro')  // Cambia a la URL del proxy
      .then(response => {
        setAstroData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando datos astrológicos...</p>;
  if (error) return <p>Error al cargar datos: {error.message}</p>;

  return (
    <div>
      <h1>Datos Astrológicos</h1>
      <pre>{JSON.stringify(astroData, null, 2)}</pre>
    </div>
  );
};

export default Astros;
