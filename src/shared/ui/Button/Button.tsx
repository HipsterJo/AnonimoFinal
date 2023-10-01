import React, { FC } from 'react'
import { classNames } from '../../../helpers/classNames/classNames';
import cls from './Button.module.scss'
import { useTheme } from '../../../app/providers/ThemeProvider';

export enum ButtonThemes{
    SOLID = 'solid',
    OUTLINE = 'outline',
    CLEAR = 'clear',

}



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    themes?: ButtonThemes;
    onClick?: () => void;
    children?: React.ReactNode;
    primary?: boolean,
    secondary?: boolean

  
}



const Button: FC<ButtonProps> = ({ className = "", onClick, children, primary, secondary=false, themes=ButtonThemes.SOLID}) => {
    const {theme} = useTheme( );
    console.log(secondary)
    console.log(secondary ? cls.secondary : cls.primary)
    return (
    <button className={classNames(cls.Button, {[secondary ? cls.secondary : cls.primary]: true, [cls[themes]]: true}, [className, theme])} onClick={onClick}>
        {children}
    </button>
    )
}

export default Button