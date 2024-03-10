'use client'
import React from 'react';
import {Button} from "@/component/ui/button";
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import Rocket from "@/assest/icon/rocket";
import {monumentExtended} from "@/fonts/fonts";
import s from './about.module.scss'

export const About = () => {
    const {t} = useTranslation()

    return (
        <section id={'about'} className={s.about}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.rocket}>
                        <div style={monumentExtended.style} className={s.aboutTitle}>
                            <div className={s.aboutTitleBg}></div>
                            {t('We specialize')}
                        </div>
                        <Rocket/>
                    </div>
                    <div className={s.description}>
                        <h3 className={s.titleDescription}>
                            {t('Our mission')}
                        </h3>
                        <div className={s.text}>
                            <Typography variant={"text"}>
                                {t('experienced')}
                            </Typography>
                            <Typography variant={'text'}>
                                {t('collaborate')}
                            </Typography>
                            <Typography variant={'text'}>
                                {t('Our team')}
                            </Typography>
                        </div>
                        <Button as={'a'} href={'#contact'}>{t('Home page button')}</Button>
                    </div>
                </div>
                <video width="640" height="360" controls>
                    <source src="" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

