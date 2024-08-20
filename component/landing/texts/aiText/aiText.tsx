import React from 'react';
import s from './aiText.module.scss'
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";

export const AiTextCard = () => {
    const {t}=useTranslation();
    return (
        <div style={{textAlign: 'start'}} className={s.aiTextCard}>
            <div>
                <ol>
                    <Typography as={'li'} variant={'title'}>{t('ai.options.0.description.0.title')}</Typography>
                </ol>
                <ul>
                    <li>{t('ai.options.0.description.0.option')}
                    </li>
                </ul>
            </div>
            <div>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'2'}>{t('ai.options.0.description.1.title')}</Typography>
                </ol>
                <ul>
                    <li>{t('ai.options.0.description.1.option')}</li>
                </ul>
            </div>
            <div>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'3'}>{t('ai.options.0.description.2.title')}</Typography>
                </ol>
                <ul>
                    <li>{t('ai.options.0.description.2.option')}
                    </li>
                </ul>
            </div>
            <div>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'4'}>{t('ai.options.0.description.3.title')}</Typography>
                </ol>
                <ul>
                    <li>{t('ai.options.0.description.3.option')}</li>
                </ul>
            </div>
        </div>
    );
};

