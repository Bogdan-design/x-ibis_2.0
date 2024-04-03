import React from 'react';
import 'flickity/css/flickity.css';
import Image from 'next/image';
import Cisco from '@/assest/icon/cisco';
import s from './carousel.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {useMobileContext} from "@/context/mobile.context";

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
                    <Image
                        width={isMobile ? 69 : 122}
                        height={isMobile ? 77 : 138}
                        src={image.src} alt={image.alt}
                    />
                </SwiperSlide>
            ))}
            <SwiperSlide>
                <Cisco/>
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
