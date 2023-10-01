import React from 'react';
import { classNames } from '../../../helpers/classNames/classNames';
import cls from './AppLink.module.scss'
import { Link } from 'react-router-dom';

export enum AppLinkTheme{
    PRIMARY = "primary",
    SECONDARY = "secondary",
    

    
}

interface AppLinkProps {
    className?:string
    children: React.ReactNode
    to:string,
    theme?:AppLinkTheme

}

const AppLink: React.FC<AppLinkProps> = ({
  className='',
  children, 
  to,
  theme=AppLinkTheme.PRIMARY}) => {
  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} to={to} >
      {children}
    </Link>
  );
};

export default AppLink;