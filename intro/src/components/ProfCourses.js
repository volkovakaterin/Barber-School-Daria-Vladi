import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCourse } from '../redux/actionCreators';
import { NavLink } from 'react-router-dom';

function ProfCourses() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.courses.items);
  const [hoverSection, setHover] = useState('');
  // const [selectFilter, setFilter] = useState('all');
  const [listCourses, setCourses] = useState(items);

  // const filters = [
  //   {title: 'Все курсы',
  //   id: 'all'}, 
  //   {title: 'Курсы парикмахеров',
  //   id: 'hairstyle'}, 
  //   {title: 'Курсы визажистов',
  //   id: 'visagiste'}
  // ]

  const changeHover = (id) => {
    if (hoverSection !== id) {
      setHover(id)
    }
  }

  const goCardCourse = (title, e) => {
    if (window.screen.width < 640 || window.screen.width === 640) {
      dispatch(changeCourse(title, e))
    } else return false;
  }

  const priceOutput = (price) => {
    if(price.group.price !== '') {
return price.group.price
    } else if (price.personal.price !== '') {
      return price.personal.price
    } else return price.defolt.price
  }

  // useEffect(() => {
  //   if(selectFilter === 'all') {
  //     setCourses(items)
  //   }else setCourses(items.filter(i=>(i.id === selectFilter)))
  // }, [items, selectFilter])
  

  // const listFilters = filters.map(i => (
  //   <div key={i.id} className={selectFilter === i.id ? `wrapper_filter__${i.id} select_filter` : `wrapper_filter__${i.id}`} onClick={()=>setFilter(i.id)}>{i.title}</div>
  // ))

  const courses = listCourses.map(i => (
    <><h2 className='header-description-courses'>{i.title}</h2>
      <div className='box-courses'>
        {i.list.map(l => (
          <section key={l.id} className='container-course' onMouseEnter={() => changeHover(l.id)} onMouseLeave={() => setHover('')}>
            <div className={(hoverSection === l.id) ? 'review-course review-course-hover' : 'review-course'}>
              <div className='review-course-text'>{l.content}</div>
              <NavLink className='review-course-btn' onClick={(e) => dispatch(changeCourse(l.titleURL, e))} to={`/prof-courses/${l.titleURL}.html`}>Подробнее</NavLink>
            </div>
            <NavLink className='container-img' onClick={(e) => goCardCourse(l.titleURL, e)} to={`/prof-courses/${l.titleURL}.html`}>
              {l.image !== '' ? <img src={l.image} alt='hairstyle'></img> : false}
            </NavLink>
            <title className='title-course'>{l.title}</title>
            <div className='price-course'>
              <div className='price-group'>
                <span className='price-number'> {priceOutput(l.price)}</span>
                <span className='price-number'> ₽</span>
              </div>
            </div>
          </section>
        ))}
      </div></>
  ))

  return (
    <main>
      <div className="container-profcourses">
        <h1 className='header-prof-courses'>Все курсы</h1>
        {/* {(window.screen.width < 640 || window.screen.width === 640) ? <div className='wrapper_filter'>
          {listFilters}
        </div> : false} */}
        {courses}
      </div>
    </main>
  )
}

export default ProfCourses;