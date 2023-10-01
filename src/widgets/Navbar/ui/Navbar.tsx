import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../../helpers/classNames/classNames';
import cls from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from '../../../shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from '../../ThemeSwitcher';
import Input from '../../../shared/ui/Input/Input';
import Button from '../../../shared/ui/Button/Button';
import { ButtonThemes } from '../../../shared/ui/Button/Button';



interface NavbarProps {
    className?: string;
}
 
enum RoutePaths{
    ABOUT = "/about",
    HOME = "/"

} 

export const Navbar:React.FC<NavbarProps> = ({className}) => {
    if (!className) {
        className = '';
    }
    return ( 
        <div className={classNames(cls.navbar,{}, [className])}>
            <Button themes={ButtonThemes.CLEAR} className={cls.button}>
                <AppLink  to={RoutePaths.HOME}>Home</AppLink>
            </Button>
            <Button themes={ButtonThemes.CLEAR} className={cls.button}>
                <AppLink  to={RoutePaths.ABOUT}>About</AppLink>
            </Button>
            
            <Input placeholder="Search" className={cls.search}/>
            <ThemeSwitcher/>
        </div>
    );
}

