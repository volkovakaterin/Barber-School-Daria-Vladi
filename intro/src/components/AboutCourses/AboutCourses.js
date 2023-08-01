import  './AboutCourses.css';
import { NavLink } from 'react-router-dom';
import blondImg from '../../img/blond.jpg';
import svgTrainingScratch from '../../svg/training-from-scratch.png';
import svgDocument from '../../svg/document.png';
import svgMoney from '../../svg/money.png';
import svgPractic from '../../svg/practic.png';
import svgGroupPerson from '../../svg/group-person.png';
import svgCosmetics from '../../svg/cosmetics.png';

function AboutCourses() {
    return (
        <div className='about_courses'>
            <h1 className='about_courses_title'>Наши курсы это</h1>
            <div className='about_courses_section'>
                <div className='about_courses_advantage'>
                    <div className='about_courses_content'>
                    <div className='about_courses_img'><img src={svgTrainingScratch} alt='Обучение с нуля'></img></div>
                    <div className='about_courses_content_decor'></div>
                    <div className='about_courses_description'>Обучение с нуля для работы в салонах бизнес и премиум-класса</div></div>
                <div className='about_courses_content'>
                    <div className='about_courses_img'><img src={svgMoney} alt='Востребованные услуги'></img></div>
                    <div className='about_courses_content_decor'></div>
                    <div className='about_courses_description'>Коммерчески востребованные услуги, для быстрого роста в заработке</div></div>
                <div className='about_courses_content'>
                    <div className='about_courses_img'><img src={svgDocument} alt='Официальные документы'></img></div>
                    <div className='about_courses_content_decor'></div>
                    <div className='about_courses_description'>Официальные документы о получении профессии</div></div>
                <div className='about_courses_content'>
                    <div className='about_courses_img'><img src={svgPractic} alt='Отработка на моделях'></img></div>
                    <div className='about_courses_content_decor'></div>
                    <div className='about_courses_description'>Отработка навыков на моделях</div></div>
                <div className='about_courses_content'>
                    <div className='about_courses_img'><img src={svgGroupPerson} alt='Выбор обучения'></img></div>
                    <div className='about_courses_content_decor'></div>
                    <div className='about_courses_description'>Индивидуальное или групповое обучение</div></div>
                <div className='about_courses_content'>
                    <div className='about_courses_img'><img src={svgCosmetics} alt='Косметика'></img></div>
                    <div className='about_courses_content_decor'></div>
                    <div className='about_courses_description'>Расходники и косметика Matrix</div></div>
                </div>
                <div className='about_courses_right'>
                    <div className='about_courses_decor'>
                    <img className='about_courses_image' src={blondImg} alt='Blond'></img>
                    </div>
                     <div className='choose_course_container'>
                <NavLink className='navlink_choose_course' to='/prof-courses.html'>
                    <button className='btn_choose_course'>Посмотреть все курсы</button>
                    </NavLink>
            </div>  
                </div>
                 
            </div>
            
        </div>
    ) }

    export default AboutCourses;
