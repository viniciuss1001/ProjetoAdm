import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './NavbarFixed.module.css'
//variação da navbar
const navVariants = {
    initial: {
        y: -50,
        x: "-50%",
        opacity: 0,
    },
    animate: {
        y: 0,
        x: "-50%",
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        y: -50,
        opacity: 0,
    },
};


const NavbarFixed = () => {
    return (
        <>
            <motion.div
                initial='initial'
                animate='animate'
                exit='exit'
                variants={navVariants}
                className={styles.fixed}
            >
                <Link to='/' className={styles.link}>Início</Link>
                <Link to='/about' className={styles.link}>Sobre</Link>
                <Link to='/dev' className={styles.link}>Desenvolvedor</Link>
                <button>Login</button>
            </motion.div>

        </>
    )
}

export default NavbarFixed
