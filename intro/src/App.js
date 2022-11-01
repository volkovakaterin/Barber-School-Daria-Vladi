import React , {useEffect, useState} from 'react';
import {Routes, Route} from'react-router-dom';
import { useSelector} from 'react-redux';
import './index';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ProfCourses from './components/ProfCourses';
import Schedule from './components/Schedule';
import SignAsModel from './components/SignAsModel';
import Course from './components/Course';
import RestorativeForm from './components/RestorativeForm';


function App() {

  const courses = useSelector(state=>state.courses);
  const [urlCourse, setURL] = useState(courses.chosenCourse);

  useEffect(() => {
    setURL(courses.chosenCourse)
  }, [courses.chosenCourse])


  return (
    <>
    <Header/>    
    <Routes>     
      <Route path="/" element={<Main/>} />
      <Route path="/prof-courses.html" element={<ProfCourses/>}/>
      <Route path="/schedule.html" element={<Schedule/>}/>  
      <Route path="/sign-as-model.html" element={<SignAsModel/>}/>
      <Route path={`/prof-courses/basic-course-hairdresser.html`} element={<Course id = 'jbs96o7'/>}/>
      <Route path={`/prof-courses/block-1-hair-care.html`} element={<Course id = 'kuv233'/>}/>
      <Route path={`/prof-courses/block-2-salon-styling.html`} element={<Course id = 'gle94fg'/>}/>
      <Route path={`/prof-courses/block-3-women-haircuts.html`} element={<Course id = 'wy96o3'/>}/>
      <Route path={`/prof-courses/block-4-men-haircuts.html`} element={<Course id = 'ee33i8'/>}/>
      <Route path={`/prof-courses/block-5-coloring-top-hair-coloring.html`} element={<Course id = 'eke9jo'/>}/>
      <Route path={`/prof-courses/block-6-practice-with-clients.html`} element={<Course id = 'oshb37'/>}/>
      <Route path={`/prof-courses/vysagyst.html`} element={<Course id = 'hvw3lh36'/>}/>
      <Route path={`/prof-courses/makeup-youself.html`} element={<Course id = 'nso84ngu'/>}/>
    </Routes>
    <Footer/>
    <RestorativeForm/>
    </>
    
  );
}

export default App;
