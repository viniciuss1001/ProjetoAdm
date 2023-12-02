//slider
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css'

//component
import Card from '../Card/Card'

//style
import styles from './Carousel.module.css'
//images
import imga from './Photos/img1.jpg'
import imgb from './Photos/img2.jpg'
import imgc from './Photos/img4.jpg'
import imgd from './Photos/img5.jpg'
import imge from './Photos/img6.jpg'
import imgf from './Photos/img7.jpg'

const Slider = () => {
    return (
        <div className={styles.slidercont}>
            <Carousel fade className={styles.slider}>
                <Carousel.Item interval={3500} className={styles.card}>
                    <img
                        className={styles.img}
                        src={imga}
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3>Administração</h3>
                        <p>2020-2022</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className={styles.img}
                        src={imgb}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Administração</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className={styles.img}
                        src={imgc}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Administração</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className={styles.img}
                        src={imgd}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Administração</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className={styles.img}
                        src={imge}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Administração</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className={styles.img}
                        src={imgf}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Administração</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
