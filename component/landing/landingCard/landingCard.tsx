import React, {CSSProperties} from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {Button} from "@/component/ui/button";
import {landingPagesData} from "@/lid/data";
import s from './landingCards.module.scss'
import {useSubjectStore} from "@/store/subject";

type LandingCardsOptionsProps = (typeof landingPagesData)[number]['options'][number] & {
    pages: string
    index: number
    t: (text: string) => string
    isModalOpen: (open: boolean) => void
}
export const LandingCard = ({
                                index,
                                title,
                                description,
                                price,
                                volume,
                                t,
                                pages,
                                isModalOpen
                            }: LandingCardsOptionsProps) => {

    const setSubject = useSubjectStore(state => state.setSubject)


    const onClickHandler = () => {
        isModalOpen(true)
        setSubject(t(`${pages}.pageTitle`) + ' ' + title)
    }

    const style: CSSProperties = pages === 'devops' ?
        {width: '870px'} : pages === 'ai' ?
            {width: '592px'} : pages === 'design' ?
                {width: ''} : {width: '300px'}


    return (
        <div className={s.landingCard}>
            {title && <Typography className={s.landingCardTitle} variant={'title'}>
                {t(`${pages}.options.${index}.title`)}
            </Typography>}
            <div style={style} className={s.landingCardDescription}>{description}</div>

            {price && <Typography variant={'title'}
                                  className={s.landingCardPrice}>{t(`${pages}.options.${index}.price`)}</Typography>}
            {volume && <Typography variant={'text'}
                                   className={s.landingCardVolume}>{t(`${pages}.options.${index}.volume`)}</Typography>}
            <div>
                <Button className={s.LandingButton} onClick={onClickHandler}>{t('Offer')}</Button>
            </div>
        </div>
    );
};
