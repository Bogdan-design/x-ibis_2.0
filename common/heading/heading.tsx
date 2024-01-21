import React, {CSSProperties} from 'react';
import {useTranslation} from "next-i18next";
import {Typography} from "@/component/ui/typography/typography";
import s from './heading.module.scss'

type pageData = { page: string }

export const Heading = ({page}: pageData) => {
    const {t} = useTranslation()

    const theme:CSSProperties = {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
    }


    return (
        <div style={theme}>
            <Typography>{t(`${page}.pageTitle`)}</Typography>
            <Typography className={s.description} variant={'text'}>{t(`${page}.pageDescription`)}</Typography>
        </div>
    );
};
