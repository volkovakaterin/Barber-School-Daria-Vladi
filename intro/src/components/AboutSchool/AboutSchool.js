import  './AboutSchool.css';
import { NavLink } from 'react-router-dom';
import imgThreeMaster from '../../img/threeMasterCadrir.jpg';
import imgThreeMasterMobile from '../../img/threeMasterMobile.jpg'


function AboutSchool() {
    return(
    <div className='about_school'>
    <h1 className='about_school_title'>О нас</h1>
    <div className='about_school_content'>
      <div className='about_school_container_img'><img src={window.screen.width > 640 ? imgThreeMaster : imgThreeMasterMobile} alt='Наша команда'></img></div>
      <div className='about_school_container_decription'>
        <div className='about_school_substrate'></div>
        <p>Команда школы стилистов DARIA VLADY с любовью передаст Вам глубокие знания о красоте и моде, стиле и здоровье. Вы сможете делать людей счастливыми через красивые стрижки, окрашивания и уходы.</p>
        <p>Мы создаем притягательную атмосферу красоты и преображения. Раскрываем уникальность каждого человека, соединяя красоту его внутреннего мира и мира, в котором мы живём.</p>
        <p>Делаем то, что любим и любим, то, что делаем!</p>
      </div>
    </div>
    <div className='choose_course_container'>
                <NavLink className='navlink_choose_course' to='/prof-courses.html'>
                    <button className='btn_choose_course'>Купить курс в рассрочку</button>
                    </NavLink>
            </div>  
  </div>)
}

export default AboutSchool