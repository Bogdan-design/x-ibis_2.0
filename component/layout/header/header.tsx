'use client'
import React from 'react';
import Logo from '@/assest/icon/logo'
import {links} from "@/lid/data";
import Link from "next/link";
import {Menu} from "@/component/menu/menu";
import {useTranslation} from "next-i18next";
import s from './header.module.scss'

export const Header = () => {
    const {t}=useTranslation()


    return (
        <header className={s.header}>
            <div className={s.container}>

                <Link href={'/'}>
                    <Logo style={{width: '90px', height: '18px'}}/>
                </Link>
                <div className={s.options}>
                    <nav>
                        <div className={s.links}>
                            {links.map(l => (
                                <Link className={s.link} key={l.hash} href={`${'/'}${l.hash}`}>{t(`${l.name}`)}
                                </Link>)
                            )}
                        </div>
                    </nav>
                    <Menu/>
                </div>
            </div>
        </header>
    );
};

