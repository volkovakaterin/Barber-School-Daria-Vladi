import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openCreditForm, showFormRegistration } from "../redux/actionCreators";
import tinkoff from "@tcb-web/create-credit";

function Course(props) {
  const dispatch = useDispatch();

  const storeCourses = useSelector((state) => state.courses);
  let chosenCourse = storeCourses.items.map((i) =>
    i.list.filter((l) => l.id === props.id)
  );
  chosenCourse = chosenCourse.filter((i) => i.length !== 0);
  chosenCourse = chosenCourse[0][0];
  const showModalForm = (course, e) => {
    dispatch(showFormRegistration(course));
    document.body.style.overflow = "hidden";
  };

  const imgCourse = (
    <div className="about-course-img">
      <img src={chosenCourse.image} alt="hairstyle"></img>
    </div>
  );

  const buyCredit = (title, price) => {
    const priceNumber = Number(price.replace(/ /g, ""));
    
    tinkoff.create(
      {
        sum: priceNumber,
        items: [{ name: `Курс ${title}`, price: priceNumber, quantity: 1 }],
        demoFlow: "sms",
        promoCode: 'default',
        shopId: "ae622543-a651-4cde-ab98-633fe0e5942f",
        showcaseId: "6008b471-8869-433a-9b9c-ab9b03f122e1",
      },
      { view: "modal" }
    );
  };
 
  tinkoff.methods.on(tinkoff.constants.READY, onMessage);
  tinkoff.methods.on(tinkoff.constants.SUCCESS, onMessage);
  tinkoff.methods.on(tinkoff.constants.ERROR_RESUME, onMessage);
  tinkoff.methods.on(tinkoff.constants.REJECT, onMessage);
  tinkoff.methods.on(tinkoff.constants.CANCEL, onMessage);
 
  function onMessage(data) {
    switch (data.type) {
      case tinkoff.constants.READY:
        console.log('READY', data.meta.iframe.url);
        openCreditForm(dispatch, chosenCourse.title, 'READY');
        tinkoff.methods.off(tinkoff.constants.READY, onMessage);
        break;
        case tinkoff.constants.SUCCESS:
        console.log('SUCCESS', data.meta.iframe.url);
        openCreditForm(dispatch, chosenCourse.title, 'SUCCESS');
        tinkoff.methods.off(tinkoff.constants.SUCCESS, onMessage);
        break;
        case tinkoff.constants.ERROR_RESUME:
        console.log('ERROR_RESUME', data.meta.iframe.url);
        openCreditForm(dispatch, chosenCourse.title, 'ERROR_RESUME');
        tinkoff.methods.off(tinkoff.constants.ERROR_RESUME, onMessage);
        break;
      case tinkoff.constants.REJECT:
        console.log('REJECT', data.meta.iframe.url);
        openCreditForm(dispatch, chosenCourse.title, 'REJECT');
        tinkoff.methods.off(tinkoff.constants.REJECT, onMessage);
        break;
      case tinkoff.constants.CANCEL:
        console.log('CANCEL', data.meta.iframe.url);
        openCreditForm(dispatch, chosenCourse.title, 'CANCEL');
        tinkoff.methods.off(tinkoff.constants.CANCEL, onMessage);
        break;
      default:
        return;
    }
    //data.meta.iframe.destroy();
  }



  return (
    <main>
      <div className="container-about-course">
        <div className="box-img-price">
          {window.screen.width > 640 ? imgCourse : false}
          <div className="description-about-course">
            <h1 className="title-about-course">{chosenCourse.title}</h1>
            {window.screen.width < 640 || window.screen.width === 640
              ? imgCourse
              : false}
            <div className="box-duration-price">
              {chosenCourse.price.defolt && (
                <div className="box-defolt">
                  <h2 className="defolt">ПРОДОЛЖИТЕЛЬОСТЬ ОБУЧЕНИЯ</h2>
                  <div className="duratin-content">
                    {chosenCourse.price.defolt.time}
                  </div>
                  <div className="price-content">
                    <span className="price-size">
                      {chosenCourse.price.defolt.price}
                    </span>
                    <span className="ruble"> ₽</span>
                  </div>
                </div>
              )}
              {chosenCourse.price.group.time !== "" ? (
                <div className="box-group">
                  <h2 className="group">ОБУЧЕНИЕ В ГРУППЕ</h2>
                  <div className="duratin-content">
                    {chosenCourse.price.group.time}
                  </div>
                  <div className="price-content">
                    <span className="price-size">
                      {chosenCourse.price.group.price}
                    </span>
                    <span className="ruble"> ₽</span>
                  </div>
                </div>
              ) : (
                false
              )}
              {chosenCourse.price.personal.time !== "" ? (
                <div className="box-personal">
                  <h2 className="personal">ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ</h2>
                  <div className="duratin-content">
                    {chosenCourse.price.personal.time}
                  </div>
                  <div className="price-content">
                    <span className="price-size">
                      {chosenCourse.price.personal.price}
                    </span>
                    <span className="ruble"> ₽</span>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>
            <div className="course-btn-container">
              <button
                type="button"
                className="course-btn-buy"
                onClick={() =>
                  buyCredit(chosenCourse.title, chosenCourse.price.defolt.price)
                }
              >
                Купить в рассрочку
              </button>
              <button
                className="course-btn-enroll"
                onClick={(e) => showModalForm(chosenCourse.title, e)}
              >
                Записаться
              </button>
            </div>
          </div>
        </div>
        {chosenCourse.fullContent !== "" ? (
          <div className="content-about-course">{chosenCourse.fullContent}</div>
        ) : (
          false
        )}
      </div>
    </main>
  );
}

export default Course;
