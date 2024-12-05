import React from 'react';
import {whatWeDoData} from "@/lid/data";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import s from './mobile.service.card.module.scss'
import {monumentExtended} from "@/fonts/fonts";

type ProjectProps = (typeof whatWeDoData)[number]

export const MobileServiceCard = ({link,video}:ProjectProps) => {

    const {t} = useTranslation()

    const fideTitle = (link:string)=>{
        return link.split('/').join('')

    }

    return (
        <Link href={link} className={s.card}>
            <h3 style={monumentExtended.style} className={s.title}>{t(`${fideTitle(link)}.title`)}</h3>
            <p className={s.description}>{t(`${fideTitle(link)}.description`)}</p>
            <div style={{
                zIndex: -1,
                width: "249px",
                height: "235px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <video width="330px" height="320px" playsInline autoPlay loop muted
                       style={{maxWidth: '200%', maxHeight: '200%'}}>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </Link>
    );
};

