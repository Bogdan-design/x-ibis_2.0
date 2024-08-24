import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import en from '@/public/locales/en/common.json'
import de from '@/public/locales/de/common.json'
import pl from '@/public/locales/pl/common.json'
import {Constants} from "@/common/local/constants";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources :{[key:string]:{translation: typeof en | typeof de | typeof pl}} =  {
    [Constants.EN]: {
        translation: en
    },
    [Constants.DE]: {
        translation: de
    },
    [Constants.PL]: {
        translation: pl
    }
}


i18n
    .use(HttpApi)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng:Constants.EN,
        interpolation: {
            escapeValue: false
        }
    });



export default i18n;