'use client'
import React from 'react';
import Logo from '@/assest/icon/logo'
import {links} from "@/lid/data";
import Link from "next/link";
import {Menu} from "@/component/menu/menu";
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {useMobileContext} from "@/context/mobile.context";
import SwiperHeader from "@/component/layout/header/swiperHeader/swiperHeader";
import s from './headerPage.module.scss'

export const HeaderPage = () => {
    const {t} = useTranslation()
    const {isMobile} = useMobileContext()

    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link href={'/'}>
                    <Logo/>
                </Link>
                {isMobile ? <SwiperHeader t={t} slice={0}/>
                    :
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
        </header>
    );
};

