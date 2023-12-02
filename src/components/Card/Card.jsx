import React from 'react'
import styles from './Card.module.css'
const Card = ({ title, text, img }) => {
    return (
        <div className={styles.card}>
            <img src={img} alt={title} className={styles.img} />
            <>
                <h1 className={styles.title}>{title}</h1>
                <p>{text}</p>
            </>
        </div>
    )
}

export default Card
