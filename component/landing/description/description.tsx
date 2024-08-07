'use client'
import React from 'react';
import {Heading} from "@/common/heading/heading";
import {Typography} from "@/component/ui/typography/typography";
import s from "@/common/heading/heading.module.scss";
import {useTranslation} from "next-i18next";
import {Blocks} from "@/component/landing/blocks/blocks";

export const Description = () => {
    const {t} = useTranslation();
    return (

        <section>
            <Heading landing t={t}>LOREM IPSUM</Heading>
            <Typography className={s.description} variant={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            <Blocks/>
        </section>
    );
};

