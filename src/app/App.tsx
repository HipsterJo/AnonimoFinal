import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { Link, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import { Suspense } from "react";
import { classNames } from "../helpers/classNames/classNames";
import { AppRouter } from "./providers/router";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={classNames("app", {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <h1>Привет мир!</h1>
        <p>Привет, это начало пути!</p>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
        <AppRouter/>
      </div>
    </>
  );
}

export default App;
