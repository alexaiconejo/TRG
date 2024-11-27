import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Esto asegura que se use el formato de 24 horas
        timeZone: 'America/Argentina/Buenos_Aires'
      };
      setTime(new Intl.DateTimeFormat('es-AR', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.clock}>
      {time}
    </div>
  );
}

export default Clock;
