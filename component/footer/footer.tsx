'use client'
import Logo from "@/assest/icon/wite.logo";
import {links} from "@/lid/data";
import Link from "next/link";
import Arrow from "@/assest/icon/arrow";
import React from "react";
import {useTranslation} from "next-i18next";
import Linkedin from "@/assest/icon/linkedin";
import {monumentExtended} from "@/fonts/fonts";
import s from './footer.module.scss'

export const Footer = ({}) => {
    const {t} = useTranslation()

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <Logo/>
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
                        <Link className={s.linkedin} href={'https://www.linkedin.com/company/x-ibis'}>
                            <Linkedin/>
                        </Link>
                        <Link href={'/#home'} className={s.button}>
                            <Arrow className={s.up}/>
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

