'use client'
import React, {useEffect, useState} from 'react';
import Logo from '@/assest/icon/logo'
import {links} from "@/lid/data";
import Link from "next/link";
import {Menu} from "@/component/menu/menu";
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import 'swiper/css';
import s from './header.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";

export const Header = () => {
    const {t} = useTranslation()
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust threshold as needed
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // useEffect(() => {
    //     if (isMobile) {
    //         // Track the event when the screen switches to the mobile version
    //         // Example: send event to Google Analytics
    //         // Replace 'ga' with your analytics library or method
    //         // ga('send', 'event', 'Screen', 'Switched to Mobile Version');
    //         console.log('Switched to Mobile Version');
    //     }
    // }, [isMobile]);


    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link href={'/'}>
                    <Logo/>
                </Link>
                {isMobile ? <Swiper
                        spaceBetween={20}
                        slidesPerView={2.2}

                    >

                        <div className={s.options}>
                            <nav>
                                <div className={s.links}>
                                    {links.slice(1).map((l) => (
                                        <SwiperSlide key={l.hash}>
                                            <Link  style={monumentExtended.style} className={s.link}
                                                  href={`/${l.hash}`}>{t(l.name)}</Link>
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </nav>
                        <SwiperSlide style={{top: "6px"}}>
                            <div style={{display: "flex"}}>
                                <Menu/>
                            </div>
                        </SwiperSlide>
                        </div>
                    </Swiper> :
                    <div className={s.options}>
                        <nav>
                            <div className={s.links}>
                                {links.slice(1).map((l) => (
                                    <Link style={monumentExtended.style} className={s.link} key={l.hash}
                                          href={`/${l.hash}`}>{t(l.name)}</Link>
                                ))}
                            </div>
                        </nav>
                        <Menu/>
                    </div>
                }

            </div>
        </header>
    );
};

