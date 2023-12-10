import React from 'react'
import HoverCarousel from 'hover-carousel'
import img1 from './Photos/img1.jpg'
import img2 from './Photos/img2.jpg'
import img4 from './Photos/img4.jpg'
import img5 from './Photos/img5.jpg'
import img6 from './Photos/img6.jpg'
import img7 from './Photos/img7.jpg'
const HoverCarousell = () => {
    const images = [
        img1, img2,img4,img5, img6, img7
    ]
    return (
        <div>
            <HoverCarousel images={images} />
        </div>
    )
}

export default HoverCarousell
