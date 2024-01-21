import React, {CSSProperties} from 'react';
import {Button} from "@/component/ui/button";
// @ts-ignore
import {experimental_useFormStatus as useFormStatus} from 'react-dom'
import {useTranslation} from "next-i18next";

export const SubmitBtm = ({className, font}: {
    className?: string,
    font?: CSSProperties
}) => {
    const {pending} = useFormStatus()
    const {t}=useTranslation()

    return (
        <Button style={font} className={className} type={'submit'}
                disabled={pending}
                fullWidth
        >
            {t('Sent')}
        </Button>
    );
};

