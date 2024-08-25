'use client'
import React from 'react';
import Nodral from '@/assest/icon/nodral'
import Image from "next/image";
import {monumentExtended} from "@/fonts/fonts";
import {useTranslation} from "next-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {useMobileContext} from "@/context/mobile.context";
import 'swiper/css';
import 'swiper/css/bundle';
import s from './clients.module.scss'
import Link from "next/link";


export const Clients = () => {

    const {t} = useTranslation()
    const {isMobile} = useMobileContext()


    return (
        <section className={s.clients}>
            <div className={s.container}>
                {isMobile && <div className={s.description}>
                    <p style={monumentExtended.style} className={s.quantity}>{t('have been')}</p>
                </div>}
                {isMobile ?

                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        navigation
                    >
                        <SwiperSlide>
                            <Link href='https://galeinvest.pl/'>
                                <Image src={'https://galeinvest.pl/wp-content/themes/newgale/images/logo.svg'}
                                       style={{backgroundColor: 'none'}} alt={'gala-invest'} width={'163'}
                                       height={'60'}/>
                            </Link>

                        </SwiperSlide>

                        <SwiperSlide>
                            <Link href='https://tinesrail.com/'>
                                <img src='/icons/tines.png'
                                     width={'203'} height={'58'} alt={'tines'}/>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href={'https://nodral.com/pl/'}>
                                <Nodral/>
                            </Link>
                        </SwiperSlide>
                    </Swiper>

                    :

                    <>
                        <div className={s.description}>
                            <p style={monumentExtended.style} className={s.quantity}>{t('have been')}</p>
                        </div>
                        <Link href='https://galeinvest.pl/'>
                            <Image src={'https://galeinvest.pl/wp-content/themes/newgale/images/logo.svg'}
                                   style={{backgroundColor: 'none'}} alt={'gala-invest'} width={'163'}
                                   height={'60'}/>
                        </Link>
                        <Link href={'https://tinesrail.com/'}>
                            <img src='/icons/tines.png'
                                 width={'203'} height={'58'} alt={'tines'}/>
                        </Link>
                        <Link href={'https://nodral.com/pl/'}>
                            <Nodral/>
                        </Link>
                    </>
                }
            </div>
        </section>
    );
};
