'use client'
import React from 'react';
import {whatWeDoData} from "@/lid/data";
import {Card} from "@/component/servises/card/card";
import {Clients} from "@/component/servises/clients/clients";
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import s from './services.module.scss'

export const Services = () => {
    const {t}=useTranslation()

    return (
        <section id={'services'} className={s.services}>
            <Clients/>
            <div className={s.container}>
                <div className={s.description}>
                    <Typography>{t('What we do')}</Typography>
                    <div className={s.cards}>
                        {whatWeDoData.map((s, i) => (
                                <Card key={i} {...s}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

