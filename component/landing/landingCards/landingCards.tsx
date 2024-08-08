import React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {Button} from "@/component/ui/button";
import s from './landingCards.module.scss'

export const LandingCards = ({title}:{title?:string}) => {
    return (
        <div className={s.landingCard}>
            {title && <Typography variant={'title'}>{title}</Typography>}
            <Typography className={s.description}>Lorem ipsum dolor sit, consectetur adipiscing</Typography>
            <div>
                <Button className={s.LandingButton}>Offer</Button>
            </div>
        </div>
    );
};
