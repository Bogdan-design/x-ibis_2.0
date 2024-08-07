import React, {ReactNode} from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {monumentExtended} from "@/fonts/fonts";
import {useMobileContext} from "@/context/mobile.context";
import Back from "@/assest/icon/back";
import Link from "next/link";
import clsx from "clsx";
import s from './heading.module.scss'

type pageData = {
    page?: string,
    t:(text: string) => string,
    landing?:boolean
    children?: ReactNode
}

export const Heading = ({page,t,landing,children}: pageData) => {

    const {isMobile} = useMobileContext()

    const classNames={
        title: clsx(page==='audit' || 'security' ? s.title : s.title,s.titleSm)
    }

    return (
        <div className={s.heading}>
            <div style={monumentExtended.style} className={classNames.title}>
                <div className={s.titleBg}></div>
                {isMobile &&
                    <Link href={'/#[services]'} className={s.link}>
                        <Back className={s.button}/>
                    </Link>
                }
                {children ? children : t(`${page}.pageTitle`)}
            </div>
            {!landing && <Typography className={s.description} variant={'text'}>{t(`${page}.pageDescription`)}</Typography>}
        </div>
    );
};
