import React, { FC, memo, useCallback, useState } from 'react'
import Input from '../../../../shared/ui/Input/Input';
import { classNames } from '../../../../helpers/classNames/classNames';
import cls from './LoginForm.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername, LoginByUsernameProps } from '../../services/loginByUsername';


interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({className ="" }) => {
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
       const data: LoginByUsernameProps = {
              username,
              password,
       };
       //@ts-ignore
        dispatch(loginByUsername(data));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <div className={classNames(cls.LoginForm__input)}>
                <h3>Username</h3>
                <Input placeholder="Username" value={username} onChange={onChangeUsername} />
            </div>
            <div className={classNames(cls.LoginForm__input)}>
                <h3>Password</h3>
                <Input placeholder="Password" type='password' value={password} onChange={onChangePassword} />
            </div >
            <button className={classNames(cls.LoginForm__button)} onClick={onLoginClick}>Login</button>


        </div>
    )
})

export default LoginForm;