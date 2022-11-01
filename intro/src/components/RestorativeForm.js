import parsePhoneNumber from'libphonenumber-js';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideForm, sendRegistrationForm } from '../redux/actionCreators';

function RestorativeForm() {
  const store = useSelector(state => state.form);
  const dispatch = useDispatch();
  const [visibleForm, setVisibleForm] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [chosenCourse, setChosenCourse] = useState('');
  const [valueName, setValueName] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [emptyPhone, setEmptyPhone] = useState(false);
  const [error, setError] = useState(null);

  const hideModalForm = (e) => {
    e.preventDefault();
    dispatch(hideForm());
    document.body.style.overflow = 'visible';
    setValueName('');
    setValuePhone('');
  }

  const handlerSendForm = (e) => {
    e.preventDefault();
    if(valuePhone.trim() !== '') {
    setEmptyPhone(false);
    const dataMessage = { name: valueName, phone: valuePhone, course: chosenCourse};
    sendRegistrationForm(dispatch, dataMessage);
    } else  setEmptyPhone(true) 
  }

  const normalizePhoneNumber = (value) => {
    console.log(typeof value);
    const phoneNumber = parsePhoneNumber(value, 'RU');
    console.log(phoneNumber);
    if(!phoneNumber) {
      setValuePhone(value)
    } else setValuePhone(phoneNumber.formatInternational());
  }

  useEffect(() => {
    setVisibleForm(store.showForm);
    setChosenCourse(store.course);
    setShowReport(store.successSending);
    setError(store.error);
  }, [store])

  return (
    <div className={visibleForm ? "container-form container-form-show" : "container-form"}>
      <div className='box-all-boxes'>
       <button className='hide-form-back-call' onClick={(e) => hideModalForm(e)}></button>
      <div className={showReport ? 'box-report-show' : 'box-report-hide'}>{chosenCourse !== '' ? 'Благодарим за запись на наш обучающий курс. Мы свяжемся с вами в ближайшее время' : 'Благодарим за интерес к нашим обучающим курсам. Мы свяжемся с вами в ближайшее время'}</div>
      <div className={error !== null  ? 'box-error-show' : 'box-error-hide'}>К сожалению, сервер сейчас не отвечает. Пожалуйста, свяжитесь с нами по телефону<p>8 (846) 271-30-30</p></div>
      <form className={showReport || error !== null ? 'form-name-phone-hide' : 'form-name-phone-show'} name='form'>
        {chosenCourse !== '' ? <div className='box-form-course'><span>{chosenCourse}</span></div> : false}
        <div className='wrapper-form-name'>
          <input className='input-name' id='back-call-name' name='name' type='text' placeholder='Ваше имя' onChange={e => setValueName(e.target.value)} value={valueName} />
        </div>
        <div className='wrapper-form-phone'>
          <label className={emptyPhone ? 'label-phone-show' : 'label-phone-hide'} htmlFor='back-call-phone'>Введите номер телефона!</label>
          <input className='input-phone' id='back-call-phone' name='phone' type='tel' required placeholder='Номер телефона*' onChange={e => normalizePhoneNumber(e.target.value)} value={valuePhone} />
        </div>
        <div className='wrapper-form-btn'>
          <button className='btn-back-call-phone' type='submit' onClick={(e) => handlerSendForm(e)}>{chosenCourse !== '' ? 'Записаться на курс' : 'Заказать звонок'}</button>
        </div>
      </form> 
      </div>
    </div>
  )
}

export default RestorativeForm;