'use client'
import Logo from "@/assest/icon/logo";
import {links} from "@/lid/data";
import Link from "next/link";
import Arrow from "@/assest/icon/arrow";
import linkedin from "@/assest/icon/linkedin.png";
import React from "react";
import Image from "next/image";
import {useTranslation} from "next-i18next";
import s from './footer.module.scss'

export const Footer = () => {
    const {t}=useTranslation()

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <Logo style={{width: '90px', height: '18px'}}/>
                <div className={s.options}>
                    <nav className={s.links}>
                            {links.map(l => (
                                <Link className={s.link} key={l.hash} href={l.hash}>
                                    {t(`${l.name}`)}
                                </Link>)
                            )}
                    </nav>
                    <Link href={'https://www.linkedin.com/company/x-ibis'}>
                        <Image src={linkedin} alt={''}/>
                    </Link>
                    <Link href={'/#home'} className={s.button}>
                        <Arrow className={s.up}/>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

