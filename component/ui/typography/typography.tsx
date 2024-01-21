import {ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode} from "react";
import {monumentExtended} from "@/fonts/fonts";
import clsx from "clsx";
import s from './typography.module.scss'

type TextProps<T extends ElementType = 'h2'> = {
    as?: T
    children: ReactNode,
    className?: string,
    variant?: 'title' | 'text'
}


export const Typography = <T extends ElementType = 'h2'>({
                                                             className,
                                                             variant = 'title',
                                                             as,
                                                             ...rest
                                                         }:
                                                             TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>) => {
    const Component = as || 'h2'
    const classNames = clsx(s[variant], className)
    const font: CSSProperties = variant === 'title' ? monumentExtended.style : {}
    return <Component style={font} className={classNames} {...rest}/>
}
