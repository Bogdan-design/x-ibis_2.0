'use client'
import React from 'react';
import aws from '@/assest/icon/aws.png'
import synology from '@/assest/icon/synology.png'
import apple from '@/assest/icon/apple.png'
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import Carousel from "@/component/certification/carousel/carousel";
import "./flickity.scss"
import {useMobileContext} from "@/context/mobile.context";
import s from './certification.module.scss'

export const Certification = () => {
    const {t} = useTranslation()
    const {isMobile} = useMobileContext()

    interface Image {
        src: string;
        alt: string;
    }

    const images: Image[] = [
        {src: aws.src, alt: 'AWS'},
        {src: synology.src, alt: 'Synology'},
        {src: apple.src, alt: 'Apple'},
    ];


    return (
        <section className={s.certification}>
            <div className={s.container}>
                <div className={s.text}>
                    <div style={monumentExtended.style} className={s.title}>
                        {t('employees')}
                    </div>
                    <Typography style={{
                        fontSize: isMobile ? '16px' : "18px"
                    }}  variant={'text'}>
                        {t('boasts expertise')}
                    </Typography>
                </div>
                <Carousel images={images}/>
            </div>
        </section>
    );
};

