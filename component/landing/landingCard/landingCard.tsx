import React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {Button} from "@/component/ui/button";
import {landingPagesData} from "@/lid/data";
import s from './landingCards.module.scss'
import {BuildText} from "@/component/landing/texts/buildText/buildText";

type LandingCardsOptionsProps = (typeof landingPagesData)[number]['options'][number] &
    { t: (text: string) => string } &
    { pages: string } & { index: number }

export const LandingCard = ({index, title, description,t, pages}: LandingCardsOptionsProps) => {
    return (
        <div className={s.landingCard}>
            {title && <Typography className={s.landingCardTitle} variant={'title'}>
                {t(`${pages}.options.${index}.title`)}
            </Typography>}
            <Typography className={s.landingCardDescription}>{description}</Typography>
            <Typography className={s.landingCardPrice}>{t(`${pages}.options.${index}.price`)}</Typography>
            <Typography className={s.landingCardVolume}>{t(`${pages}.options.${index}.volume`)}</Typography>
            <div>
                <Button className={s.LandingButton}>{t('buy')}</Button>
            </div>
        </div>
    );
};
