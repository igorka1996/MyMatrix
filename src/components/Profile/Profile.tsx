import React, { ChangeEvent, useState } from "react";
import "./Profile.scss";
import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useAppSelector } from "../../redux-store/store";
import { User } from "./MenuProfile/User/User";
import { Tarif } from "./MenuProfile/Tarif/Tarif";
import { HistoryMatrix } from "./MenuProfile/HistoryMatrix/HistoryMatrix";
import { Orders } from "./MenuProfile/Orders/Orders";
import { Learn } from "./MenuProfile/Learn/Learn";
import { Support } from "./MenuProfile/Support/Support";

export const Profile = () => {
  const loc = useLocation();
  const clasNam = (el: boolean) => (el ? "active" : "profileLink");
  const auth = useAppSelector((state) => state.registrationReducer.auth);
  const [checkMenu, setCheckMenu] = useState(false);
  const checkBurgerFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckMenu(e.currentTarget.checked);
  };

  const closeBurger = () => {
    setCheckMenu(false);
  };
  if (!auth) {
    return <Navigate to={"/"} state={loc} />;
  }
  return (
    <div className={"profileSection"}>
      <input
        onChange={checkBurgerFunc}
        checked={checkMenu}
        type="checkbox"
        id="toggle-menu-profile"
      />
      <label htmlFor="toggle-menu-profile" className="menu-icon"></label>
      <div
        className={`glavProfileMenu ${checkMenu ? "activeMenuProfile" : ""}`}
      >
        <div onClick={closeBurger} className={"profileMenu"}>
          <NavLink
            onClick={closeBurger}
            className={({ isActive }) => clasNam(isActive)}
            to={"/profile/user"}
          >
            Профиль
          </NavLink>
          <NavLink
            onClick={closeBurger}
            className={({ isActive }) => clasNam(isActive)}
            to={"/profile/tarif"}
          >
            Мой тариф
          </NavLink>
          <NavLink
            onClick={closeBurger}
            className={({ isActive }) => clasNam(isActive)}
            to={"/profile/mymatrix"}
          >
            История поиска матриц
          </NavLink>
          <NavLink
            onClick={closeBurger}
            className={({ isActive }) => clasNam(isActive)}
            to={"/profile/orders"}
          >
            История заказов
          </NavLink>
          <NavLink
            onClick={closeBurger}
            className={({ isActive }) => clasNam(isActive)}
            to={"/profile/learn"}
          >
            Видео-Обучение
          </NavLink>
          <NavLink
            onClick={closeBurger}
            className={({ isActive }) => clasNam(isActive)}
            to={"/profile/support"}
          >
            Написать в поддержку
          </NavLink>
        </div>
      </div>
      <div className={"profileMenuSection"}>
        <Routes>
          <Route path={"/user"} element={<User />} />
          <Route path={"/tarif"} element={<Tarif />} />
          <Route path={"/mymatrix"} element={<HistoryMatrix />} />
          <Route path={"/orders"} element={<Orders />} />
          <Route path={"/learn"} element={<Learn />} />
          <Route path={"/support"} element={<Support />} />
        </Routes>
      </div>
    </div>
  );
};
