import React from 'react';
import s from './supportText.module.scss'
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";

export const SupportText = () => {

    const {t} = useTranslation();
    return (
        <div className={s.supportsText}>
            <Typography variant={'title'}>{t('support.text.0.title')}</Typography>


            <div>
                <li>{t('support.text.0.option_1')}</li>
                <li>{t('support.text.0.option_2')}</li>
            </div>
            <Typography variant={'title'}>{t('support.text.1.title')}</Typography>

            <div>
                <li>{t('support.text.1.option_1')}</li>
                <li>{t('support.text.1.option_2')}</li>
                <li>{t('support.text.1.option_3')}</li>
            </div>
            <Typography variant={'title'}>{t('support.text.2.title')}</Typography>

            <div>
                <li>{t('support.text.2.option_1')}</li>
                <li>{t('support.text.2.option_2')}</li>
                <li>{t('support.text.2.option_3')}</li>
                <li>{t('support.text.2.option_4')}</li>
                <li>{t('support.text.2.option_5')}</li>
            </div>
            <Typography variant={'title'}>{t('support.text.3.title')}</Typography>
            <div>
                <li>{t('support.text.3.option_1')}</li>
                <li>{t('support.text.3.option_2')}</li>
                <li>{t('support.text.3.option_3')}</li>
            </div>
            <Typography variant={'title'}>{t('support.text.4.title')}</Typography>
            <div>
                <li>{t('support.text.4.option_1')}</li>
                <li>{t('support.text.4.option_2')}</li>
            </div>
            <Typography variant={'title'}>{t('support.text.5.title')}</Typography>
            <div>
                <li>{t('support.text.5.option_1')}</li>
                <li>{t('support.text.5.option_2')}</li>
            </div>
            <Typography variant={'title'}>{t('support.text.6.title')}</Typography>
            <div>
                <li>{t('support.text.6.option_1')}</li>
                <li>{t('support.text.6.option_2')}</li>
                <li>{t('support.text.6.option_3')}</li>
            </div>
            <Typography variant={'title'}>{t('support.text.7.title')}</Typography>
            <div>
                <li>{t('support.text.7.option_1')}</li>
                <li>{t('support.text.7.option_2')}</li>
                <li>{t('support.text.7.option_3')}</li>
                <li>{t('support.text.7.option_4')}</li>
            </div>
        </div>
    );
};

export const SupportTextBasic = () => {
    const {t} = useTranslation();
    return (
        <div style={{textAlign: 'start', display: 'flex', gap: '15px'}}>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <li>{t('support.options.0.description.option_1')}</li>
                <li>{t('support.options.0.description.option_2')}</li>
                <li>{t('support.options.0.description.option_3')}</li>
                <li>{t('support.options.0.description.option_4')}</li>
                <li>{t('support.options.0.description.option_5')}</li>
                <li>{t('support.options.0.description.option_6')}</li>
            </ul>
        </div>

    );
};
export const SupportTextAdvanced = () => {
    const {t} = useTranslation();
    return (
        <div style={{textAlign: 'start'}}>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <li>{t('support.options.1.description.option_1')}</li>
                <li>{t('support.options.1.description.option_2')}</li>
                <li>{t('support.options.1.description.option_3')}</li>
                <li>{t('support.options.1.description.option_4')}</li>
                <li>{t('support.options.1.description.option_5')}</li>
                <li>{t('support.options.1.description.option_6')}</li>
                <li>{t('support.options.1.description.option_7')}</li>
            </ul>

        </div>

    );
};
export const SupportTextProfessional = () => {
    const {t} = useTranslation();
    return (
        <div style={{textAlign: 'start'}}>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <li>{t('support.options.2.description.option_1')}</li>
                <li>{t('support.options.2.description.option_2')}</li>
                <li>{t('support.options.2.description.option_3')}</li>
                <li>{t('support.options.2.description.option_4')}</li>
                <li>{t('support.options.2.description.option_5')}</li>
                <li>{t('support.options.2.description.option_6')}</li>
                <li>{t('support.options.2.description.option_7')}</li>
            </ul>
        </div>
    );
};

