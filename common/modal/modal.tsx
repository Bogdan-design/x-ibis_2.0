import * as React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import {Form} from "@/component/contact/form/form";
import Close from "@/assest/icon/close";
import {useState} from "react";
import s from './modal.module.scss'


type Props = {
    onOpenModal: () => void
};
export const Modal: React.FC<Props> = ({onOpenModal}) => {


    const {t} = useTranslation()
    return (
        <div className={s.modal}>
            <div className={s.modalContainer}>
                <button onClick={onOpenModal} className={s.iconButtonClose}>
                    <Close/>
                </button>
                <Typography variant={'title'} className={s.modalTitle}>
                    {t('Get in Touch')}
                </Typography>
                <div className={s.modalForm}>
                    <Form modal/>
                </div>
            </div>
        </div>
    );
};