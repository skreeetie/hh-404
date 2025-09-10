import Icon from "../../assets/icon.svg?react";
import Ellipse from "../../assets/ellipse.svg?react";
import Profile from "../../assets/profile.svg?react";
import style from "./style.module.scss";
import { Outlet } from "react-router";

export const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.left}>
          <Icon width={30} height={30} />
          <h3 className={style.title}>.FrontEnd</h3>
        </div>
        <div className={style.text}>
          <a href="#/vacancies" className={style.active}>
            Вакансии FE <Ellipse width={7} height={7} />
          </a>
          <a href="#" className={style.inactive}>
            <Profile width={21} height={21} />
            Обо мне
          </a>
        </div>
      </header>
      <Outlet />
    </>
  );
};
