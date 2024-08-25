import * as React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import {Form} from "@/component/contact/form/form";
import Close from "@/assest/icon/close";
import clsx from "clsx";
import {CSSProperties} from "react";
import s from './modal.module.scss'
import {useMobileContext} from "@/context/mobile.context";


type Props = {
    openModal:boolean
    isModalOpen: (open:boolean) => void
    isMobile?: boolean
};
export const Modal: React.FC<Props> = ({openModal,isModalOpen,isMobile}) => {



    const classNames : CSSProperties = {
        container: clsx(openModal && s.modalContainer, openModal && s.activeContent)
    }

    const {t} = useTranslation()

    return (
        <div className={s.modal} onClick={()=>isModalOpen(false)}>
            <div className={classNames.container} onClick={(event)=>event.stopPropagation()}>
                {isMobile && <button onClick={() => isModalOpen(false)} className={s.iconButtonClose}>
                    <Close/>
                </button>}
                <Typography variant={'title'} className={s.modalTitle}>
                    {t('Get in Touch')}
                </Typography>
                <div className={s.modalForm}>
                    <Form isModalOpen={isModalOpen} modal/>
                </div>
            </div>
        </div>
    );
};