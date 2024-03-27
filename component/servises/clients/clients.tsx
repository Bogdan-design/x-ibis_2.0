'use client'
import React from 'react';
import nodral from '@/assest/icon/nodral.png'
import times from '@/assest/icon/tines.png'
import Image from "next/image";
import {monumentExtended} from "@/fonts/fonts";
import {useTranslation} from "next-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {useMobileContext} from "@/context/mobile.context";
import 'swiper/css';
import 'swiper/css/bundle';
import s from './clients.module.scss'


export const Clients = () => {

    const {t} = useTranslation()
   const {isMobile}= useMobileContext()


    return (
        <section className={s.clients}>
            <div className={s.container}>
                {isMobile ?
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        navigation
                    >
                        <SwiperSlide>
                            <div className={s.description}>
                                <p style={monumentExtended.style} className={s.quantity}>20+</p>
                                <p className={s.text}>{t('have been')}</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={'https://galeinvest.pl/wp-content/themes/newgale/images/logo.svg'}
                                   style={{backgroundColor: 'none'}} alt={'gala-invest'} width={'163'}
                                   height={'60'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={times} alt={'times'} width={'126'} height={'36'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={nodral} width={'192'} height={'36'} alt={'nodral'}/>
                        </SwiperSlide>
                    </Swiper>
                    :

                    <>
                        <div className={s.description}>
                            <p style={monumentExtended.style} className={s.quantity}>20+</p>
                            <p className={s.text}>{t('have been')}</p>
                        </div>
                        <Image src={'https://galeinvest.pl/wp-content/themes/newgale/images/logo.svg'}
                               style={{backgroundColor: 'none'}} alt={'gala-invest'} width={'163'}
                               height={'60'}/>
                        <Image src={times} alt={'times'} width={'126'} height={'36'}/>
                        <Image src={nodral} width={'192'} height={'36'} alt={'nodral'}/>
                    </>
                }
            </div>
        </section>
    );
};
