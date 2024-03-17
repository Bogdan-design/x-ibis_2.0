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
    className?: string
    children: ReactNode
}

export const WeDo = ({link,title, text, children,right,className}: PropsType) => {

    const classNames = {
        root:clsx(s.weDoTitleBg,className)
    }

    return (
        <div className={s.weDo}>
            {right && children}
            <div className={s.weDoContainer}>
                <div style={monumentExtended.style} className={s.weDoTitle}>
                    <Link href={link} className={classNames.root}></Link>
                    {title}
                </div>
                <div style={{paddingLeft:'46px'}}>
                    <Typography className={s.weDoText} variant='text'>
                        {text}
                    </Typography>
                </div>
            </div>
            {!right && children}
        </div>
    );
};

