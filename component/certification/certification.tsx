'use client'
import React from 'react';
import Cisco from "@/assest/icon/cisco";
import aws from '@/assest/icon/aws.png'
import Image from "next/image";
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import s from './certification.module.scss'

export const Certification = () => {
    const {t}=useTranslation()


    return (
        <section className={s.certification}>
            <div className={s.container}>
                <div className={s.text}>
                    <Typography>
                        {t('employees')}
                    </Typography>
                    <Typography variant={'text'}>
                        {t('boasts expertise')}
                    </Typography>
                </div>
                <div className={s.images}>
                    <Cisco/>
                    <Image src={aws} alt={'aws'}/>
                </div>
            </div>
        </section>
    );
};

