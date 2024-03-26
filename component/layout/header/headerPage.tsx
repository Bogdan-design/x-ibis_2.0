'use client'
import React from 'react';
import Logo from '@/assest/icon/logo'
import {links} from "@/lid/data";
import Link from "next/link";
import {Menu} from "@/component/menu/menu";
import {useTranslation} from "next-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import {monumentExtended} from "@/fonts/fonts";
import {useMobileContext} from "@/app/context/mobile.context";
import s from './header.module.scss'

export const HeaderPage = () => {
    const {t} = useTranslation()
    const {isMobile}= useMobileContext()

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
                                    {links.map((l) => (
                                        <SwiperSlide key={l.hash}>
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
                    </Swiper> :
                    <div className={s.options}>
                        <nav>
                            <div className={s.links}>
                                {links.map((l) => (
                                    <Link style={monumentExtended.style} className={s.link} key={l.hash}
                                          href={`/${l.hash}`}>{t(l.name)}</Link>
                                ))}
                            </div>
                        </nav>
                        <Menu/>
                    </div>
                }
            </div>
                {/*<div className={s.container}>*/}
                {/*    <Link href={'/'}>*/}
                {/*        <Logo/>*/}
                {/*    </Link>*/}
                {/*    <div className={s.options}>*/}
                {/*        <nav>*/}
                {/*            <div className={s.links}>*/}
                {/*                {links.map((l) => (*/}
                {/*                    <Link className={s.link} key={l.hash} href={`/${l.hash}`}>{t(`${l.name}`)}</Link>*/}
                {/*                ))}*/}
                {/*            </div>*/}
                {/*        </nav>*/}
                {/*        <Menu/>*/}
                {/*    </div>*/}
                {/*</div>*/}
        </header>
);
};

