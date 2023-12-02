import React from 'react'
import styles from './Home.module.css'
import Slider from '../components/Carousel/Carousel'
import { useAuthValue } from '../context/useAuthContext'

const Home = () => {
    const {user} = useAuthValue()

    return (
        <div className={styles.home}>
        <Slider />
            <h1>Projeto Adm</h1>
            <p>Uma dedicatória de uma aluno para sua amada turma</p>
        </div>
    )
}

export default Home
