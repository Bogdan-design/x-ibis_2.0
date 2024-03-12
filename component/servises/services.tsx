'use client'
import React from 'react';
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {WeDo} from "@/component/servises/weDo/weDo";
import AuditSvg from "@/assest/icon/it.audit";
import {Typography} from "@/component/ui/typography/typography";
import clsx from "clsx";
import s from './services.module.scss'
import Link from "next/link";

export const Services = () => {
    const {t} = useTranslation()

    const linkToService =(link:string)=>{
        return link.split('/').join('')
    }

    const classNames = {
        right: clsx(s.weDoTitleBg, s.right),
        left: clsx(s.weDoTitleBg, s.left),
    }

    return (
        <section id={'services'} className={s.services}>
            <div className={s.container}>
                <div style={monumentExtended.style} className={s.title}>
                    <div className={s.titleBg}></div>
                    {t('What we do')}
                </div>
                <WeDo
                    link={'audit'}
                    title={'IT Audit'}
                    text={'We enable businesses ' +
                        'to fully grasp and enhance ' +
                        'their information systems.'}
                >
                    <AuditSvg/>
                </WeDo>
                <WeDo
                    link='security'
                    right
                    className={s.security}
                    title={'Security'}
                    text={'We enable businesses ' +
                        'to fully grasp and enhance ' +
                        'their information systems.'}
                >
                    <AuditSvg/>
                </WeDo>
                <div className={s.weDo}>
                    <div className={s.weDoContainer}>
                        <div style={monumentExtended.style} className={s.weDoTitle}>
                            <Link href='ensuring' className={classNames.left}></Link>
                            {t('ENSURING RELIABILITY INFRASTRUCTURE')}
                        </div>
                        <div className={s.weDoContent}>
                            <Typography className={s.text} variant='text'>We enable businesses
                                to fully grasp and enhance their information systems.
                            </Typography>
                            <AuditSvg/>
                        </div>
                    </div>
                </div>
                <div style={{justifyContent: 'right', gap: '15px'}} className={s.weDo}>
                    <AuditSvg/>
                    <div style={{alignItems: 'start'}} className={s.weDoContainer}>
                        <div style={monumentExtended.style} className={s.weDoTitle}>
                            <Link href='administration' className={classNames.right}></Link>
                            {t('IT Administration')}
                        </div>
                        <div style={{paddingLeft: '46px'}}>
                            <Typography className={s.text} variant='text'>We enable businesses
                                to fully grasp and enhance their information systems.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className={s.weDo}>
                    <div style={{alignItems:'start'}} className={s.weDoContainer}>
                        <div style={monumentExtended.style} className={s.weDoTitle}>
                            <Link href='solution' className={classNames.left}></Link>
                            {t('Modern Solutions')}
                        </div>
                        <div style={{paddingLeft: '46px',width:'100%',justifyContent:'space-between'}} className={s.weDoContent}>
                            <Typography className={s.text} variant='text'>We enable businesses
                                to fully grasp and enhance their information systems.
                            </Typography>
                            <AuditSvg/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

