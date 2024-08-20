import React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import s from './devopsText.module.scss'
import {useTranslation} from "next-i18next";

export const DevopsCardsText = () => {
    const {t} = useTranslation();
    return (
        <div className={s.devopsCardsText} style={{textAlign: 'start'}}>
            <ol>
                <Typography as={'li'} variant={'title'}>{t('devops.options.0.description.0.title')}</Typography>
            </ol>
            <ul>
                <li>{t('devops.options.0.description.0.option_1')}</li>
                <li>{t('devops.options.0.description.0.option_2')}</li>
                <li>{t('devops.options.0.description.0.option_3')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'2'}>{t('devops.options.0.description.1.title')}</Typography>
            </ol>
            <ul>
                <li>{t('devops.options.0.description.1.option_1')}</li>
                <li>{t('devops.options.0.description.1.option_2')}</li>
                <li>{t('devops.options.0.description.1.option_3')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'3'}>{t('devops.options.0.description.2.title')}</Typography>
            </ol>
            <ul>
                <li>{t('devops.options.0.description.2.option_1')}</li>
                <li>{t('devops.options.0.description.2.option_2')}</li>
                <li>{t('devops.options.0.description.2.option_3')}</li>
                <li>{t('devops.options.0.description.2.option_3')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'4'}>{t('devops.options.0.description.3.title')}</Typography>
            </ol>
            <ul>
                <li>{t('devops.options.0.description.3.option_1')}</li>
                <li>{t('devops.options.0.description.3.option_2')}</li>
                <li>{t('devops.options.0.description.3.option_3')}</li>
            </ul>
        </div>

    );
};

export const DevopsText = () => {
    const {t} = useTranslation();
    return (
        <div className={s.devopsText}>
            <Typography as={'p'} variant={'title'}>{t('devops.text.title')}</Typography>
            <p>{t('devops.text.option_1')}</p>
            <p>{t('devops.text.option_2')}</p>
            <p>{t('devops.text.option_3')}</p>
        </div>
    );
};