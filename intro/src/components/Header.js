import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showForm } from "../redux/actionCreators";

function Header() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [list, setList] = useState("");
  const [select, setSelect] = useState("/");
  const [visibleMenu, setVisibleMenu] = useState("");
  const links = [
    { link: "/", name: "Главная", key: nanoid() },
    {
      link: "/prof-courses.html",
      name: "Профессиональные курсы",
      key: nanoid(),
    },
    { link: "/sign-as-model.html", name: "Записаться моделью", key: nanoid() },
  ];

  const showModalForm = (e) => {
    dispatch(showForm());
    document.body.style.overflow = "hidden";
  };

  const fadeOut = (e) => {
    if (visibleMenu === "") {
      setVisibleMenu("box-navbar-show");
      document.body.style.overflow = "hidden";
    } else {
      setVisibleMenu("");
      document.body.style.overflow = "visible";
    }
  };

  const closeBurger = (link, e) => {
    setVisibleMenu("");
    document.body.style.overflow = "visible";
    setSelect(link);
  };

  useEffect(() => {
    setList(store);
  }, [store]);

  const menu = links.map((element) => (
    <li key={element.key} className="nav-item">
      <NavLink
        key={element.key}
        className={
          element.link === select
            ? "menu__item menu__item-active nav-link"
            : "menu__item nav-link"
        }
        to={element.link}
        onClick={(e) => closeBurger(element.link, e)}
      >
        {element.name}
      </NavLink>
    </li>
  ));

  return (
    <header
      className={
        visibleMenu === "box-navbar-show"
          ? "container-header header-open-burger"
          : "container-header"
      }
    >
      <div className="navbar-header">
        <div className="container-fluid">
          <div className="navbar-container">
            <NavLink
              className="navbar-brand"
              to="/"
              onClick={(e) => setSelect("/")}
            >
              <div className="navbar-brand-logo"></div>
              <div className="navbar-brand-line-wrapper">
                <div className="navbar-brand-line-name">DARIA VLADY</div>
                <div className="navbar-brand-line-subtitle">
                  ШКОЛА СТИЛИСТОВ
                </div>
              </div>
            </NavLink>
            <div className="mobile-btn-container">
              <a
              className="mobile-contacts-phone"
              href="tel:+78462713030"
              onClick={(e) => console.log("call")}
            ></a>
            <div
              className={
                visibleMenu === "box-navbar-show"
                  ? "mobile-menu-close"
                  : "mobile-menu"
              }
              onClick={(e) => fadeOut(e)}
            ></div>
            </div>
          </div>
        </div>
      </div>
      <nav className={`box-navbar ${visibleMenu}`}>
        <ul className="navbar-nav">{menu}</ul>
      </nav>
      {/* <div className="navbar-location">
         <span className='navbar-location-line'>Мы находимся</span>
        <span className="navbar-location-line">г. Самара</span>
        <span className="navbar-location-line">ул. Лукачёва 4</span>
      </div> */}
      <div className="navbar-contacts">
        <div className="navbar-contacts-desk">
          <a className="navbar-contacts-phone" href="#">
            8 (846) 271-30-30
          </a>
        </div>
        <button
          className="navbar-button-call"
          onClick={(e) => showModalForm(e)}
        >
          Заказать звонок
        </button>
      </div>
    </header>
  );
}

export default Header;
