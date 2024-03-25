'use client'
import React from 'react';
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {WeDo} from "@/component/servises/weDo/weDo";
import {Typography} from "@/component/ui/typography/typography";
import clsx from "clsx";
import Link from "next/link";
import Animation from "@/common/animation/animation";
import {ServicesMobile} from "@/component/servises/mobile/services.mobile";
import {useMobileContext} from "@/app/context/mobile.context";
import s from './services.module.scss'

export const Services = () => {
    const {t} = useTranslation()

    const {isMobile}= useMobileContext()

    const classNames = {
        right: clsx(s.weDoTitleBg, s.right),
        left: clsx(s.weDoTitleBg, s.left),
    }

    return (
        <section>
            {isMobile ?
                <ServicesMobile/>
                :
                <div id={'services'} className={s.services}>
                    <div className={s.container}>
                        <div style={monumentExtended.style} className={s.title}>
                            <div className={s.titleBg}></div>
                            {t('What we do')}
                        </div>
                        <WeDo
                            link={'audit'}
                            title={t('audit.title')}
                            text={t('audit.description')}
                        >
                            <Animation src="/video/doc.mp4"/>
                        </WeDo>
                        <WeDo
                            link='security'
                            right
                            className={s.security}
                            title={t('security.title')}
                            text={t('security.description')}
                        >
                            <Animation src="/video/cloud.mp4"/>
                        </WeDo>
                        <div className={s.weDo}>
                            <div className={s.weDoContainer}>
                                <div style={monumentExtended.style} className={s.weDoTitle}>
                                    <Link href='ensuring' className={classNames.left}></Link>
                                    {t('ensuring.title')}
                                </div>
                                <div className={s.weDoContent}>
                                    <Typography className={s.text} variant='text'>{t('ensuring.description')}
                                    </Typography>
                                    <Animation src="/video/server.mp4"/>
                                </div>
                            </div>
                        </div>
                        <div style={{justifyContent: 'right', gap: '15px'}} className={s.weDo}>
                            <Animation src="/video/keeping.mp4"/>
                            <div style={{alignItems: 'start'}} className={s.weDoContainer}>
                                <div style={monumentExtended.style} className={s.weDoTitle}>
                                    <Link href='administration' className={classNames.right}></Link>
                                    {t('administration.title')}
                                </div>
                                <div style={{paddingLeft: '46px'}}>
                                    <Typography className={s.text} variant='text'>{t('administration.description')}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={s.weDo}>
                            <div style={{alignItems: 'start'}} className={s.weDoContainer}>
                                <div style={monumentExtended.style} className={s.weDoTitle}>
                                    <Link href='solution' className={classNames.left}></Link>
                                    {t('solution.title')}
                                </div>
                                <div style={{paddingLeft: '46px', width: '80%', justifyContent: 'space-between'}}
                                     className={s.weDoContent}>
                                    <Typography className={s.text} variant='text'>{t('solution.description')}
                                    </Typography>
                                    <div style={{
                                        zIndex: -10,
                                        width: "249px",
                                        height: "235px",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <video width="530px" height="520px" autoPlay loop muted
                                               style={{maxWidth: '240%', maxHeight: '240%'}}>
                                            <source src="/video/screen.mp4" type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

