import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import imgThreeMaster from '../img/threeMasterCadrir.jpg';
import imgThreeMasterMobile from '../img/threeMasterMobile.jpg'
import svgTrainingScratch from '../svg/training-from-scratch.svg';
import svgDocument from '../svg/document.svg';
import svgMoney from '../svg/money.svg';
import svgPractic from '../svg/practic.svg';
import svgGroupPerson from '../svg/group-person.svg';
import svgCosmetics from '../svg/cosmetics-ointment-svgrepo-com.svg';
import imgMotivation from '../img/unsplash_ajzbkcRy-wU.jpg';
import imgHair from '../img/hair-wave-motivation.jpg';
import { NavLink } from 'react-router-dom';


function Main() {
  return (
    <main>
      <div className="container-main">

        
        <div className='about-motivation'>
        <div className='about-motivation-line'></div>
        <div className='about-motivation-rectangle-line'></div>
         <div className='about-motivation-img'><img src={imgMotivation} alt='Выбери мечту'></img></div> 
         <div className='about-motivation-rectangle'></div>
         <div className='about-motivation-img-hair'><img src={imgHair} alt='Выбери мечту'></img></div> 
         <div className='about-motivation-decor'></div>
         <div className='about-motivation-kvadroline'></div>
         <div className='about-motivation-text-wrapper'><span className='about-motivation-text'>Научим профессии мечты и прокачаем навыки</span>
         <div className='choose-course-container'>
        <NavLink className='navlink-choose-course' to='/prof-courses.html'><button className='course-btn-enroll btn-choose-course'>Выбрать курс</button></NavLink>
        </div>
         </div> 
         
        
        
        </div>
        <div className='about-courses'>
          <h1 className='about-courses-title'>Наши курсы это</h1>
          <div className='about-courses-section'>
            <div className='about-courses-section-content'>
              <div className='about-courses-section-img'><img src={svgTrainingScratch} alt='Обучение с нуля'></img></div>
              <div className='about-courses-section-description'>Обучение с нуля для работы в салонах бизнес и премиум-класса</div></div>
            <div className='about-courses-section-content'>
              <div className='about-courses-section-img'><img src={svgMoney} alt='Востребованные услуги'></img></div>
              <div className='about-courses-section-description'>Коммерчески востребованные услуги, для быстрого роста в заработке</div></div>
            <div className='about-courses-section-content'>
              <div className='about-courses-section-img'><img src={svgDocument} alt='Официальные документы'></img></div>
              <div className='about-courses-section-description'>Официальные документы о получении профессии</div></div>
            <div className='about-courses-section-content'>
              <div className='about-courses-section-img'><img src={svgPractic} alt='Отработка на моделях'></img></div>
              <div className='about-courses-section-description'>Отработка на моделях</div></div>
            <div className='about-courses-section-content'>
              <div className='about-courses-section-img'><img src={svgGroupPerson} alt='Выбор обучения'></img></div>
              <div className='about-courses-section-description'>Индивидуальное или групповое обучение</div></div>
            <div className='about-courses-section-content'>
              <div className='about-courses-section-img'><img src={svgCosmetics} alt='Косметика'></img></div>
              <div className='about-courses-section-description'>Расходники и косметика Matrix</div></div>
          </div>
        </div>
        <div className='choose-course-container  look-all-course'>
        <NavLink className='navlink-choose-course' to='/prof-courses.html'><button className='course-btn-enroll btn-choose-course'>Посмотреть все курсы</button></NavLink>
        </div>
        <div className='about-school'>
          <h1 className='about-school-title'>О нас</h1>
          <div className='about-school-content'>
            <div className='about-school-container-img'><img src={window.screen.width > 640 ? imgThreeMaster : imgThreeMasterMobile} alt='Наша команда'></img></div>
            <div className='about-school-container-decription'>
              <div className='about-school-substrate'></div>
              <p>Команда школы стилистов DARIA VLADY с любовью передаст Вам глубокие знания о красоте и моде, стиле и здоровье. Вы сможете делать людей счастливыми через красивые стрижки, окрашивания и уходы.</p>
              <p>Мы создаем притягательную атмосферу красоты и преображения. Раскрываем уникальность каждого человека, соединяя красоту его внутреннего мира и мира, в котором мы живём.</p>
              <p>Делаем то, что любим и любим, то, что делаем!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;