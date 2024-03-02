'use client'
import React from 'react';
import {Button} from "@/component/ui/button";
import '@/common/local/i18n'
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {Typography} from "@/component/ui/typography/typography";
import {Header} from "@/component/layout/header/header";
import HomePageSvg from '@/assest/icon/home.svg'
import s from './homePage.module.scss'

export const HomePage = () => {
    const {t} = useTranslation()

    return (
        <section id='home' className={s.homePage}>
            <Header/>
            <div className={s.container}>
                <div className={s.description}>
                    <Typography as={'h1'} style={monumentExtended.style}
                                className={s.title}>{t('Home page title')}</Typography>
                    <Button as={'a'} variant={'link'} href={'/#contact'}>{t('Home page button')}</Button>
                </div>
                <HomePageSvg className={s.image}/>
            </div>
        </section>
    );
};

