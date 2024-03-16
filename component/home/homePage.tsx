'use client'
import React from 'react';
import {Button} from "@/component/ui/button";
import '@/common/local/i18n'
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {Typography} from "@/component/ui/typography/typography";
import {Header} from "@/component/layout/header/header";
import gif from '@/public/video/backwhite.gif'
import HomePageSvg from '@/assest/icon/home.svg'
import s from './homePage.module.scss'

export const HomePage = () => {
    const {t} = useTranslation()

    const GifPlayer = ({ src, alt }:{src:string,alt:string}) => {
        return (
            <img src={src} alt={alt} />
        );
    };

    return (
        <section id='home' className={s.homePage}>
            <Header/>
            <div className={s.container}>
                <div className={s.description}>
                    <Typography as={'h1'} style={monumentExtended.style}
                                className={s.title}>{t('Home page title')}</Typography>
                    <Button as={'a'} variant={'link'} href={'/#contact'}>{t('Home page button')}</Button>
                </div>
                {/*<div>*/}
                {/*    <h1>Your Next.js Page</h1>*/}
                {/*    <GifPlayer src="@/public/video/backwhite.gif" alt="Your GIF"/>*/}
                {/*</div>*/}
                <HomePageSvg className={s.image}/>
            </div>
        </section>
    );
};

