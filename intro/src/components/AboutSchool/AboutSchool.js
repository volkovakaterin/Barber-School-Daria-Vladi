import  './AboutSchool.css';
import { NavLink } from 'react-router-dom';
import imgThreeMaster from '../../img/threeMasterCadrir.jpg';
import imgThreeMasterMobile from '../../img/threeMasterMobile.jpg';
import imgDaria from '../../img/DariaMaster-cut.jpg';


function AboutSchool() {
    return(
    <div className='about_school'>
    <div className='about_school_title_wrapper'>
      <div className='about_school_title_decor'></div>
      <h1 className='about_school_title'>О нас</h1>
    </div>
    <div className='about_school_content_wrapper'>
      <div className='about_school_content_team'>
        <div className='about_school_container_img'>
          <div className='about_school_substrate_team'></div>
          <img src={window.screen.width > 640 ? imgThreeMaster : imgThreeMasterMobile} alt='Наша команда'></img>
          </div>
        <div className='about_school_container_decription'>
        <div className='about_school_decor_team'></div>
        <p>Команда школы стилистов <span>DARIA VLADY</span> с любовью передаст Вам глубокие знания о красоте и моде, стиле и здоровье. Вы сможете делать людей счастливыми через красивые стрижки, окрашивания и уходы.</p>
      </div>
      </div>
      <div className='about_school_content_Daria'>
        <div className='about_school_decor_Daria'></div>
        <div className='about_school_container_decription'>
        <p>Мы создаем притягательную атмосферу красоты и преображения. Раскрываем уникальность каждого человека, соединяя красоту его внутреннего мира и мира, в котором мы живём.</p>
        <p>Делаем то, что любим и любим то, что делаем!</p>
      </div>
        <div className='about_school_container_img'>
        <div className='about_school_substrate_Daria'></div>
          <img src={imgDaria} alt='Daria Master'></img></div>
      </div>
    </div>
    <div className='about_school_btn_container'>
      <div className='about_school_btn_substrate'></div>
      <div className='about_school_btn_decor'></div>
                <NavLink className='navlink_choose_course' to='/prof-courses.html'>
                    <button className='about_school_btn btn_choose_course'>Купить курс в рассрочку</button>
                    </NavLink>
            </div>  
  </div>)
}

export default AboutSchool