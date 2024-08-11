import React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import s from './landingHomePageText.module.scss'

export const LandingHomePageText = ({t}:{t: (text: string) => string}) => {
    return (
        <div className={s.landingHomePageText}>
            <Typography className={s.landingDescription} as={'p'} variant={'text'}>{t('landingDescription')}</Typography>
            <Typography className={s.landingDescription} as={'p'} variant={'text'}>{t('landingBlocksTitle')}</Typography>
        </div>
    );
};
