'use client'
import React from 'react';
import {useTranslation} from "next-i18next";
import {Rectangle} from "@/component/ui/rectangle/rectangle";
import s from './services.module.scss'

export const Services = () => {
    const {t} = useTranslation()

    return (
        <section id={'services'} className={s.services}>
            <Rectangle text={t('What we do')} bgc={'orange'} side='left'/>
        </section>
    );
};

