'use client'
import React from 'react';
import {Clients} from "@/component/servises/clients/clients";
import {useTranslation} from "next-i18next";
import s from './services.module.scss'
import {Rectangle} from "@/component/ui/rectangle/rectangle";

export const Services = () => {
    const {t} = useTranslation()

    return (
        <section id={'services'} className={s.services}>
            <Clients/>
            <Rectangle text={'What we do'} bgc={'orange'} side='left'/>
            {/*<div className={s.container}>*/}
            {/*    <div className={s.description}>*/}
            {/*        <div className={s.cards}>*/}
            {/*            {whatWeDoData.map((s, i) => (*/}
            {/*                <Card key={i} {...s}/>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
};

