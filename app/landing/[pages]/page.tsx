'use client'
import React, {CSSProperties, useState} from "react";
import {PageError} from "@/common/errors/error404";
import {useTranslation} from "next-i18next";
import {landingPageDateOptions, landingPagesData} from "@/lid/data";
import {Heading} from "@/common/heading/heading";
import {Typography} from "@/component/ui/typography/typography";
import {LandingCard} from "@/component/landing/landingCard/landingCard";
import {SupportText} from "@/component/landing/texts/supportText/supportText";
import Link from "next/link";
import Back from "@/assest/icon/back";
import {DevopsText} from "@/component/landing/texts/devopsText/devopsText";
import {StaffText} from "@/component/landing/texts/staffText/staffText";
import {Modal} from "@/common/modal/modal";
import {useMobileContext} from "@/context/mobile.context";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import s from "./page.module.scss";
import 'swiper/css/bundle';


function Page({params: {pages}}: { params: { pages: (typeof landingPageDateOptions)[number]['page'] } }) {

    const {t} = useTranslation();

    const {isMobile} = useMobileContext()

    const [openModal, setOpenModal] = useState<boolean>(false);

    const isModalOpen = (open: boolean) => {
        setOpenModal(open)
    }


    let dataIndex

    switch (pages) {
        case 'build':
            dataIndex = 0;
            break;
        case 'virtual':
            dataIndex = 1;
            break;
        case 'storage':
            dataIndex = 2;
            break;
        case 'support':
            dataIndex = 3;
            break;
        case 'devops':
            dataIndex = 4;
            break;
        case 'staff':
            dataIndex = 5;
            break;
        case 'ai':
            dataIndex = 6;
            break;
        case 'design':
            dataIndex = 7;
            break;
        default:
            return <PageError/>
    }

    const stylePageDescription: CSSProperties = pages === 'ai' && !isMobile ?
        {fontSize: '27px'} : pages === 'design' && !isMobile ?
            {fontSize: '27px'} : {}


    const styleForPages: CSSProperties =
        dataIndex === 2 ? {justifyContent: 'center'} :
            dataIndex === 4 ? {justifyContent: 'center'} :
                dataIndex === 6 ? {justifyContent: 'center'} :
                    dataIndex === 7 ? {
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '54px',
                        alignItems: 'center'
                    } : {justifyContent: 'space-between'}


    return <section className={s.landingPage}>
        {openModal && <Modal openModal={openModal} isModalOpen={isModalOpen}/>}
        <div className={s.landingPageContainer}>
            <div className={s.titleContainer}>
                <Link href={'/landing'} className={s.link}>
                    <Back className={s.button}/>
                </Link>
                <Heading {...landingPagesData[dataIndex]} landing t={t} page={pages}/>
            </div>
            {dataIndex === 5 && <StaffText/>}
            <Typography style={stylePageDescription} variant={'title'} className={s.description}>
                {t(`${pages}.pageDescription`)}
            </Typography>
            {dataIndex === 4 && <Typography variant={'text'}>{t(`${pages}.pageText`)}</Typography>}
            {!isMobile ?
                <div style={styleForPages}
                     className={s.landingPageCardsContainer}>
                    {...landingPagesData[dataIndex].options.map((o, i) => (
                        <React.Fragment key={i}>
                            <LandingCard index={i} t={t} pages={pages} isModalOpen={isModalOpen} {...o}/>
                        </React.Fragment>
                    ))}
                </div> :
                <Swiper className={s.landingPageCardsContainer}
                        modules={[Pagination]}
                        pagination={true}
                        spaceBetween={14}
                        slidesPerView={1.1}>
                    <div style={styleForPages}>
                        {...landingPagesData[dataIndex].options.map((o, i) => (
                            <SwiperSlide key={i}>
                                <LandingCard isMobile index={i} t={t} pages={pages} isModalOpen={isModalOpen} {...o}/>
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>}

            {dataIndex === 3 && <SupportText/>}
            {dataIndex === 4 && <DevopsText/>}
        </div>
    </section>
}


export default Page