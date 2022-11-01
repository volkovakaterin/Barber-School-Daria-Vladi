import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showFormRegistration } from '../redux/actionCreators';
import { nanoid } from 'nanoid';

function Schedule() {
  const dispatch = useDispatch();

  const courses = useSelector(state => state.schedule);

  const showModalForm =(course, e)=>{
    dispatch(showFormRegistration(course));
    document.body.style.overflow = 'hidden';
  }

  const tableCourses = courses.items.map(i => (
  <><div className='header-table'>
      <div className='header-table-cell'>{i.title}</div>
    </div>{i.list.map(l => (<div className='line-table' key={nanoid()}>
        <div className='line-table-cell'><div>{l.title}</div></div>
        <div className='wrapper__table-btn'><button className='table-btn-enroll' onClick={(e) => showModalForm(l.title, e)}>Запись</button></div>
      </div>))}
    </>
  ))
  return (
    <main className='main-schedule'>
      <div className="container-schedule">
        <h1 className='header-schedule'>Записаться на курс</h1>
        <div className='box-schedule'>
          <div className='body-table'>
            {tableCourses}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Schedule;