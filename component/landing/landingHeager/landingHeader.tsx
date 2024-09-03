'use client'
import React from 'react';
import {useTranslation} from "next-i18next";
import {useMobileContext} from "@/context/mobile.context";
import {Typography} from "@/component/ui/typography/typography";
import {monumentExtended} from "@/fonts/fonts";
import {Button} from "@/component/ui/button";
import landingImage from '@/assest/icon/homePageLanding.png'
import Image from "next/image";
import s from './landingHeader.module.scss'


export const LandingHeader = () => {
    const {t} = useTranslation()

    const {isMobile} = useMobileContext()



    return (
        <section id='#landing' className={s.homePage}>
            <div className={s.container}>
                <div className={s.description}>
                    <Typography as={'h1'} style={monumentExtended.style}
                                className={s.title}>{t('landingHome')}</Typography>
                    {!isMobile &&
                        <Button as={'a'} variant={'link'} href={'/#contact'}>
                            {t('Home page button')}
                        </Button>}
                </div>
                <img src={'/icons/homePageLanding.png'} width={'279'} height={'252'} alt={'landingImage'}/>
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

