'use client'
import React from 'react';
import aws from '@/assest/icon/aws.png'
import Image from "next/image";
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import "./flickity.scss"
import s from './certification.module.scss'
import {monumentExtended} from "@/fonts/fonts";

export const Certification = () => {
    const {t}=useTranslation()

    const flickityOptions = {
        initialIndex: 2
    }

    return (
        <section className={s.certification}>
            <div className={s.container}>
                <div className={s.text}>
                    <div style={monumentExtended.style} className={s.title}>
                        {t('employees')}
                    </div>
                    <Typography variant={'text'}>
                        {t('boasts expertise')}
                    </Typography>
                </div>
                <div className={s.images}>
                    {/*<Flickity*/}
                    {/*    className={'carousel'} // default ''*/}
                    {/*    elementType={'div'} // default 'div'*/}
                    {/*    options={flickityOptions} // takes flickity options {}*/}
                    {/*    disableImagesLoaded={false} // default false*/}
                    {/*    reloadOnUpdate // default false*/}
                    {/*    static // default false*/}
                    {/*>*/}
                    {/*    <div className="carousel-cell">*/}
                    {/*        <Image src={aws} alt={'aws'}/>*/}
                    {/*    </div>*/}
                    {/*    <div className="carousel-cell">*/}

                    {/*        <Image src={aws} alt={'aws'}/>*/}
                    {/*    </div>*/}
                    {/*    <div className="carousel-cell">*/}

                    {/*        <Image src={aws} alt={'aws'}/>*/}
                    {/*    </div>*/}
                    {/*    <div className="carousel-cell">*/}

                    {/*        <Image src={aws} alt={'aws'}/>*/}
                    {/*    </div>*/}
                    {/*    /!*<Image src={aws} alt={'aws'}/>*!/*/}
                    {/*    /!*<Image src={aws} alt={'aws'}/>*!/*/}
                    {/*    /!*<Image src={aws} alt={'aws'}/>*!/*/}
                    {/*    /!*<Image src={aws} alt={'aws'}/>*!/*/}
                    {/*</Flickity>*/}
                </div>
            </div>
        </section>
    );
};

