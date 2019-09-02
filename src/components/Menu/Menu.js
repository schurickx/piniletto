import React from 'react';
import './menu.css'
import item1 from '../../assets/img/nav1.png'
import item2 from '../../assets/img/nav2.png'
import item3 from '../../assets/img/nav3.png'
import item4 from '../../assets/img/nav4.png'
import item5 from '../../assets/img/nav5.png'
import item6 from '../../assets/img/nav6.png'
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <nav className="menu">
        <div className="menu-item">
          <div className="menu-item__link"><Link to="/interior_beds"><img src={item1} alt="menu-item_1"/>
              <span className="menu-item__text">Интерьерные кровати</span>
            </Link></div>
        </div>
        <div className="menu-item">
          <div className="menu-item__link"><Link to="/children_for_beds"><img src={item2} alt=""/><span className="menu-item__text">Кровати
                для детей</span></Link></div>
        </div>
        <div className="menu-item">
          <div className="menu-item__link"><Link to="/bed_house"><img src={item3} alt=""/><span
                className="menu-item__text">Кровать-домик</span></Link></div>
        </div>
        <div className="menu-item">
          <div className="menu-item__link"><Link to="/sofa"><img src={item4} alt=""/><span
                className="menu-item__text">Софа</span></Link></div>
        </div>
        <div className="menu-item">
          <div className="menu-item__link"><Link to="/stand"><img src={item5} alt=""/><span className="menu-item__text">Шкафы и
                тумбы</span></Link></div>
        </div>
        <div className="menu-item">
          <div className="menu-item__link"><Link to="/mattresses"><img src={item6} alt=""/><span
                className="menu-item__text">Матрасы</span></Link></div>
        </div>
      </nav>
    );
};

export default Menu;