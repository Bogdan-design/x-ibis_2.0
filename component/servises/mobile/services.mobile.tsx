import React from 'react';
import {whatWeDoData} from "@/lid/data";
import {MobileServiceCard} from "./card/mobile.service.card";
import {monumentExtended} from "@/fonts/fonts";
import {useTranslation} from "next-i18next";
import s from './services.mobile.module.scss'

export const ServicesMobile = () => {

    const {t} = useTranslation()

    return (
        <section className={s.servicesMobile}>
            <div style={monumentExtended.style} className={s.title}>
                <div className={s.titleBg}></div>
                {t('What we do')}
            </div>
            {whatWeDoData.map((s, i) => (
                <MobileServiceCard {...s} key={i}/>
            ))}
        </section>
    );
};

