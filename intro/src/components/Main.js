
import imgMotivation from '../img/unsplash_ajzbkcRy-wU.jpg';
import imgHair from '../img/hair-wave-motivation.jpg';
import { NavLink } from 'react-router-dom';
import AboutCourses from './AboutCourses/AboutCourses';
import AboutSchool from './AboutSchool/AboutSchool';


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
        <AboutCourses/>
        <AboutSchool/>
      </div>
    </main>
  )
}

export default Main;