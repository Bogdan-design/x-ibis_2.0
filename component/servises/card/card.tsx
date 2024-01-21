'use client'
import React from 'react';
import {whatWeDoData} from "@/lid/data";
import Link from "next/link";
import s from './card.module.scss'
import {useTranslation} from "next-i18next";

type ProjectProps = (typeof whatWeDoData)[number]

export const Card = ({icon,link}:ProjectProps) => {

    const {t}=useTranslation()


    const fideTitle = (link:string)=>{
        return link.split('/').join('')

    }

    return (
        <Link href={link} className={s.card}>
            {icon}
            <h3 className={s.title}>{t(`${fideTitle(link)}.title`)}</h3>
            <p className={s.description}>{t(`${fideTitle(link)}.description`)}</p>
        </Link>

    )
};

