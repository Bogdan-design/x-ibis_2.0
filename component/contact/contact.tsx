"use client"
import React from 'react';
import {SubmitBtm} from "@/component/contact/submitBtm";
import Call from '@/assest/icon/call'
import Location from '@/assest/icon/location'
import Sms from '@/assest/icon/sms'
import FrameContacts from '@/assest/icon/frame.contacts'
import {TextField} from "@mui/material";
import {sendEmail} from "@/actions/sendEmail";
import toast from "react-hot-toast";
import {Typography} from "@/component/ui/typography/typography";
import {BDO_Grotesk} from "@/fonts/fonts";
import {useTranslation} from "next-i18next";
import {Footer} from "@/component/footer/footer";
import Animation from "@/common/animation/animation"
import s from './contact.module.scss'
import {useMobileContext} from "@/app/context/mobile.context";

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
                                <Sms/><a href={'mailto:info@x-ibis.com'}>info@x-ibis.com</a>
                            </div>
                            <div>
                                <Call/><Typography style={{fontSize: '25px', fontWeight: '500'}} variant={'text'}>+48
                                694 670 955</Typography>
                            </div>
                            <div>
                                <Location/><Typography style={{fontSize: '25px', fontWeight: '500'}} variant={'text'}>Warsaw,
                                Poland</Typography>
                            </div>
                        </div>
                    </div>
                    <form className={s.form} action={async (formData) => {
                        const {error} = await sendEmail(formData)
                        if (error) {
                            toast.error(error)
                        }
                        return toast.success('Email send successfully')
                    }}
                    >
                        <TextField
                            name='senderNname'
                            id='text'
                            label={t('formName')}
                            type='text'
                            placeholder={t('formName')}
                            variant="standard"
                            required
                            fullWidth
                        />
                        <TextField
                            name='senderEmail'
                            id='email'
                            label={t('formEmail')}
                            type='email'
                            placeholder={t('formEmail')}
                            variant="standard"
                            required
                            fullWidth
                        />
                        <TextField name='senderPhone'

                                   id='phone'
                                   label={t('formPhone')}
                                   type='phone'
                                   placeholder={t('formPhone')}
                                   variant="standard"
                                   fullWidth
                        />
                        <TextField name='senderMessage'

                                   id='message'
                                   label={t('formMessage')}
                                   type='Message'
                                   placeholder={t('formMessage')}
                                   rows={4}
                                   variant="standard"
                                   required
                                   fullWidth
                        />
                        <SubmitBtm font={BDO_Grotesk.style} className={s.submit}/>
                    </form>
                    <div className={s.frame}>
                        <div style={{
                            width: "249px",
                            height: "235px",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <video width={isMobile ? '243x' : "530px"} height={isMobile ? '243x' : "520px"} autoPlay loop muted
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

