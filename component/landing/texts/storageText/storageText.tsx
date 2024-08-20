import React from "react";
import {useTranslation} from "next-i18next";

export const StorageText = () => {

    const {t}= useTranslation();

    return (
        <div style={{textAlign: 'start'}}>
            <ul>
                <li>{t('storage.options.option_1')}</li>
                <li>{t('storage.options.option_2')}</li>
                <li>{t('storage.options.option_3')}</li>
            </ul>
        </div>

    );
};
