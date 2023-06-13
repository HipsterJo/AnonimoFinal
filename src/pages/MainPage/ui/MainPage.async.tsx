import {lazy} from 'react'
import MainPage from './MainPage'

export const MainPageAsync = lazy(()=>import('./MainPage'))

