import React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {Button} from "@/component/ui/button";
import {landingPageDateOptions} from '@/lid/data'
import {useTranslation} from "next-i18next";
import s from './blocksCard.module.scss'

type landingPageDateOptions = (typeof landingPageDateOptions)[number]

export const BlocksCard = ({title, icon,page}: landingPageDateOptions) => {
    const {t} = useTranslation();
    return (
        <div className={s.blockCard}>
            <Typography className={s.blockTitle} variant={'title'}>{t(`blockCard.${page}.title`)}</Typography>
            <div className={s.blockIcon}>
                {icon}
            </div>
            <div>
                <Button as={'a'} href={`/landing/${page}`} className={s.LandingButton}>
                   <Typography className={s.buttonText} as={'div'} variant={'text'}>{t('buttonBlock')}</Typography>
                </Button>
            </div>
        </div>
    );
};
