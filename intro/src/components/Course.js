import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showFormRegistration } from '../redux/actionCreators';


function Course(props) {
  const dispatch = useDispatch();

  const storeCourses = useSelector(state => state.courses);
  let chosenCourse = storeCourses.items.map(i => (i.list.filter(l => (l.id === props.id))));
  chosenCourse = chosenCourse.filter(i => i.length !== 0);
  chosenCourse = chosenCourse[0][0];
  const showModalForm = (course, e) => {
    dispatch(showFormRegistration(course));
    document.body.style.overflow = 'hidden';
  }

  const imgCourse = <div className='about-course-img'>
    <img src={chosenCourse.image} alt='hairstyle'></img>
  </div>

  return (
    <main>
      <div className="container-about-course">
        <div className='box-img-price'>
          {(window.screen.width > 640) ? imgCourse : false}
          <div className='description-about-course'>
            <h1 className='title-about-course'>{chosenCourse.title}</h1>
            {(window.screen.width < 640 || window.screen.width === 640) ? imgCourse : false}
            <div className='box-duration-price'>
              {chosenCourse.price.defolt && <div className='box-defolt'>
                <h2 className='defolt'>ПРОДОЛЖИТЕЛЬОСТЬ ОБУЧЕНИЯ</h2>
                <div className='duratin-content'>{chosenCourse.price.defolt.time}</div>
                <div className='price-content'>
                  <span className='price-size'>{chosenCourse.price.defolt.price}</span>
                  <span className='ruble'> ₽</span>
                </div>
              </div>}
              {chosenCourse.price.group.time !== '' ? <div className='box-group'>
                <h2 className='group'>ОБУЧЕНИЕ В ГРУППЕ</h2>
                <div className='duratin-content'>{chosenCourse.price.group.time}</div>
                <div className='price-content'>
                  <span className='price-size'>{chosenCourse.price.group.price}</span>
                  <span className='ruble'> ₽</span>
                </div>
              </div> : false} 
              {chosenCourse.price.personal.time !== '' ? <div className='box-personal'>
                <h2 className='personal'>ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ</h2>
                <div className='duratin-content'>{chosenCourse.price.personal.time}</div>
                <div className='price-content'>
                  <span className='price-size'>{chosenCourse.price.personal.price}</span>
                  <span className='ruble'> ₽</span>
                </div>
              </div> : false}
            </div>
            <button className='course-btn-enroll' onClick={(e) => showModalForm(chosenCourse.title, e)}>Записаться</button>
          </div>
        </div>
        {chosenCourse.fullContent !== '' ? <div className='content-about-course'>{chosenCourse.fullContent}</div> : false}
      </div>
    </main>

  )
}

export default Course;