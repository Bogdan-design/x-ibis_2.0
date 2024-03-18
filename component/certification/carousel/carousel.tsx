import React from 'react';
import 'flickity/css/flickity.css';
import Image from 'next/image';
import Cisco from '@/assest/icon/cisco';
import s from './carousel.module.scss'

interface Image {
    src: string;
    alt: string;
}

interface CarouselProps {
    images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({images}) => {


    return (
        <div className={s.carousel} data-flickity='{ "groupCells": true }'>
            {images.map((image, index) => (
                <div key={index} className={s.carouselCell}>
                    <img src={image.src} alt={image.alt}/>
                </div>
            ))}
            <Cisco/>
        </div>
    );
};

export default Carousel;
