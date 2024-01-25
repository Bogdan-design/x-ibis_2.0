'use client'
import React from 'react';
import s from './rectangle.module.scss'
import {Typography} from "@/component/ui/typography/typography";

type RectangleProps = {
    variant: string
    text:string
}

export const Rectangle = () => {
    return (
        <section className={s.rectangle}>
            <Typography className={s.title}>What we do</Typography>
        </section>
    );
};

