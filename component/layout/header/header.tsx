'use client'
import React, {Fragment} from 'react';
import Logo from '@/assest/icon/logo'
import {links} from "@/lid/data";
import Link from "next/link";
import {Menu} from "@/component/menu/menu";
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {Swiper, SwiperSlide} from "swiper/react";
import {useMobileContext} from "@/context/mobile.context";
import 'swiper/css';
import s from './header.module.scss'

export const Header = () => {
    const {t} = useTranslation()
    const {isMobile} = useMobileContext()

    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link href={'/'}>
                    <Logo/>
                </Link>
                {isMobile ?
                    <div style={{width:'100%'}}>
                        <div style={{
                            display: 'flex',
                            position: 'relative',
                            height: '40px'
                        }}>
                            <Swiper className={s.swiper}
                                    spaceBetween={20}
                                    slidesPerView={2.3}

                            >
                                <div className={s.options}>
                                    <nav>
                                        <div className={s.links}>
                                            {links.slice(1).map((l) => (
                                                <SwiperSlide style={{
                                                    border: "1px solid #E75934",
                                                    borderRadius: "200px",
                                                    padding: '6px 10px',
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }} key={l.hash}>
                                                    <Link style={monumentExtended.style} className={s.link}
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
                            </Swiper>
                        </div>
                    </div>
                    :
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

