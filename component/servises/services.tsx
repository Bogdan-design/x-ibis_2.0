'use client'
import React from 'react';
import {useTranslation} from "next-i18next";
import {Rectangle} from "@/component/ui/rectangle/rectangle";
import s from './services.module.scss'
import AuditSvg from "@/assest/icon/it.audit";
import {Typography} from "@/component/ui/typography/typography";

export const Services = () => {
    const {t} = useTranslation()

    return (
        <section id={'services'} className={s.services}>
            <Rectangle text={t('What we do')} bgc={'orange'} side='left'/>
            <div className={s.audit}>
                <Rectangle text={t('What we do')} side='right'/>
                <AuditSvg className={s.image}/>
                <Typography variant='text'>We enable businesses to fully
                    grasp and enhance their
                    information systems.</Typography>
            </div>
            <div className={s.security}>
                <Rectangle text={t('What we do')} side='right'/>
                <AuditSvg className={s.image}/>
                <Typography variant='text'>We enable businesses to fully
                    grasp and enhance their
                    information systems.</Typography>
            </div>
            <div className={s.ensuring}>
                <Rectangle text={t('What we do')} side='right'/>
                <AuditSvg className={s.image}/>
                <Typography variant='text'>We enable businesses to fully
                    grasp and enhance their
                    information systems.</Typography>
            </div>
            <div className={s.administration}>
                <Rectangle text={t('What we do')} side='right'/>
                <AuditSvg className={s.image}/>
                <Typography variant='text'>We enable businesses to fully
                    grasp and enhance their
                    information systems.</Typography>
            </div>
            <div className={s.solution}>
                <Rectangle text={t('What we do')} side='right'/>
                <AuditSvg className={s.image}/>
                <Typography variant='text'>We enable businesses to fully
                    grasp and enhance their
                    information systems.</Typography>
            </div>
        </section>
    );
};

