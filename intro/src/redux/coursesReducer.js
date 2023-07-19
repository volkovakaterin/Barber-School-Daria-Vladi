import { TAKE_COURSES, CHANGE_COURSE } from './actions';
import hairstyleMan from '../img/hairstyleMan.jpg';
import hairCare from '../img/hairCare.jpg';
import hairColoring from '../img/hairColoring.jpg';
import hairCut from '../img/hairCut.jpg';
import hairStylingWithMaster from '../img/hairStylingWithMaster.jpg';
import hairStyling from '../img/hairStyling.jpg';

const initialState = {
  items: [
    {
      title: 'Профессиональные курсы парикмахеров с нуля для работы в салонах красоты бизнес класса:',
      id: 'hairstyle',
      list: [
      {
        title: 'Парикмахер',
        content: 'Блок 1-6. Курс с нуля. Базовый курс для тех, кто хотел бы кардинально изменить свою жизнь - овладеть новой профессией и получать деньги за то, что он любит.',
        fullContent: <div><p>Базовый курс «Парикмахер» разработан для тех, кто хотел бы кардинально изменить свою жизнь - овладеть новой профессией и получать деньги за то, что он любит.</p><p>Мы поможем раскрыть потенциал, покажем перспективы развития в профессии.</p><p>Подбирать цвет волос и стрижку, делать топовые укладки, возвращать здоровье «убитым» волосам.</p><p>Путь к красоте Ваших клиентов будет лёгким !</p></div>,
        price: { group: { time: '2 месяца', price: '30 000' }, personal: { time: '1.5 месяца', price: '40 000' } },
        id: 'jbs96o7',
        titleURL: 'basic-course-hairdresser',
        image: hairStylingWithMaster
      },
      {
        title: 'Блок 1. Уходы для волос',
        content: 'Блок «Уходы за волосами» включает в себя теорию и практику',
        fullContent: <div><p>Блок «Уходы за волосами» включает в себя:</p><p>Теоретический блок:</p><p>-cтроение волоса</p><p>-фазы роста волос</p><p>-ph баланс</p><p>-причины выпадения</p><p>Практика:</p><p>-техника массажа головы и правильного мытья</p><p>-диагностика волос и кожи головы</p><p>-подбор ухода</p><p>-отработка друг на друге и моделях</p></div>,
        price: { group: { time: '5 дней', price: '6 600' }, personal: { time: '3 дня', price: '8 000' } },
        id: 'kuv233',
        titleURL: 'block-1-hair-care',
        image: hairCare
      },
      {
        title: 'Блок 2. Салонные укладки',
        content: 'Что вас ждёт на базовом курсе? Мы научим правильным и актуальным способам укладки волос, с использованием фена и горячих инструментов (плойки, утюг).',
        fullContent: <div><p>Что вас ждёт на базовом курсе?</p><p>Мы научим правильным и актуальным способам укладки волос, с использованием фена и горячих инструментов (плойки, утюг). -стильные укладки горячими инструментами: от плоек разных диаметров до утюга ( с предварительной подготовкой феном) </p><p>-укладки феном, (с гладкой текстурой и небрежной)</p><p>-обзор стайлинга, термозащиты, расчесок и всех инструментов для укладки волос</p><p>-правильная подготовка волос, создание финишной формы</p></div>,
        price: { group: { time: '8 дней', price: '10 750' }, personal: { time: '6 дней', price: '12 750' } },
        id: 'gle94fg',
        titleURL: 'block-2-salon-styling',
        image: hairStyling
      },
      {
        title: 'Блок 3. Женские стрижки',
        content: '',
        fullContent: '',
        price: { group: { time: '15 дней', price: '15 500' }, personal: { time: '7 дней', price: '20 000' } },
        id: 'wy96o3',
        titleURL: 'block-3-women-haircuts',
        image: hairCut
      },
      {
        title: 'Блок 4. Мужские стрижки',
        content: 'Курс мужской мастер поможет вам овладеть основами мастерства мужской стрижки за 12 дней.',
        fullContent: <div><p>Курс мужской мастер поможет вам овладеть основами мастерства мужской стрижки за 12 дней.</p><p>В программе курса: основы классической мужской салонной стрижки, тушевка, работа машинкой для стрижки волос, моделирование, укладка феном, применение стайлинговых средств и создание полного образа.</p><p>Курс мужской мастер также подойдет женским мастерам, которые хотят расширить диапазон салонных услуг, научившись мастерству мужской стрижки.</p><p>По окончании курса выдается Диплом с присвоением квалификации «Мужской мастер».</p><p>Всё о профессиональных инструментах.</p><p>Деление волос на зоны.</p><p>Основы классической мужской салонной стрижки.</p><p>Моделирование.</p><p>Тушевка, сведение волос «на нет».</p><p>Работа машинкой для стрижки волос.</p><p>Оформление бороды и усов.</p><p>Стиль и форма.</p><p>Создание текстуры.</p><p>Укладка феном и применение стайлинговых средств.</p><p>Окрашивание.</p><p>Психология общения с клиентом.</p><p>Отработка на манекенах и клиентах.</p></div>,
        price: { group: { time: '15 дней', price: '11 550' }, personal: { time: '7 дней', price: '15 500' } },
        id: 'ee33i8',
        titleURL: 'block-4-men-haircuts',
        image: hairstyleMan
      },
      {
        title: 'Блок 5. Колористика. Топовые окрашивания волос',
        content: '',
        fullContent: '',
        price: { group: { time: '13 дней', price: '15 000' }, personal: { time: '10 дней', price: '17 000' } },
        id: 'eke9jo',
        titleURL: 'block-5-coloring-top-hair-coloring',
        image: hairColoring
      },
      {
        title: 'Блок 6. Практика с клиентами',
        content: '',
        fullContent: '',
        price: { group: { time: '', price: '' }, personal: { time: '7 дней', price: '5 000' } },
        id: 'oshb37',
        titleURL: 'block-6-practice-with-clients',
        image: hairStylingWithMaster
      }]
    }
  ],
  chosenCourse: ''
}

export default function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case TAKE_COURSES:
      return {
        ...state,
      };
    case CHANGE_COURSE:
      const { chosenCourse } = action.payload;
      return {
        ...state,
        chosenCourse
      };
    default:
      return state;
  }
}