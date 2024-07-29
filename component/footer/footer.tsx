'use client'
import Logo from "@/assest/icon/whiteLogo";
import {links} from "@/lid/data";
import Link from "next/link";
import Arrow from "@/assest/icon/arrow";
import React from "react";
import {useTranslation} from "next-i18next";
import Linkedin from "@/assest/icon/linkedin";
import {monumentExtended} from "@/fonts/fonts";
import {useMobileContext} from "@/context/mobile.context";
import s from './footer.module.scss'

export const Footer = () => {
    const {t} = useTranslation()
    const {isMobile}= useMobileContext()

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <Link  href={'/'}>
                    <Logo/>

                </Link>
                <div className={s.options}>
                    <nav className={s.links}>
                        {links.map(l => (
                            <Link style={monumentExtended.style}
                                  className={s.link}
                                  key={l.hash}
                                  href={l.hash}>
                                {t(`${l.name}`)}
                            </Link>)
                        )}
                        <Link
                            className={s.linkedin}
                            href={'https://www.linkedin.com/company/x-ibis'}
                        >
                            <Linkedin/>
                        </Link>
                        {!isMobile && <Link href={'/#home'} className={s.button}>
                            <Arrow className={s.up}/>
                        </Link>}
                    </nav>
                </div>
            </div>

            {isMobile ?
                <div className={s.nip}>
                    <div>Numer KRS <p>0001068680</p></div>
                    <div>NIP <p>5242989158</p></div>
                    <div>REGON <p>526909832</p></div>
                    <div>X-IBIS sp.z o.o.</div>
                    <div>
                        2024 X-IBIS SP.Z O.O.<p>{t('rights')}</p>
                    </div>
                    <Link href={'/#home'} className={s.button}>
                        <Arrow className={s.up}/>
                    </Link>

                </div>
                :
                <div className={s.nip}>
                    <div style={{
                        display: 'flex',
                        maxWidth: '385px',
                        width: '100%',
                        justifyContent: 'space-between',
                        height: '90px'
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            width: '100px',
                            justifyContent: 'space-between'
                        }}>
                            <div>Numer KRS 0001068680</div>
                            <div>NIP 5242989158</div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            width: '100px',
                            justifyContent: 'space-between'
                        }}>
                            <div>Regon 526909832</div>
                            <div>x-ibis sp.z o.o.</div>
                        </div>
                    </div>
                    <div>
                        2024 X-IBIS SP.Z O.O. <span>{t('rights')}</span>
                    </div>
                </div>
            }
        </footer>
    );
};

