import React from 'react'
import Navbar from '../components/Navbars/Navbar'
import styles from './Home.module.css'
import NavbarFixed from '../components/Navbars/NavbarFixed'
const Home = () => {
    return (
        <div className={styles.home}>
            <Navbar />
            <h1>Projeto Adm</h1>
            <p>Uma dedicatória de uma aluno para sua amada turma</p>
        </div>
    )
}

export default Home
