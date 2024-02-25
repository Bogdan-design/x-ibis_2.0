'use client'
import React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import clsx from 'clsx'
import s from './rectangle.module.scss'

import {useTranslation} from "next-i18next";

type RectangleProps = {
    side: 'left' | 'right'
    size?: 'bg'
    bgc?: 'orange'
    variant?: string
    text: string
}

export const Rectangle = ({variant, bgc, side, size, text}: RectangleProps) => {
    const {t} = useTranslation()

    const classNames = {
        main: clsx(s.container, side === 'left' ? s.left : s.right),
        rectangle: clsx(s.rectangle, size === "bg" && s.bg, bgc === 'orange' && s.orange),
        text:clsx(s.title,bgc !== "orange" ? s.text : '' )
    }

    return (
        <section className={classNames.main}>
            <div className={classNames.rectangle}>
                <Typography className={s.title}>{t(text)}</Typography>
            </div>
        </section>
    );
};

