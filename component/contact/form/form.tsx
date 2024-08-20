import * as React from 'react';
import {sendEmail} from "@/actions/sendEmail";
import toast from "react-hot-toast";
import {TextField} from "@mui/material";
import {SubmitBtm} from "@/component/contact/submitBtm";
import {BDO_Grotesk} from "@/fonts/fonts";
import {useTranslation} from "next-i18next";
import s from "./form.module.scss";
import {useSubjectStore} from "@/store/subject";
import {ChangeEventHandler} from "react";

type Props = {
    modal?: boolean
    isModalOpen?:(open:boolean)=>void;
};
export const Form: React.FC<Props> = ({modal,isModalOpen}) => {
    const {t} = useTranslation()
    const subject = useSubjectStore(state => state.subject)
    const setSubject = useSubjectStore(state => state.setSubject)


    const onValueChange=(e:any)=>{
        setSubject(e.target.value);
    }

    return (
        <form className={modal ? s.modalForm : s.form} action={async (formData) => {
            const {error} = await sendEmail(formData)
            if (error) {
                toast.error(error)
            } else if(isModalOpen) {
                isModalOpen(false)
            }

            return toast.success('Email send successfully')
        }}
        >
            <TextField
                name='senderNname'
                id='text'
                label={t('formName')}
                type='text'
                placeholder={t('formName')}
                variant="standard"
                required
                fullWidth
            />
            <TextField
                name='senderEmail'
                id='email'
                label={t('formEmail')}
                type='email'
                placeholder={t('formEmail')}
                variant="standard"
                required
                fullWidth
            />
            <TextField name='senderPhone'

                       id='phone'
                       label={t('formPhone')}
                       type='phone'
                       placeholder={t('formPhone')}
                       variant="standard"
                       fullWidth
            />
            {modal &&  <TextField name='modal'

                                  id='modal'
                                  label={t('formSubject')}
                                  type='phone'
                                  placeholder={t('formSubject')}
                                  value={subject}
                                  onChange={onValueChange}
                                  variant="standard"
                                  fullWidth
            />}
            <TextField name='senderMessage'

                       id='message'
                       label={t('formMessage')}
                       type='Message'
                       placeholder={t('formMessage')}
                       rows={4}
                       variant="standard"
                       required = {!modal}
                       fullWidth
            />
            <SubmitBtm font={BDO_Grotesk.style} className={s.submit}/>
        </form>
    );
};