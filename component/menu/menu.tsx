'use client'
import {useCallback, useState} from 'react';
import Global from "@/assest/icon/global";
import i18next from "i18next";
import {Constants} from "@/common/local/constants";
import {useLocalStore} from "@/store/local.store";
import s from './menu.module.scss'

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [local,setLocal]=useState<string>(Constants.EN);
const local = useLocalStore(state => state.local);
const setLocal = useLocalStore(state => state.setLocal);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const onLocalHandler = useCallback((newLocal: Constants) => {
        try {
            i18next.changeLanguage(newLocal);
            localStorage.setItem('i18nextLng',newLocal)
            setLocal(newLocal)
            setIsOpen(!isOpen);
        } catch (error) {
            console.error("Error changing language:", error);
        }
    },[local,isOpen])


    return (
        <section className={s.container} suppressHydrationWarning={true}>
            <button onClick={toggleDropdown} className={s.button}>
                <Global className={s.icon}/>
            </button>
            {isOpen && (
                <ul className={s.list}>
                    <li className={i18next.language === Constants.EN ? s.active : ''}
                        onClick={() => onLocalHandler(Constants.EN)}>EN
                    </li>
                    <li className={i18next.language === Constants.DE ? s.active : ''}
                        onClick={() => onLocalHandler(Constants.DE)}>DE
                    </li>
                    <li className={i18next.language === Constants.PL ? s.active : ''}
                        onClick={() => onLocalHandler(Constants.PL)}>PL
                    </li>
                </ul>
            )}
        </section>
    );
};