'use client'
import React from 'react';
import aws from '@/assest/icon/aws.png'
import synology from '@/assest/icon/synology.png'
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import Carousel from "@/component/certification/carousel/carousel";
import "./flickity.scss"
import s from './certification.module.scss'

export const Certification = () => {
    const {t} = useTranslation()

    interface Image {
        src: string;
        alt: string;
    }

    const images: Image[] = [
        {src: aws.src, alt: 'AWS'},
        {src: synology.src, alt: 'Synology'},
    ];


    return (
        <section className={s.certification}>
            <div className={s.container}>
                <div className={s.text}>
                    <div style={monumentExtended.style} className={s.title}>
                        {t('employees')}
                    </div>
                </div>
                <Carousel images={images}/>
            </div>
        </section>
    );
};

