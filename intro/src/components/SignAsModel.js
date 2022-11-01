import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function SignAsModel() {
    return (
      <main className='main-sign-model'>
       <div className="container-sign-model">
        <h1 className='header-sign-model'>Записаться моделью</h1>
        <div className='box-sign-model'>
          <div className='line-sign-model'>Для записи позвоните нам или напишите в WhatsApp:</div>
          <div className='number-sign-model'>+7 939 759-99-01</div>
        </div>
      </div> 
      </main>
      
    )
  }

  export default SignAsModel;