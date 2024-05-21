import React, { useEffect, useRef, useState } from 'react';
import './achivments.css';

const Achivments = () => {
  const [active, setActive] = useState(0);
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);

  useEffect(() => {
    const items = itemsRef.current;
    function loadShow() {
      items.forEach((item, index) => {
        item.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        if (index === active) {
          item.style.transform = 'none';
          item.style.zIndex = 1;
          item.style.filter = 'none';
          item.style.opacity = 1;
        } else if (index > active) {
          const stt = index - active;
          item.style.transform = `translateX(${200 * stt}px) scale(${1 - 0.1 * stt})`;
          item.style.zIndex = -stt;
          item.style.filter = 'blur(1px)';
          item.style.opacity = stt > 2 ? 0 : 0.6;
        } else {
          const stt = active - index;
          item.style.transform = `translateX(${-200 * stt}px) scale(${1 - 0.1 * stt})`;
          item.style.zIndex = -stt;
          item.style.filter = 'blur(1px)';
          item.style.opacity = stt > 2 ? 0 : 0.6;
        }
      });
    }
    loadShow();
  }, [active]);

  const nextSlide = () => {
    setActive((prevActive) => (prevActive + 1 < itemsRef.current.length ? prevActive + 1 : prevActive));
  };

  const prevSlide = () => {
    setActive((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : prevActive));
  };

  return (
    <section className="Slider">
      <div className="slider">
        <div className="item" ref={(el) => (itemsRef.current[0] = el)}>
          <div className="cardheader">
            Итоги<br/>exp(sfedu)<br/>июнь 2023
          </div>
          <div className="mtext">
            Лучшие студенческие команды награждены ценными призами от банка ПАО "Центр-Инвест". Денежным призом от центра трансфера технологий ЮФУ отмечен один из проектов. 
            Подписано двустороннее соглашение о сотрудничестве  между ЮФУ и музеем "Самбекские высоты". С представителями передовых предприятий России проведен круглый стол, 
            посвященный обсуждению развития направлений по роботехнике, аэронету, поддержке начинающих стартап-проектов, венчурным инвестициям
          </div>
          <div className="bold">
            2<br/>0<br/>2<br/>3
          </div>
        </div>
        
        <div className="item" ref={(el) => (itemsRef.current[1] = el)}>
          <div className="cardheader">
            Итоги<br/>exp(sfedu)<br/>декабрь 2022
          </div>
          <div className="mtext">
          Лучшие студенческие команды награждены ценными призами от банка ПАО "Центр-Инвест". Денежным призом от центра трансфера технологий ЮФУ отмечен один из проектов. 
            Подписано двустороннее соглашение о сотрудничестве  между ЮФУ и музеем "Самбекские высоты". С представителями передовых предприятий России проведен круглый стол, 
            посвященный обсуждению развития направлений по роботехнике, аэронету, поддержке начинающих стартап-проектов, венчурным инвестициям
          </div>
          <div className="bold">
            2<br/>0<br/>2<br/>2
          </div>
        </div>

        <div className="item" ref={(el) => (itemsRef.current[2] = el)}>
          <div className="cardheader">
            Итоги<br/>exp(sfedu)<br/>май 2022
          </div>
          <div className="mtext">
            Студенты ЮФУ показали выдающиеся результаты на соревнованиях по программированию и робототехнике. Победители были награждены ценными призами и стипендиями. Обсуждались перспективы дальнейшего развития студенческих проектов и стартапов.
          </div>
          <div className="bold">
            2<br/>0<br/>2<br/>2
          </div>
        </div>

        <div className="item" ref={(el) => (itemsRef.current[3] = el)}>
          <div className="cardheader">
            Итоги<br/>exp(sfedu)<br/>ноябрь 2021
          </div>
          <div className="mtext">
          18 проектов 3 проекта в секции «Молодые стартаперы» 5 проектов в стендовой секции &lt;30 экспертов и инвесторов &lt;100 гостей Фидбек от партнеров и переговоры нескольких компаний с командами проектов в процессе…
          </div>
          <div className="bold">
            2<br/>0<br/>2<br/>1
          </div>
        </div>

        <div className="item" ref={(el) => (itemsRef.current[4] = el)}>
          <div className="cardheader">
            Итоги<br/>exp(sfedu)<br/>апрель 2021
          </div>
          <div className="mtext">
          9 проектов
          &lt;15 экспертов и инвесторов
          &lt;30 гостей Компания Umbrella IT первой инвестировала в решение для планирования технического обслуживания инженерных объектов на основе искусственного интеллекта. Венчурные инвестиции составили 100т.р.
          </div>
          <div className="bold">
            2<br/>0<br/>2<br/>1
          </div>
        </div>

        {active > 0 && (
          <button id="prev" onClick={prevSlide}>
            <svg width="55" height="96" viewBox="0 0 55 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.4037 43.4038C-0.134704 45.9422 -0.134704 50.0578 2.4037 52.5962L43.7695 93.962C46.3079 96.5004 50.4234 96.5004 52.9619 93.962C55.5003 91.4235 55.5003 87.308 52.9619 84.7696L16.1923 48L52.9619 11.2304C55.5003 8.69203 55.5003 4.57646 52.9619 2.03805C50.4234 -0.50036 46.3079 -0.50036 43.7695 2.03805L2.4037 43.4038ZM7 41.5H6.9999L6.9999 54.5H7L7 41.5Z" fill="white" />
            </svg>
          </button>
        )}
        {active < itemsRef.current.length - 1 && (
          <button id="next" onClick={nextSlide}>
            <svg width="55" height="96" viewBox="0 0 55 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M52.5963 52.5962C55.1347 50.0578 55.1347 45.9422 52.5963 43.4038L11.2305 2.03806C8.69214 -0.500349 4.57657 -0.500349 2.03816 2.03806C-0.500249 4.57647 -0.500249 8.69204 2.03816 11.2304L38.8077 48L2.03816 84.7696C-0.500249 87.308 -0.500249 91.4235 2.03816 93.9619C4.57657 96.5003 8.69214 96.5003 11.2305 93.9619L52.5963 52.5962ZM48 54.5H48.0001V41.5H48V54.5Z" fill="white" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default Achivments;
