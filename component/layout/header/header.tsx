'use client'
import React from 'react';
import Logo from '@/assest/icon/logo'
import {links} from "@/lid/data";
import Link from "next/link";
import {Menu} from "@/component/menu/menu";
import {useTranslation} from "next-i18next";
import {monumentExtended} from "@/fonts/fonts";
import s from './header.module.scss'

export const Header = () => {
    const {t}=useTranslation()


    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link href={'/'}>
                    <Logo/>
                </Link>
                <div className={s.options}>
                    <nav>
                        <div className={s.links}>
                            {links.slice(1).map((l) => (
                                <Link style={monumentExtended.style} className={s.link} key={l.hash} href={`/${l.hash}`}>{t(l.name)}</Link>
                            ))}
                        </div>
                    </nav>
                    <Menu/>
                </div>
            </div>
        </header>
    );
};

