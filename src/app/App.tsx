import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { Link, Route, Routes } from "react-router-dom";
import { MainPage } from '../pages/MainPage'
import { AboutPage } from "../pages/AboutPage";
import {Suspense} from 'react'
import { classNames } from "../helpers/classNames/classNames";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <h1>Привет мир!</h1>
        <p>Привет, это начало пути!</p>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/"} element={<MainPage />} />
          
        </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
