import React from 'react';
import {useTranslation} from "next-i18next";
import {Typography} from "@/component/ui/typography/typography";
import {monumentExtended} from "@/fonts/fonts";
import s from './heading.module.scss'

type pageData = { page: string }

export const Heading = ({page}: pageData) => {
    const {t} = useTranslation()


    return (
        <div className={s.heading}>
            <div style={monumentExtended.style} className={s.title}>
                <div className={s.titleBg}></div>
                {t(`${page}.pageTitle`)}
            </div>
            <Typography className={s.description} variant={'text'}>{t(`${page}.pageDescription`)}</Typography>
        </div>
    );
};
