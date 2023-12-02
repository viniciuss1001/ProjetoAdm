import React from 'react'
import {Link} from 'react-router-dom'
import img from '../../Assets/404.png'
import styles from './404.module.css'
import styled from 'styled-components'


const ErrorPage = () => {

    const Button = styled.button`
        font-size: 1rem;
        text-align: center;
        width: 10%;
        border: none;
        outline: none;
        cursor: pointer;
    `

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ops! Acho que nos perdemos!</h1>
            <div className={styles.home}>
                <h5 className={styles.subtitle}>Volte à página inicial e tente novamente</h5>
            <Button className={styles.btn}>
                <Link to='/' className={styles.link}>Página inicial</Link>
                <Link to='/help' className={styles.link}>Ajuda</Link>
            </Button>
            </div>
            <div className={styles.imgcont}>
                <img src={img} alt="404" className={styles.img} />
            </div>
        </div>
    )
}

export default ErrorPage
