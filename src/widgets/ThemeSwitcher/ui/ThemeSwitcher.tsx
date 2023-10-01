import React, { FC } from 'react'
import cls from './ThemSwitcher.module.scss'
import { classNames } from '../../../helpers/classNames/classNames';
import { useTheme } from '../../../app/providers/ThemeProvider';
import Button, { ButtonThemes } from '../../../shared/ui/Button/Button';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BsFillSunFill} from 'react-icons/bs';
import { Theme } from '../../../app/providers/ThemeProvider';

interface ThemeSwitcherProps {
  className?:string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className=''}) => {
  const { theme, toggleTheme } = useTheme( );


  
  return (
    <Button themes={ButtonThemes.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {className})}> 
         <div>
            { theme === Theme.LIGHT ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
         </div>
         
    </Button>
  )
}

export default ThemeSwitcher;