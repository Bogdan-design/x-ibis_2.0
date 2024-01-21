'use client'
import React from 'react';
import nodral from '@/assest/icon/nodral.png'
import times from '@/assest/icon/tines.png'
import Image from "next/image";
import s from 'component/servises/clients/clients.module.scss'
import {monumentExtended} from "@/fonts/fonts";
import {useTranslation} from "next-i18next";


export const Clients = () => {

    const {t}=useTranslation()


    return (
        <section className={s.clients}>
            <div className={s.container}>
                <div className={s.description}>
                    <p style={monumentExtended.style} className={s.quantity}>100+</p>
                    <p className={s.text}>{t('have been')}</p>
                </div>
                <Image src={'https://galeinvest.pl/wp-content/themes/newgale/images/logo.svg'} style={{backgroundColor: 'none'}} alt={'gala-invest'} width={'163'}
                       height={'60'}/>
                <Image src={times} alt={'times'} width={'126'} height={'36'}/>
                <Image src={nodral} width={'192'} height={'36'} alt={'nodral'}/>
            </div>
        </section>
    );
};
