'use client'
import React from 'react';
import {Heading} from "@/common/heading/heading";
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import {LandingHomePageText} from "@/component/landing/texts/landingHomePageText/landingHomePageText";
import s from "./description.module.scss";

export const Description = () => {
    const {t} = useTranslation();
    return (

        <section className={s.descriptionContainer}>
            <div className={s.descriptionBox}>
                <Heading landing t={t} page={'landingMain'}/>
                <Typography className={s.description} variant={'text'}>
                    <LandingHomePageText t={t}/>
                </Typography>
            </div>
        </section>
    );
};

