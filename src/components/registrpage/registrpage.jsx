import React, { useState, useEffect, useRef } from 'react';
import './registrpage.css';

function MultiStepForm() {
  const [current, setCurrent] = useState(1);

  const nextStep = () => {
    setCurrent(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrent(prev => prev - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Вы успешно зарегестрировались");
    window.location.reload();
  };

  const slidePage = useRef();
  const progressText = useRef([]);
  const progressCheck = useRef([]);
  const bullet = useRef([]);

  useEffect(() => {
    progressText.current = [...document.querySelectorAll(".step p")];
    progressCheck.current = [...document.querySelectorAll(".step .check")];
    bullet.current = [...document.querySelectorAll(".step .bullet")];

    slidePage.current.style.marginLeft = `-${(current - 1) * 100}%`;

    for (let i = 0; i < bullet.current.length; i++) {
      if (i < current - 1) {
        bullet.current[i].classList.add("active");
        progressCheck.current[i].classList.add("active");
        progressText.current[i].classList.add("active");
      } else {
        bullet.current[i].classList.remove("active");
        progressCheck.current[i].classList.remove("active");
        progressText.current[i].classList.remove("active");
      }
    }
  }, [current]);

  return (
    <section className='regwindow'>
      <div className="progress-bar">
        <div className={`step ${current >= 1 ? 'active' : ''}`}>
          <p></p>
          <div className="bullet"><span> </span></div>
          <div className="check fas fa-check"></div>
        </div>
        <div className={`step ${current >= 2 ? 'active' : ''}`}>
          <p></p>
          <div className="bullet"><span> </span></div>
          <div className="check fas fa-check"></div>
        </div>
        <div className={`step ${current >= 3 ? 'active' : ''}`}>
          <p></p>
          <div className="bullet"><span> </span></div>
          <div className="check fas fa-check"></div>
        </div>
      </div>
    <div className="containerr">
      <header>Регистрация на демо-день SFedU Exponent</header>
      <div className="form-outer">
        <form onSubmit={handleSubmit} ref={slidePage}>
          <div className={`page slide-page ${current === 1 ? 'active' : ''}`}>
            <div className="title">У вас уже есть аккаунт? <a href=""> Войти</a></div>
            <div className="field">
              <div className="label">Имя*</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Фамилия*</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Почта*</div>
              <input type="email" />
            </div>
            <div className="field">
              <div className="label">Пароль*</div>
              <input type="password" />
            </div>
            <h1>Должно быть не менее 8 символов</h1>
            <div className="field">
              <div className="label">Подтверждение пароля*</div>
              <input type="password" />
            </div>
            <div className="field">
              <button type="button" className="firstNext next" onClick={nextStep}>Далее</button>
            </div>
          </div>
          <div className={`page ${current === 2 ? 'active' : ''}`}>
            <div className="title"></div>
            <div className="field">
              <div className="label">Место работы / учебы</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Город*</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Название проекта*</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Описание продукта*</div>
              <input type="text" />
            </div>
          <div className="name__stadii">
            <h1>Стадия проекта</h1></div>
            <div className="stadii">

              <div className="label">Действующий бизнес </div>
              <input type="radio"  name="contact"  class="custom-radio" wfd-id="id9" />
        
              <div className="label">Проработанная идея</div>
              <input type="radio" name="contact"  class="custom-radio" wfd-id="id10" />
           
              <div className="label">Прототип или первые продажи </div>
              <input type="radio"  name="contact"  class="custom-radio" wfd-id="id11"/>

              <div className="label">MVP - продукт с минимальным <br />функционалом </div>
              <input type="radio" name="contact"  class="custom-radio" wfd-id="id12"/>
              
              </div>

            <div className="field btns">
              <button type="button" className="prev-1 prev" onClick={prevStep}>Назад</button>
              <button type="button" className="next-1 next" onClick={nextStep}>Далее</button>
            </div>
          </div>
          <div className={`page ${current === 3 ? 'active' : ''}`}>
            <div className="text__end">          
          <h1>Вы успешно <br />зарегестрированы</h1> </div>
              <div className="end__regist">
              <svg width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="105" cy="105" r="105" fill="#30D158"/>
<g clip-path="url(#clip0_637_4099)">
<path d="M149.327 69.2105C147.295 67.4338 144.202 67.6345 142.42 69.6706L90.3021 129.234L66.465 103.806C64.6148 101.838 61.5214 101.74 59.5488 103.586C57.5762 105.431 57.4734 108.534 59.3236 110.507L86.856 139.875C87.786 140.858 89.0733 141.416 90.4292 141.416H90.5124C91.8976 141.397 93.1995 140.79 94.1148 139.747L149.792 76.1169C151.568 74.0808 151.363 70.9922 149.327 69.2105Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_637_4099">
<rect width="93" height="93" fill="white" transform="translate(58 58)"/>
</clipPath>
</defs>
</svg>

               </div>
               <div className="field btns"> 
              <button type="submit" className="submit">Завершить</button>
               </div>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
}
export default MultiStepForm;
