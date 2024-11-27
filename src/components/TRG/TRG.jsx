import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TRG.module.css';
import Clock from './Clock.jsx';
import { password as secretPassword } from '../casas/secret/Secret.jsx'; // Importar la contraseña desde Secret.jsx

function TRG() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === secretPassword) { // Verificar la contraseña importada
      setAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <div>
      {authenticated ? (
        <div className={styles.trg}>
          <div className={styles.menuWheel}>
            <Link to="/trg/taller" className={styles.menuButton}>Taller</Link>
            <Link to="/trg/casa" className={styles.menuButton}>Casa</Link>
            <Link to="/trg/conexion" className={styles.menuButton}>Conexión</Link>
            <Link to="/trg/nutricion" className={styles.menuButton}>Nutrición</Link>
            <Link to="/trg/disco" className={styles.menuButton}>Disco</Link>
            <Link to="/trg/social" className={styles.menuButton}>Social</Link>
            <Link to="/trg/secret" className={styles.menuButton}>Secret</Link>
            <Link to="/trg/plan" className={styles.menuButton}>Plan</Link>
            <Link to="/trg/productora" className={styles.menuButton}>Productora</Link>
            <Link to="/trg/evolucion" className={styles.menuButton}>Evolución</Link>
            <Link to="/trg/sueño" className={styles.menuButton}>Sueño</Link>
            <Link to="/us" className={styles.menuButton}>Us</Link>
          </div>
          <Clock />
        </div>
      ) : (
        <div className={styles.login}>
          <h2>Ingrese la contraseña para acceder</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className={styles.passwordInput}
          />
          <button onClick={handleLogin} className={styles.loginButton}>Entrar</button>
        </div>
      )}
    </div>
  );
}

export default TRG;
