import React from 'react';
import 'flickity/css/flickity.css';
import Image from 'next/image';
import Cisco from '@/assest/icon/cisco';
import s from './carousel.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {useMobileContext} from "@/app/context/mobile.context";

interface Image {
    src: string;
    alt: string;
}

interface CarouselProps {
    images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({images}) => {

    const {isMobile}= useMobileContext()


    return (
        <Swiper className={s.carousel}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={isMobile ? 3 : 4}
                navigation
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className={s.carouselCell}>
                    <img style={{
                        width: isMobile ? '69px' : '122px',
                        height: isMobile ? '77px' : '138px',
                    }} src={image.src} alt={image.alt}/>
                </SwiperSlide>
            ))}
            <SwiperSlide>

            <Cisco/>
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
