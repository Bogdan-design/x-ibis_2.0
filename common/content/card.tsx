import React from 'react';
import {pagesData} from "@/lid/data";
import {useTranslation} from "next-i18next";
import {Typography} from "@/component/ui/typography/typography";
import s from './content.module.scss'

type pageData = (typeof pagesData)[number]['options'][number] & { index: number } & { page: string }

export const Card = ({index, page}: pageData) => {
    const {t} = useTranslation()


    return (
        <div className={s.list}>
            <Typography as={'h3'}>{t(`${page}.options.${index}.title`)}</Typography>
            <Typography as={'p'} variant={'text'}>{t(`${page}.options.${index}.description`)}</Typography>
        </div>
    );
};