import { useNavigate } from 'react-router-dom';
import users from '../../data/usuarios.json';
import styles from './Usuarios.module.css';

function Usuarios() {
  const navigate = useNavigate();

  const handleUserClick = (user) => {
    if (user.name === 'Alex' || user.name === 'Invitadxs') {
      navigate('/trg');
    }
  };

  return (
    <div className={styles.usuarios}>
      {users.map((user) => (
        <div 
          key={user.id} 
          className={styles.usuario} 
          onClick={() => handleUserClick(user)}
        >
          <div 
            className={
              user.name === 'Alex'
                ? styles.alexCircle
                : user.name === 'Invitadxs'
                ? styles.invitadxsCircle
                : styles.defaultCircle
            }
          >
            <img src={user.image} alt={user.name} className={styles.image} />
          </div>
          <p>{user.name}</p>
        </div>
      ))}
      <div className={styles.usuario}>
        <div className={styles.addUserCircle}>
          <button className={styles.addUserButton}>+</button>
        </div>
        <p>Nuevo Usuario</p>
      </div>
    </div>
  );
}

export default Usuarios;
