import React, {FunctionComponentElement} from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {Button} from "@/component/ui/button";
import {landingPageDateOptions} from '@/lid/data'
import {useTranslation} from "next-i18next";
import s from './blocksCard.module.scss'

type landingPageDateOptions = (typeof landingPageDateOptions)[number]

export const BlocksCard = ({title, icon,page}: landingPageDateOptions) => {
    const {t} = useTranslation();
    return (
        <div className={s.blocksCard}>
            <Typography variant={'title'}>{title}</Typography>
            {icon}
            <div>
                <Button as={'a'} href={`/landing/${page}`} className={s.LandingButton}>Offer</Button>
            </div>
        </div>
    );
};
