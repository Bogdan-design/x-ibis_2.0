'use client'
import React from "react";
import {PageError} from "@/common/errors/error404";
import {useTranslation} from "next-i18next";
import {landingPagesData} from "@/lid/data";
import {Heading} from "@/common/heading/heading";
import {Typography} from "@/component/ui/typography/typography";
import {LandingCard} from "@/component/landing/landingCard/landingCard";
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


    return <section className={s.landingPage}>
        <div className={s.landingPageContainer}>
            <Heading {...landingPagesData[dataIndex]} landing t={t} page={pages}/>
            <Typography className={s.description}>{landingPagesData[dataIndex]['pageDescription']}</Typography>
            <div style={dataIndex === 2 && 4 ? {justifyContent:'center'} : {justifyContent:'space-between'} } className={s.landingPageCardsContainer}>

                    {...landingPagesData[dataIndex].options.map((o, i) => (
                        <React.Fragment key={i}>
                            <LandingCard {...o}/>
                        </React.Fragment>
                    ))}


            </div>
        </div>
    </section>
}


export default Page