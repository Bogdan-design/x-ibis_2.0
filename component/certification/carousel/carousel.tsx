
import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import aws from '@/assest/icon/aws.png'
import s from './carousel.module.scss'

interface Image {
    src: string;
    alt: string;
}

interface CarouselProps {
    images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {


    return (
        <div className={s.carousel} data-flickity='{ "groupCells": true }'>
            {images.map((image, index) => (
                <div key={index} className={s.carouselCell}>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
