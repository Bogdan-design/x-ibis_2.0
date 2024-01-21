import {ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode} from "react";
import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    children: ReactNode
    variant?: 'primary' | 'link'
    fullWidth?: boolean
    className?: string
    style?:CSSProperties
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
    const { variant = 'primary',style, fullWidth, className, as: Component = 'button', ...rest } = props

    return (
        <Component style={style} className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
    )
}
