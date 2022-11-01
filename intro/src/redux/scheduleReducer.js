import { TAKE_SCHEDULE } from './actions';

const initialState = {
  items: [
    {
      title: 'Курсы парикмахеров с нуля для работы в салонах красоты бизнес класса',
      list: [
        { title: 'Парикмахер', date: { day: '3', month: 'Октября' }, status: 'Идёт набор' },
        { title: 'Блок 1. Уходы для волос', date: { day: '6', month: 'Октября' }, status: 'Идёт набор' },
        { title: 'Блок 2. Салонные укладки', date: { day: '10', month: 'Октября' }, status: 'Идёт набор' },
        { title: 'Блок 3. Женские стрижки', date: { day: '5', month: 'Октября' }, status: 'Идёт набор' },
        { title: 'Блок 4. Мужские стрижки', date: { day: '11', month: 'Октября' }, status: 'Идёт набор' },
        { title: 'Блок 5. Колористика. Топовые окрашивания волос', date: { day: '12', month: 'Октября' }, status: 'Идёт набор' },
        { title: 'Блок 6. Практика с клиентами', date: { day: '', month: '' }, status: 'Идёт набор' },
      ]
    },
    {
      title: 'Курсы профессионального визажиста и макияжа для себя',
      list: [
        { title: 'Курс визажиста', date: { day: '', month: '' }, status: 'Идёт набор' },
        { title: 'Макияж для себя', date: { day: '', month: '' }, status: 'Идёт набор' }
      ]
    }
  ]
}

export default function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case TAKE_SCHEDULE:
      return {
        ...state,
      };
    default:
      return state;
  }
}