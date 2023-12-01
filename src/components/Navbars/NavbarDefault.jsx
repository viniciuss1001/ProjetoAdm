import React from 'react'
import styles from './NavbarDefault.module.css'

import logo2 from '../../Assets/adm2.webp'
import { NavLink } from 'react-router-dom'

const NavbarDefault = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to='/' className={styles.link}>
                    <img src={logo2} alt="Escudo Adminitração" className={styles.logoimg} />
                    <span>2020-2022</span>
                </NavLink>
            </div>
            <div className={styles.linksContainer}>
                <NavLink to='/' className={styles.link}>Início</NavLink>


                <NavLink to='/about' className={styles.link}>Sobre</NavLink>
                <NavLink to='/creator' className={styles.link}>Desenvolvedor</NavLink>

            </div>
        </nav>
    )
}

export default NavbarDefault
