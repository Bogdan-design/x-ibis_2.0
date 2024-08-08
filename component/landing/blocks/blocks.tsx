'use client'
import React from 'react';
import {BlocksCard} from "@/component/landing/blocks/blocksCard/blocksCard";
import {landingPageDateOptions} from "@/lid/data";
import {useTranslation} from "next-i18next";
import s from './blocks.module.scss'
import {Heading} from "@/common/heading/heading";

export const Blocks = () => {
    const {t} = useTranslation();
    return (
        <div className={s.blocks}>
            <div className={s.blocksContainer}>
                <Heading landing t={t}>more</Heading>
                <div className={s.blocksCards}>

                    {landingPageDateOptions.map((option, index) => (
                        <BlocksCard key={index} {...option} />
                    ))}
                </div>

            </div>
        </div>
    );
};
