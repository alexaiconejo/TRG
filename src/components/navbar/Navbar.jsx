import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <section className={styles.navbar}>
    <Link to='/'>
   <h1 className={styles.logo}>TRG STYSTEM</h1>
   </Link >
   <Link to='/us'>
   <h1 className={styles.us}>?</h1>
   </Link >
   </section>  
   )
}

export default Navbar
