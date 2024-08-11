// app/I18nProvider.js
'use client';

import {ReactNode, useEffect} from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from "@/common/local/i18n";

const I18nProvider = ({ children }:{children:ReactNode}) => {
    useEffect(() => {
        i18n.changeLanguage('en'); // Set the default language or use dynamic detection
    }, []);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
