import React, { FC } from 'react'
import { classNames } from '../../../../helpers/classNames/classNames'
import cls from './LoginModal.module.scss'
import LoginForm from '../LoginForm/LoginForm'
import { Modal } from '../../../../shared/ui/Modal/Modal'

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ 
  className = "", 
  isOpen, 
  onClose
 }) => {
  return (
    <Modal className={classNames(cls.LoginModal, {}, [className])}  isOpen={isOpen} onClose={onClose}>
      <LoginForm/>
    </Modal>
  )
}

export default LoginModal;