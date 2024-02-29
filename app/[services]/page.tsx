'use client'
import Back from "@/assest/icon/back";
import Link from "next/link";
import React from "react";
import {pagesData} from "@/lid/data";
import {Heading} from "@/common/heading/heading";
import {Content} from "@/common/content/content";
import {PageError} from "@/common/errors/error404";
import {useTranslation} from "next-i18next";
import {Typography} from "@/component/ui/typography/typography";
import s from './page.module.scss'
import {Card} from "@/component/servises/card/card";


function Page({params: {services}}: { params: { services: string } }) {


    const {t} = useTranslation(['common'], {bindI18n: 'languageChanged loaded'})

    let dataIndex

    switch (services) {
        case 'audit':
            dataIndex = 0;
            break;
        case 'security':
            dataIndex = 1;
            break;
        case 'ensuring':
            dataIndex = 2;
            break;
        case 'administration':
            dataIndex = 3;
            break;
        case 'solution':
            dataIndex = 4;
            break;
        default:
            return <PageError/>
    }


    return <section className={s.main}>
        <div className={s.container}>
            <div className={s.titleContainer}>
                <Heading {...pagesData[dataIndex]} page={services}/>
                <Link href={'/#[services]'} className={s.link}>
                    <Back className={s.button}/>
                    <Typography className={s.titleLink}
                                as={'span'}
                                variant={"text"}>{t('Back to Services')}
                    </Typography>
                </Link>
            </div>
            <div className={s.options}>
                <div className={s.list}>
                    {/*{pagesData[dataIndex].options.map((o, i) => (*/}
                    {/*    // <Content key={i} index={i} page={services} {...o}/>*/}
                    {/*    // <Card key={i} title={}/>*/}
                    {/*))}*/}
                </div>
            </div>
        </div>
    </section>
}


export default Page