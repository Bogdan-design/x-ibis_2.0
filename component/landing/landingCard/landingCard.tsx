import React, {CSSProperties} from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {Button} from "@/component/ui/button";
import {landingPagesData} from "@/lid/data";
import {useSubjectStore} from "@/store/subject";
import s from './landingCards.module.scss'

type LandingCardsOptionsProps = (typeof landingPagesData)[number]['options'][number] & {
    isMobile?: boolean
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
                                isModalOpen,
                                isMobile
                            }: LandingCardsOptionsProps) => {

    const setSubject = useSubjectStore(state => state.setSubject)


    const onClickHandler = () => {
        isModalOpen(true)
        setSubject(t(`${pages}.pageTitle`) + ' ' + title)
    }

    const style: CSSProperties = pages === 'devops' && !isMobile ?
        {width: '870px'} : pages === 'ai' && !isMobile ?
            {width: '592px'} : pages === 'design' ?
                {width: ''} : {width: '300px'}


    return (
        <div>
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
            {isMobile && <div style={{height: '51px', width: '100%'}}></div>}
        </div>

    );
};
