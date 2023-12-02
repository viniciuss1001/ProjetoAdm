import React from 'react'
import Navbar from '../components/Navbars/Navbar'
import styles from './Home.module.css'
import NavbarFixed from '../components/Navbars/NavbarFixed'
import Carousel from '../components/Carousel/Carousel'
import Slider from '../components/Carousel/Carousel'
const Home = () => {
    return (
        <div className={styles.home}>
        <Slider />
            <h1>Projeto Adm</h1>
            <p>Uma dedicatória de uma aluno para sua amada turma</p>
        </div>
    )
}

export default Home
