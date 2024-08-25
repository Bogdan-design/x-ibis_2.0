import React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import s from './staffText.module.scss'

export const StaffText = () => {
    const {t}= useTranslation();
    return (
        <div className={s.staffTextContainer}>
            <Typography variant={'title'}>{t('staff.text.0.title')}</Typography>
            <br/>

            <div>
                <Typography as={'span'}>{t('staff.text.1.title')}</Typography>{t('staff.text.1.option_1')}
            </div>
            <div>

                <Typography as={'span'}>{t('staff.text.2.title')}</Typography>{t('staff.text.2.option_1')}
            </div>
            <div>
                <Typography as={'span'}>{t('staff.text.3.title')}</Typography>{t('staff.text.3.option_1')}
            </div>
            <div>
                <Typography as={'span'}>{t('staff.text.4.title')}</Typography>{t('staff.text.4.option_1')}
            </div>
            <div>
                <Typography as={'span'}>{t('staff.text.5.title')}</Typography>{t('staff.text.5.option_1')}
            </div>

        </div>
    );
};

export const StaffCardsTextBasic=()=>{
    const {t}= useTranslation();
    return(
        <ul className={s.staffCardsText}>
            <li>{t('staff.options.0.description.option_1')}</li>
            <li>{t('staff.options.0.description.option_2')}</li>
        </ul>
    )
}

export const StaffCardsTextAdvanced=()=>{
    const {t}= useTranslation();
    return(
        <ul className={s.staffCardsText}>
            <li>{t('staff.options.1.description.option_1')}</li>
            <li>{t('staff.options.1.description.option_2')}</li>
        </ul>
    )
}

export const StaffCardsTextProfessional=()=>{
    const {t}= useTranslation();
    return(
        <ul className={s.staffCardsText}>
            <li>{t('staff.options.2.description.option_1')}</li>
            <li>{t('staff.options.2.description.option_2')}</li>
            <li>{t('staff.options.2.description.option_3')}</li>
            <li>{t('staff.options.2.description.option_4')}</li>
        </ul>
    )
}