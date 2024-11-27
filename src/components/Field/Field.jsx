import React from 'react';
import Welcome from '../welcome/Welcome';
import Usuarios from '../usuarios/Usuarios';
import styles from './Field.module.css';

function Field() {
  return (
    <section className={styles.field}>
      <Welcome />
      <Usuarios />
    </section>
  );
}

export default Field;
