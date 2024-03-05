'use client'
import React, {ReactNode} from 'react';
import {monumentExtended} from "@/fonts/fonts";
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import s from './weDo.module.scss';
import clsx from "clsx";

type PropsType = {
    right?: boolean
    title: string
    text: string
    className?: string
    children: ReactNode
}

export const WeDo = ({title, text, children,right,className}: PropsType) => {

    const {t} = useTranslation()

    const classNames = {
        root:clsx(s.weDoTitleBg,className)
    }

    return (
        <div className={s.weDo}>
            {right && children}
            <div className={s.weDoContainer}>
                <div style={monumentExtended.style} className={s.weDoTitle}>
                    <div className={classNames.root}></div>
                    {t(title)}
                </div>
                <Typography className={s.weDoText} variant='text'>
                    {text}
                </Typography>
            </div>
            {!right && children}
        </div>
    );
};

