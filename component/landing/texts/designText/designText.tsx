import React from 'react';
import {useTranslation} from "next-i18next";

export const SocialMedia = () => {
    const {t} = useTranslation()
    return (
        <div>
            <ul>
                <li>{t('design.options.0.description.0.paragraph_1')}
                    <span
                        style={{textDecoration: 'underline'}}>{t('design.options.0.description.0.paragraph_1_1')}</span>
                </li>
            </ul>
            <ul>
                <li>{t('design.options.0.description.0.paragraph_2')}
                </li>
            </ul>
        </div>
    );
};

export const PrintMaterials = () => {
    const {t} = useTranslation()
    return (
        <div>
            <ul>
                <li>{t('design.options.1.description.0.paragraph_1')}
                    <span
                        style={{textDecoration: 'underline'}}>{t('design.options.1.description.0.paragraph_1_1')}</span>,
                    {t('design.options.1.description.0.paragraph_1_2')}
                </li>
            </ul>
            <ul>
                <li>{t('design.options.1.description.0.paragraph_2')}
                </li>
            </ul>
        </div>
    )
};

export const Branding = () => {
    const {t} = useTranslation()
    return (
        <div>
            <ul>
                <li>{t('design.options.2.description.0.paragraph_1')}
                    <span
                        style={{textDecoration: 'underline'}}>{t('design.options.2.description.0.paragraph_1_1')}</span>
                    {t('design.options.2.description.0.paragraph_1_2')}
                </li>
            </ul>
            <ul>
                <li>
                    {t('design.options.2.description.0.paragraph_2')}
                </li>
            </ul>
        </div>

    );
};

export const ADS = () => {
    const {t} = useTranslation()
    return (
        <div>
            <ul>
                <li>{t('design.options.3.description.0.paragraph_1')}<span style={{textDecoration: 'underline'}}>
                    {t('design.options.3.description.0.paragraph_1_1')}
                </span>{t('design.options.2.description.0.paragraph_1_2')}
                </li>
            </ul>
            <ul>
                <li>{t('design.options.2.description.0.paragraph_2')}
                </li>
            </ul>
        </div>

    );
};

export const WebDesign = () => {
    const {t} = useTranslation()
    return (
        <div>
            <ul>
                <li>{t('design.options.3.description.0.paragraph_1')} <span style={{textDecoration: 'underline'}}>
                    {t('design.options.3.description.0.paragraph_1_1')}
                </span>{t('design.options.3.description.0.paragraph_1_2')}
                </li>
            </ul>
            <ul>

                <li>{t('design.options.3.description.0.paragraph_2')}
                </li>
            </ul>
        </div>

    );
};

