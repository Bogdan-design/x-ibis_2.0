'use client'
import React from 'react';
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {WeDo} from "@/component/servises/weDo/weDo";
import s from './services.module.scss'
import AuditSvg from "@/assest/icon/it.audit";

export const Services = () => {
    const {t} = useTranslation()

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
                <WeDo
                    title={'ENSURING RELIABILITY INFRASTRUCTURE'}
                    text={'We enable businesses ' +
                        'to fully grasp and enhance ' +
                        'their information systems.'}
                >
                    <AuditSvg/>
                </WeDo>
                <WeDo
                    right
                    className={s.weDoTitleBgRight}
                    title={'IT Administration'}
                    text={'We enable businesses ' +
                        'to fully grasp and enhance ' +
                        'their information systems.'}
                >
                    <AuditSvg/>
                </WeDo>
                <WeDo
                    title={'Modern Solutions'}
                    text={'We enable businesses ' +
                        'to fully grasp and enhance ' +
                        'their information systems.'}
                >
                    <AuditSvg/>
                </WeDo>

            </div>
        </section>
    );
};

