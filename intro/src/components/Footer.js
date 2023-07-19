import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {nanoid} from 'nanoid';
import {NavLink, Navigate} from'react-router-dom';

function Footer() {
  const links = [
    {link: '/', name: 'Главная', key: nanoid()},
    {link: '/prof-courses.html', name: 'Профессиональные курсы', key: nanoid()},
    {link: '/schedule.html', name: 'Записаться на курс', key: nanoid()},
    {link: '/sign-as-model.html', name: 'Записаться моделью', key: nanoid()},

];
const menu = links.map((element) =>
    <li key={element.key} className="nav-item-footer">
     <NavLink key={element.key} className='nav-link-footer' to={element.link}>{element.name}</NavLink>   
    </li>
     );
    return (
      <footer className="container-footer">
        <div className='contacts-footer'>
          <div className='title-contacts-footer'>Контакты</div>
          <div className='number-footer'>8 (846) 271-30-30</div>
          <div className='address-footer'>
            <p>г. Самара</p>
            <p>ул. Лукачёва 4</p>
          </div>
        </div>
        <ul className='nav-footer'>
          {menu}
        </ul>
        <div className='social-net-footer'>
          <div className='title-social-net'>Мы в социальных сетях</div>
          {/* <div>TELEGRAM</div> */}
          <div><a className='link-socialnet' href='https://wa.me/79397599901'>WHATS APP</a></div>
          <div><a className='link-socialnet' href='https://vk.com/dariavlady.salon'>VK</a></div>
        </div>
      </footer>
    )
  }

  export default Footer;