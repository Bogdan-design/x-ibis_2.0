'use client'
import Back from "@/assest/icon/back";
import Link from "next/link";
import React from "react";
import {pagesData} from "@/lid/data";
import {Heading} from "@/common/heading/heading";
import {Card} from "@/common/content/card";
import {PageError} from "@/common/errors/error404";
import {useTranslation} from "next-i18next";
import {useEffect } from "react";
import s from './page.module.scss'


function Page({params: {services}}: { params: { services: string } }) {

    const { t,i18n } = useTranslation();



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
                <Link href={'/#[services]'} className={s.link}>
                    <Back className={s.button}/>
                </Link>
                <Heading {...pagesData[dataIndex]} t={t} page={services}/>
            </div>
            <div className={s.options}>
                <div className={s.list}>
                    {pagesData[dataIndex].options.map((o, i) => (
                        <Card key={i} index={i} t={t} page={services} {...o}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
}


export default Page