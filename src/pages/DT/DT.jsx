import React, { useState } from 'react'
import styles from './DT.module.css'
import HoverCarousel from '../../components/Carousel/HoverCarousel'
import adm from '../../Assets/adm2.webp'
const DT = () => {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className={styles.section}>
      <div className={styles.home}>
        <div className={styles.text}>
            <img src={adm} alt="adm" className={styles.adm}/>
          <h3 className={styles.title}>Micael <span>Alves</span>!</h3>
          <h4 className={styles.subtitle}>Querido e eterno diretor de turma!</h4>
          <p className={styles.textt}>
            Obrigado, Micael Alves, por ter sido mais que um diretor de turma. Você foi um verdadeiro amigo e um mentor extraordinário, moldando o curso de nossas vidas de maneiras que jamais esqueceremos.
          </p>
        </div>
      </div>
      <div className={styles.carousel}>
        <h3>Fotos com a turma</h3>
        <HoverCarousel />
      </div>

    </div>
  )
}

export default DT
