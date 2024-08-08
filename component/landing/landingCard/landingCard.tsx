import React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {Button} from "@/component/ui/button";
import {landingPagesData} from "@/lid/data";
import s from './landingCards.module.scss'

type LandingCardsOptionsProps = (typeof landingPagesData)[number]['options'][number]
export const LandingCard = ({title,description,volume,price}: LandingCardsOptionsProps) => {
    return (
        <div className={s.landingCard}>
            {title && <Typography variant={'title'}>{title}</Typography>}
            <Typography className={s.description}>{description}</Typography>
            <Typography className={s.description}>{volume}</Typography>
            <Typography className={s.description}>{price}</Typography>
            <div>
                <Button className={s.LandingButton}>Offer</Button>
            </div>
        </div>
    );
};
