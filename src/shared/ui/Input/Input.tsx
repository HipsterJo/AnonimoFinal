import React, { FC } from 'react'
import { classNames } from '../../../helpers/classNames/classNames'
import cls from './Input.module.scss'

type InputAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'| 'onChange'>

interface InputProps extends InputAttributes {
    className?: string;
    value?: string;
    onChange?: ( value: string) => void;
}

const Input: FC<InputProps> = ({ 
    className = "",
    value,
    onChange,
    type = 'text',
    ...otherProps
 }) => {


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
         onChange?.(e.target.value)
    }
  return (
    
        <input 
            className={classNames(cls.Input, {}, [className])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    
  )
}

export default Input;