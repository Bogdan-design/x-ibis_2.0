import React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {Button} from "@/component/ui/button";
import {landingPagesData} from "@/lid/data";
import s from './landingCards.module.scss'

type LandingCardsOptionsProps = (typeof landingPagesData)[number]['options'][number] &
    { t: (text: string) => string } &
    { pages: string } & { index: number }

export const LandingCard = ({index, title, description, price, volume, t, pages}: LandingCardsOptionsProps) => {



    const style = pages === 'devops' ? {width: '870px'} : pages === 'ai' ? {width: '592px'} : {width: '300px'}



    return (
        <div className={s.landingCard}>
            {title && <Typography className={s.landingCardTitle} variant={'title'}>
                {t(`${pages}.options.${index}.title`)}
            </Typography>}
            <div style={style} className={s.landingCardDescription}>{description}</div>

            {price && <Typography variant={'title'}
                                  className={s.landingCardPrice}>{t(`${pages}.options.${index}.price`)}</Typography>}
            {volume && <Typography variant={'text'}
                                   className={s.landingCardVolume}>{t(`${pages}.options.${index}.volume`)}</Typography>}
            <div>
                <Button className={s.LandingButton}>{t('Offer')}</Button>
            </div>
        </div>
    );
};
