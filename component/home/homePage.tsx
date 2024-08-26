'use client'
import React from 'react';
import {Button} from "@/component/ui/button";
import '@/common/local/i18n'
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import {Typography} from "@/component/ui/typography/typography";
import {useMobileContext} from "@/context/mobile.context";
import {useLocalStore} from "@/store/local.store";
import {Constants} from "@/common/local/constants";
import clsx from "clsx";
import s from './homePage.module.scss'

export const HomePage = () => {
    const {t} = useTranslation()
    const local = useLocalStore(state => state.local)


    const {isMobile} = useMobileContext()

    const classNames = {
        title: clsx(s.title,local === Constants.PL ? s.titlePl : '')
    }


    return (
        <section id='home' className={s.homePage}>
            <div className={s.container}>
                <div className={s.description}>
                    <Typography variant={'title'} className={classNames.title}>{t('Home page title')}</Typography>
                    {!isMobile &&
                        <Button as={'a'} variant={'link'} href={'/#contact'}>
                            {t('Home page button')}
                        </Button>}
                </div>
                <div style={{
                    marginTop: isMobile ? '40px' : '120px',
                    zIndex: 0,
                    width: "249px",
                    height: "235px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    {isMobile ?
                        <video width="400px" height="370px" playsInline autoPlay loop muted
                               style={{maxWidth: '450%', maxHeight: '450%'}}>
                            <source src="/video/backwhite.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>

                        :
                        <video width="850px" height="850px" autoPlay loop muted
                               style={{maxWidth: '350%', maxHeight: '350%'}}>
                            <source src="/video/backwhite.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    }
                </div>
                {isMobile && <div style={{zIndex: '1'}}>

                    <Button as={'a'}
                            variant={'link'}
                            href={'/#contact'}>
                        {t('Home page button')}
                    </Button>
                </div>
                }
            </div>
        </section>
    );
};

