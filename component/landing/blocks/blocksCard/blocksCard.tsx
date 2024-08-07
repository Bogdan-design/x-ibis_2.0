import React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {Button} from "@/component/ui/button";
import s from './blocksCard.module.scss'

export const BlocksCard = () => {
    return (
        <div className={s.blocksCard}>
            <Typography>Header</Typography>
            <Button>Offer</Button>
        </div>
    );
};
