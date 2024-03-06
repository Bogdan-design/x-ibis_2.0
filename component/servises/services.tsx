'use client'
import React from 'react';
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {WeDo} from "@/component/servises/weDo/weDo";
import s from './services.module.scss'
import AuditSvg from "@/assest/icon/it.audit";
import {Typography} from "@/component/ui/typography/typography";

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
                <div className={s.weDo}>
                    <div className={s.weDoContainer}>
                        <div style={monumentExtended.style} className={s.weDoTitle}>
                            <div className={s.titleBg}></div>
                            {t('ENSURING RELIABILITY INFRASTRUCTURE')}
                        </div>
                        <Typography className={s.weDoText} variant='text'>
                            text={'We enable businesses ' +
                            'to fully grasp and enhance ' +
                            'their information systems.'}
                        </Typography>
                    </div>
                    <AuditSvg/>
                </div>
                {/*<WeDo*/}
                {/*    title={'ENSURING RELIABILITY INFRASTRUCTURE'}*/}
                {/*    text={'We enable businesses ' +*/}
                {/*        'to fully grasp and enhance ' +*/}
                {/*        'their information systems.'}*/}
                {/*>*/}
                {/*    <AuditSvg/>*/}
                {/*</WeDo>*/}
                {/*<WeDo*/}
                {/*    className={s.administration}*/}
                {/*    title={'IT Administration'}*/}
                {/*    text={'We enable businesses ' +*/}
                {/*        'to fully grasp and enhance ' +*/}
                {/*        'their information systems.'}*/}
                {/*>*/}
                {/*    <AuditSvg/>*/}
                {/*</WeDo>*/}
                {/*<WeDo*/}
                {/*    title={'Modern Solutions'}*/}
                {/*    text={'We enable businesses ' +*/}
                {/*        'to fully grasp and enhance ' +*/}
                {/*        'their information systems.'}*/}
                {/*>*/}
                {/*    <AuditSvg/>*/}
                {/*</WeDo>*/}

            </div>
        </section>
    );
};

