'use client'
import React from "react";
import {PageError} from "@/common/errors/error404";
import {useTranslation} from "next-i18next";
import {landingPagesData} from "@/lid/data";
import {Heading} from "@/common/heading/heading";
import {More} from "@/component/landing/more/more";
import s from "@/common/heading/heading.module.scss";
import {Typography} from "@/component/ui/typography/typography";


function Page({params: {pages}}: { params: { pages: string } }) {

    const { t } = useTranslation();


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


    return <section >
        <Heading {...landingPagesData[dataIndex]} landing t={t} page={pages}/>
        <Typography className={s.description} variant={'text'}>{t(`${pages}.pageDescription`)}</Typography>
        <Heading {...landingPagesData[dataIndex]} landing t={t} page={pages}/>
        {/*<More dataIndex={dataIndex}  services={pages}/>*/}

        {/*<div className={s.container}>*/}
        {/*    <div className={s.titleContainer}>*/}
        {/*        <Link href={'landing/#[pages]'} className={s.link}>*/}
        {/*            <Back className={s.button}/>*/}
        {/*        </Link>*/}
        {/*        <Heading {...pagesData[dataIndex]} t={t} page={pages}/>*/}
        {/*    </div>*/}
        {/*    <div className={s.options}>*/}
        {/*        <div className={s.list}>*/}
        {/*            {pagesData[dataIndex].options.map((o, i) => (*/}
        {/*                <Card key={i} index={i} t={t} page={pages} {...o}/>*/}
        {/*            ))}*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

    </section>
}


export default Page