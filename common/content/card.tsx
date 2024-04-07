import React from 'react';
import {pagesData} from "@/lid/data";
import {Typography} from "@/component/ui/typography/typography";
import s from './content.module.scss'

type pageData = (typeof pagesData)[number]['options'][number] & { index: number } & { page: string } & { t: (text: string) => string }

export const Card = ({index, page,t}: pageData) => {


    return (
        <div className={s.list}>
            <Typography as={'h3'}>{t(`${page}.options.${index}.title`)}</Typography>
            <Typography as={'p'} variant={'text'}>{t(`${page}.options.${index}.description`)}</Typography>
        </div>
    );
};