import './Block.css'

const Block = () => {
    return (
        <section className="block">
            <div className="container">
            <div className="block__content">
            <div className="block__card">
                
                <div className="block__cardtext1">
                    <div className="blocktitle1">50</div>
                    <div className="blockdesc1">крупных <br/> компаний- <br/>партнеров</div>
                </div>
               
                <div className="block__cardtext2">
                <div className="blocktitle2">1 000 000₽ +</div>
                <div className="blockdesc2">общая стоимость призовый фондов </div>
               
                    <div className="block__cardtext3">
                        <div className='blocktitle3'>45</div>
                        <div className='blockdesc3'>экспертов и инвесторов <br/> со всей России</div>
                    </div>



                </div>

            </div>
                <div className="block__text">

                    <div className="block__maintitle">Наши ожидания
                    </div>
                    <div className="block1">
                    <div className="block__title1">Участники
                    </div>
                    <div className="block__desc1">Мы ждем Уверенных в Себе Спикеров с Проектами в Сфере ИТ на Любых Стадиях Готовности! Конкретизируйте Ваши Потребности и Покажите, Что Вы Готовы Предложить Инвестору в Обмен на Поддержку Вашего Проекта!
                    </div>
                    </div>
                    <div className="block2">
                    <div className="block__title2">Партнеры
                    </div>
                    <div className="block__desc2">Заинтересованность в венчурных инвестициях и готовность высказать экспертное мнение о проектах</div>
                    </div>
                </div>
            </div>
            
            </div>
        </section>
    );
}

export default Block;