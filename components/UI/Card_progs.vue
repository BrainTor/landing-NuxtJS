<template>
    <div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding-left: 20px; padding-right: 20px; ">
            <button @click="next_or_before('left')" class="contoll_card"><fa icon="circle-left" aria-label = "Предыдущий"/></button>
            <div class="central_continer">
                <transition :name="transitionName" mode="out-in">
                    <img :src="img_default" class="img_card" :key="img_default">
                </transition>
                <transition :name="transitionName" mode="out-in">
                    <h3 :key="company_default">{{ company_default }}</h3>
                </transition>
                <transition :name="transitionName" mode="out-in">
                    <p v-html="text_default" :key="text_default" class="text-block mobile_text"></p>
                </transition>
            </div>
            <button @click="next_or_before('right')" class="contoll_card" aria-label = "Следующий">
                <fa icon="circle-right" />
            </button>
      
        </div>
        <center>
            <button class="connect_with_me" @click ="toggle_con" aria-label = "Свяжитесь со мной">
                <fa icon="link" /> Свяжитесь со мной
            </button>
        </center>
    </div>
    

</template>

<script>
import logo_rg from '@/assets/img/progs/logo/logo_rg.png'
import logo_delphin from '@/assets/img/progs/logo/logo_delphin.png'
import logo_dela from '@/assets/img/progs/logo/logo_dela.png'
import logo from '@/assets/img/progs/logo/logo.png'
export default {
    name: 'Card_progs',
    data() {
        return {
            object: {
                text: [
                    `
                    Компания <strong>ЦТТ Robograde</strong>  — это ведущая школа робототехники, специализирующаяся на обучении и развитии технических навыков у детей и подростков. Для этой компании я разработал специализированный защищённый веб-браузер, который используется для демонстрации учебных материалов.
                    <br>
                    Основная задача браузера — обеспечить безопасный просмотр методических материалов, защищённых авторским правом, без возможности их копирования или передачи третьим лицам. Это помогает компании сохранить интеллектуальную собственность и защитить важные образовательные ресурсы.
                    <br>
                    Технологическая основа проекта — <strong>JavaFX</strong>, которая позволила реализовать высоконадёжное и гибкое решение с учётом всех требований безопасности.              
                    `, 
                    
                    `
                    Компания <strong>ТК Дельфин</strong> — это динамично развивающаяся компания, занимающаяся розничной и оптовой торговлей электротехнической продукцией. Для повышения эффективности бизнес-процессов был разработан специализированный программный комплекс для автоматизации складского учета.
                    <br>
                    Это решение интегрируется напрямую с приложением 1С, что обеспечивает беспрепятственный обмен данными между складом и системой учета. Программа позволяет автоматизировать основные процессы на складе — от поступления товаров до их инвентаризации и отгрузки. Это значительно снижает риск ошибок, ускоряет работу сотрудников и повышает точность учета.
                    <br>
                    Разработка выполнена с использованием технологии <strong>Java для Android</strong>, что обеспечивает удобство работы на мобильных устройствах и возможность использования программы в любом месте склада.
                    `,
                    
                    `
                    Компания <strong>ЗАО Деловой Мир</strong>  — это успешно развивающееся предприятие, занимающееся выполнением электромонтажных работ, а также розничной и оптовой торговлей электротехнической продукцией. Для повышения онлайн-присутствия и удобства взаимодействия с клиентами для компании был разработан современный веб-сайт.
                    <br>
                    Основная задача сайта — предоставить пользователям удобную платформу для получения информации об услугах и продукции компании, а также для оформления заказов. Веб-сайт отличается интуитивно понятным интерфейсом, адаптивным дизайном и высокой скоростью работы, что обеспечивает комфортное использование как на стационарных компьютерах, так и на мобильных устройствах.
                    <br>
                    Для создания этого решения были использованы следующие технологии:
                    <strong>HTML, CSS и JavaScript</strong>  — для создания привлекательного и функционального пользовательского интерфейса.
                    <br>
                    <strong>Express.js</strong> — для обеспечения надежной работы серверной части и обработки запросов.
                    Данный веб-сайт стал важным инструментом для компании, способствующим привлечению новых клиентов и улучшению взаимодействия с существующими.
                    `,
                    
                    `
                    Напоследок, хочу привести в качестве примера сайт, на котором вы сейчас находитесь. Этот веб-ресурс был полностью спроектирован и разработан мной, с нуля, включая архитектуру и все этапы реализации.
                    <br>
                    Для разработки я использовал:
                    <br>
                    <strong>Vue3JS</strong> — для создания современного, динамичного и отзывчивого пользовательского интерфейса.
                    <br>
                    <strong>NestJS</strong> — для построения надежной и масштабируемой серверной части, что гарантирует стабильную работу и высокую производительность сайта.
                    Этот проект демонстрирует мои навыки в области фронтенд и бэкенд разработки, а также мою способность создавать комплексные веб-решения, ориентированные на удобство пользователей и высокие требования к безопасности и производительности.
                    `
                ], 
                companys: [
                    "RoboGrade",
                    "ТК Дельфин",
                    "ЗАО Деловой Мир",
                    "Silver-tech"
                ],
                imgs:[
                    logo_rg,
                    logo_delphin,
                    logo_dela,
                    logo
                ]
            },
            text_default: '',
            company_default: '',
            img_default: '',
            current_number: 0,
            transitionName: 'slide-right' // По умолчанию слайд вправо
        }
    },
    mounted() {
        this.text_default = this.object.text[0]
        this.company_default = this.object.companys[0]
        this.img_default = this.object.imgs[0]
    },
    methods: {
        next_or_before(place) {
            let next_number
            if (place == 'right') {
                next_number = this.current_number + 1 == this.object.text.length ? 0 : this.current_number + 1
                this.transitionName = 'slide-left' // Смена направления вправо
            } else {
                next_number = this.current_number == 0 ? this.object.text.length - 1 : this.current_number - 1
                this.transitionName = 'slide-right' // Смена направления влево
            }
            this.text_default = this.object.text[next_number]
            this.company_default = this.object.companys[next_number]
            this.img_default = this.object.imgs[next_number]
            this.current_number = next_number
        }
        ,toggle_con(){
            this.$emit("toggle")
        }
    }
}
</script>

<style>
.img_card {
    width: 155px;
    margin-top: 20px;
}
h3, p {
    margin: 10px 0;
}

/* Анимация вправо */
.slide-right-enter-active, .slide-right-leave-active {
    transition: transform 1s ease, opacity 1s ease;
}

.slide-right-enter, .slide-right-leave-to {
    opacity: 0;
    transform: translateX(100vw); /* Сдвиг вправо за пределы экрана */
}

.slide-right-leave-active {
    transform: translateX(-100vw); /* Уход влево за пределы экрана */
}

/* Анимация влево */
.slide-left-enter-active, .slide-left-leave-active {
    transition: transform 1s ease, opacity 1s ease;
}

.slide-left-enter, .slide-left-leave-to {
    opacity: 0;
    transform: translateX(-100vw); /* Сдвиг влево за пределы экрана */
}

.slide-left-leave-active {
    transform: translateX(100vw); /* Уход вправо за пределы экрана */
}

.contoll_card {
    width: 40px;
    height: 40px;
    background-color: transparent;
    color: #d43a63 !important;
    font-size: 35px;
    border: 0px;
    cursor: pointer;
}
.central_continer{
    width: 600px;
    padding-left: 10px;
    padding-right: 10px;
}
.connect_with_me {
    background-color: var(--main-color);
    width: 450px;
    margin-top: 10px;
    height: 50px;
    outline: none;
    border: 0px;
    transition: 0.6s all;
    font-size: 17px;
    border-radius: 8px;
    cursor: pointer;

}

.text-block{
    font-size: 18.3px;
}
</style>
