'use client'
import React from 'react';
import {Button} from "@/component/ui/button";
import s from './about.module.scss'
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";

export const About = () => {
    const {t}=useTranslation()

    return (
        <section id={'about'} className={s.about}>
            <div className={s.container}>
                <Typography className={s.title}>
                    {t('We specialize')}
                </Typography>
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
        </section>
    );
};

