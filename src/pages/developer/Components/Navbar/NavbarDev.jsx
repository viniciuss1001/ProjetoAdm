import { NavLink } from 'react-router-dom'
import styles from './NavbarDev.module.css'
const NavbarDev = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink to='/aboutdev' className={styles.link}>Sobre</NavLink>
        <NavLink to='/skills' className={styles.link}>Skills</NavLink>
        <NavLink to='/projects' className={styles.link}>Projetos</NavLink>
        <NavLink to='/contactdev' className={styles.link}>Contato</NavLink>
      </nav>
    </div>
  )
}

export default NavbarDev
