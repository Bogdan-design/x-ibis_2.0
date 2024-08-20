import * as React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";
import s from './modal.module.scss'
import {Form} from "@/component/contact/form/form";


type Props = {};
export const Modal: React.FC<Props> = () => {
    const {t} = useTranslation()
    return (
        <div className={s.modal}>
            <div className={s.modalContainer}>
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