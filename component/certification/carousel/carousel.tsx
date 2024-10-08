import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {useMobileContext} from "@/context/mobile.context";
import 'flickity/css/flickity.css';
import s from './carousel.module.scss'

interface Image {
    src: string;
    alt: string;
}

interface CarouselProps {
    images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({images}) => {

    const {isMobile} = useMobileContext()


    return (
        <Swiper className={s.carousel}
                modules={[Navigation]}
                slidesPerView={isMobile ? 3 : 4}
                navigation
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className={s.carouselCell}>
                    <img
                        width={isMobile ? 69 : 138}
                        height={isMobile ? 77 : 138}
                        src={image.src} alt={image.alt}
                    />
                </SwiperSlide>
            ))}
            <SwiperSlide style={{display:'flex',alignItems:'center'}}>
                <img
                    width={isMobile ? 69 : 172}
                    height={isMobile ? 45 : 60}
                    src='/icons/apple.png'
                />
            </SwiperSlide>
            <SwiperSlide style={{display:'flex',alignItems:'center'}}>
                <img
                    width={isMobile ? 69 : 147}
                    height={isMobile ? 77 : 77}
                    src='/icons/cisco.png'
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
