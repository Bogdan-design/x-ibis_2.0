'use client'
import React, {ReactNode} from 'react';
import {monumentExtended} from "@/fonts/fonts";
import {Typography} from "@/component/ui/typography/typography";
import clsx from "clsx";
import Link from "next/link";
import s from './weDo.module.scss';

type PropsType = {
    right?: boolean
    link: string
    title: string
    text: string
    children: ReactNode
    className?: string
    pl?: boolean
}

export const WeDo = ({link, title, text, children, right, className,pl}: PropsType) => {

    const classNames = {
        root: clsx(s.weDoTitleBg, className),
        weDoText:clsx(s.weDoText,pl && s.pl)
    }

    return (
        <Link href={link} style={{textDecoration: 'none', color: 'inherit'}}>
            <div className={s.weDo}>
                {right && children}
                <div className={s.weDoContainer}>
                    <div style={monumentExtended.style} className={s.weDoTitle}>
                        <span className={classNames.root}></span>
                        {title}
                    </div>
                    <div style={{paddingLeft: '46px'}}>
                        <Typography className={classNames.weDoText} variant='text'>
                            {text}
                        </Typography>
                    </div>
                </div>
                {!right && children}
            </div>
        </Link>
    );
};

