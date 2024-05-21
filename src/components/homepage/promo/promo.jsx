import React from 'react';
import './promo.css';
import { Link } from 'react-router-dom';

const Promo = () => {
  return (
    <section className='Promo'>
      <div className='container'>
        <div className="promo_content">
          <div className="promo_cards">
            <div className="qrcard"> присоединяйтесь<br/> к нашему<br/> телеграмм-каналу
            </div>
            <div className="cards2">
          <div className="cardevent"> ссылка
          <button className="registration-button">Регистрация</button>
          </div>

          <div className="cardachivments"> Ознакомьтесь с<br/> нашими<br/> выдающимися достижениями
          <button class="arrow-button">
  <svg class="arrow-icon" viewBox="0 0 24 24">
    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
  </svg>
</button>

          </div>
          </div>
          </div>
      <div className="header_row">
                    <nav className="header_nav">
                        <ul>
                            <li><a href='#!'>О мероприятии</a></li>
                            <li><a href='#!'>Контакты </a></li>
                            <li><a href='#!'>Партнеры</a></li>
                            <li><Link to="/registr" className='header_nav-btn'>Регистрация</Link></li>
                        </ul>
                    </nav>
                </div>
        <div className="promo_texts">
            <div className="promo_text1"> 9 декабря в 16:00
            </div>
          <div className="promo_text2"> exp (sfedu)
          </div>
          <div className="promo_text3"> Инвесторы и бизнес-ангелы exp(sfedu) могут получить 50% cashback по программе Фонда "Сколково" – "Возмещение инвестиций в университетские стартапы"
          </div>
          
        </div>
      </div>
      </div>
    </section>
  );
}

export default Promo;
