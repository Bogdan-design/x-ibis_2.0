'use client'
import React from "react";
import {PageError} from "@/common/errors/error404";
import {useTranslation} from "next-i18next";
import {landingPagesData} from "@/lid/data";
import {Heading} from "@/common/heading/heading";
import {Typography} from "@/component/ui/typography/typography";
import {LandingCard} from "@/component/landing/landingCard/landingCard";
import {SupportText} from "@/component/landing/texts/supportText/supportText";
import Link from "next/link";
import Back from "@/assest/icon/back";
import {DevopsText} from "@/component/landing/texts/devopsText/devopsText";
import {StaffText} from "@/component/landing/texts/staffText/staffText";
import s from "./page.module.scss";


function Page({params: {pages}}: { params: { pages: string } }) {

    const {t} = useTranslation();


    let dataIndex

    switch (pages) {
        case 'build':
            dataIndex = 0;
            break;
        case 'virtual':
            dataIndex = 1;
            break;
        case 'storage':
            dataIndex = 2;
            break;
        case 'support':
            dataIndex = 3;
            break;
        case 'devops':
            dataIndex = 4;
            break;
        case 'staff':
            dataIndex = 5;
            break;
        case 'ai':
            dataIndex = 6;
            break;
        default:
            return <PageError/>
    }

    const styleForPages =
        dataIndex === 2 ? {justifyContent: 'center'} :
            dataIndex === 4 ? {justifyContent: 'center'} :
                dataIndex === 6 ? {justifyContent: 'center'} : {justifyContent: 'space-between'}


    return <section className={s.landingPage}>
        <div className={s.landingPageContainer}>
            <div className={s.titleContainer}>
                <Link href={'/landing'} className={s.link}>
                    <Back className={s.button}/>
                </Link>
                <Heading {...landingPagesData[dataIndex]} landing t={t} page={pages}/>
            </div>
            {dataIndex === 5 && <StaffText/>}
            <Typography variant={'title'} className={s.description}>
                {t(`${pages}.pageDescription`)}
            </Typography>
            {dataIndex === 4 && <Typography variant={'text'}>{t(`${pages}.pageText`)}</Typography>}
            <div style={styleForPages}
                 className={s.landingPageCardsContainer}>
                {...landingPagesData[dataIndex].options.map((o, i) => (
                    <React.Fragment key={i}>
                        <LandingCard index={i} t={t} pages={pages} {...o}/>
                    </React.Fragment>
                ))}
            </div>
            {dataIndex === 3 && <SupportText/>}
            {dataIndex === 4 && <DevopsText/>}
        </div>
    </section>
}


export default Page