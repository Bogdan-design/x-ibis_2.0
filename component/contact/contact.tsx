"use client"
import React from 'react';
import Call from '@/assest/icon/call'
import Location from '@/assest/icon/location'
import Sms from '@/assest/icon/sms'
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import {Footer} from "@/component/footer/footer";
import {useMobileContext} from "@/context/mobile.context";
import {Form} from "@/component/contact/form/form";
import s from './contact.module.scss'

export const Contact = () => {


    const {t} = useTranslation()

    const {isMobile}= useMobileContext()

    return (
        <section>
            <div id={'contact'} className={s.contact}>
                <div className={s.container}>
                    <div className={s.text}>
                        <Typography className={s.title}>
                            {t('Home page button')}
                        </Typography>
                        <Typography className={s.description} variant={'text'}>
                            {t('contact text')}
                        </Typography>
                        <div className={s.ourContact}>
                            <div>
                                <Sms/><a style={{fontSize: isMobile ? '16px' : '25px', fontWeight: '500'}} href={'mailto:info@x-ibis.com'}>info@x-ibis.com</a>
                            </div>
                            <div>
                                <Call/><Typography style={{fontSize: isMobile ? '16px' : '25px', fontWeight: '500'}} variant={'text'}>+48
                                694 670 955</Typography>
                            </div>
                            <div>
                                <Location/><Typography style={{fontSize: isMobile ? '16px' : '25px', fontWeight: '500'}} variant={'text'}>Warsaw,
                                Poland</Typography>
                            </div>
                        </div>
                    </div>
                    <Form/>
                    <div className={s.frame}>
                        <div style={{
                            zIndex:0,
                            width: "249px",
                            height: "235px",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <video width={isMobile ? '243x' : "530px"} height={isMobile ? '243x' : "520px"} playsInline autoPlay loop muted
                                   style={{maxWidth: '240%', maxHeight: '240%'}}>
                                <source src="/video/contact.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

