// app/I18nProvider.js
'use client';

import {ReactNode, useEffect} from 'react';
import {I18nextProvider} from 'react-i18next';
import i18n from "@/common/local/i18n";
import {Constants} from "@/common/local/constants";

const I18nProvider = ({ children }:{children:ReactNode}) => {
    useEffect(() => {
        const local : string | undefined | null = localStorage.getItem("i18nextLng");
        i18n.changeLanguage(local ?? Constants.EN); // Set the default language or use dynamic detection
    }, [i18n]);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
