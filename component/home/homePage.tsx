'use client'
import React from 'react';
import {Button} from "@/component/ui/button";
import '@/common/local/i18n'
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {Typography} from "@/component/ui/typography/typography";
import {Header} from "@/component/layout/header/header";
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
                <div style={{
                    marginTop:'120px',
                    zIndex: 0,
                    width: "249px",
                    height: "235px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <video width="850px" height="850px" autoPlay loop muted
                           style={{maxWidth: '350%', maxHeight: '350%'}}>
                        <source src="/video/backwhite.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};

