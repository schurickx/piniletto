import React from 'react';
import './header.css'
import logo from '../../assets/img/logo.png'



const Header = () => {
    return (
        <header className="header">
        <nav className="header-nav">
          <a href="#" className="header-nav__link">О компании</a>
          <a href="#" className="header-nav__link">Как заказать</a>
          <a href="#" className="header-nav__link">Оплата</a>
          <a href="#" className="header-nav__link">Доставка</a>
          <a href="#" className="header-nav__link">Материалы</a>
          <a href="#" className="header-nav__link">Гарантии</a>
          <a href="#" className="header-nav__link">Контакты</a>
        </nav>
        <div className="header-logo">
          <a href="#" className="header-logo__link"><img src={logo} alt="logo"/></a>
          <h1>Дизайн и производство мебели</h1>
        </div>
        <div className="header-contacts">
          <div className="header-contacts__text">Тел. +7 904 653-85-55</div>
          <div className="header-contacts__desc">С <strong>8:00</strong> до <strong>20:00</strong> без выходных</div>
        </div>
        <div className="header-search">
          <input type="search" name="" id="" className="header-search__input" placeholder="Поиск"/>
          <button>Поиск</button>
        </div>
      </header>
    );
};

export default Header;