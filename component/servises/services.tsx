'use client'
import React from 'react';
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {WeDo} from "@/component/servises/weDo/weDo";
import s from './services.module.scss'
import AuditSvg from "@/assest/icon/it.audit";
import {Typography} from "@/component/ui/typography/typography";
import clsx from "clsx";

export const Services = () => {
    const {t} = useTranslation()

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
                    title={'IT Audit'}
                    text={'We enable businesses ' +
                        'to fully grasp and enhance ' +
                        'their information systems.'}
                >
                    <AuditSvg/>
                </WeDo>
                <WeDo
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
                            <div className={classNames.left}></div>
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
                            <div className={classNames.right}></div>
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
                            <div className={classNames.left}></div>
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

