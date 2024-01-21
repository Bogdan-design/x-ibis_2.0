'use client'
import Back from "@/assest/icon/back";
import Link from "next/link";
import React, {useEffect, useRef} from "react";
import {pagesData} from "@/lid/data";
import {Heading} from "@/common/heading/heading";
import {Content} from "@/common/content/content";
import {PageError} from "@/common/errors/error404";
import {useScrollbar} from "@/lid/hooks/hooks";
import {useTranslation} from "next-i18next";
import {Typography} from "@/component/ui/typography/typography";
import s from './page.module.scss'



function Page({params:{services}}: { params: { services: string } }) {




    const {t,ready}=useTranslation(['common'],{ bindI18n: 'languageChanged loaded' })


    const wrapper = useRef(null)

    useScrollbar(wrapper)


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

    if(!ready)return <div>Loading...</div>



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
            <div className={s.options} ref={wrapper}>
                <div className={s.list}>
                    {pagesData[dataIndex].options.map((o, i) => (
                        <Content key={i} index={i} page={services} {...o}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
}



export default Page