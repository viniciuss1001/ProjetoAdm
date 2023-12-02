import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Assets/404.png'
import styles from './404.module.css'
import { FaChevronRight } from 'react-icons/fa'

const ErrorPage = () => {


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ops! Acho que nos perdemos!</h1>
            <h5 className={styles.subtitle}>Volte à página inicial e tente novamente</h5>
            <div className={styles.home}>
                <Link to='/' className={styles.link}>
                    Página inicial <FaChevronRight />
                    </Link>
                <Link to='/help' className={styles.link}>Ajuda</Link>
            </div>
            <div className={styles.imgcont}>
                <img src={img} alt="404" className={styles.img} />
            </div>
        </div>
    )
}

export default ErrorPage
