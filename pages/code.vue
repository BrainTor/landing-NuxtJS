<template>
    <div class="main_code">
        <Modal_ads @close_ads="hadle_ads" :isVisible_ads="is_Visible_ads">
            <div style="font-size: 16.5px; margin-top: 10px;margin-bottom: 10px;">Напишите ваш, номер телефона и
                получите
                скидку<br>на написание программы в размере 10%
            </div>
        </Modal_ads>

        <Modal_Connect :isVisible="this.isVisible" @close="this.togle_Modal" />
        <div ref="nav">

        </div>
        <Nav_Component place="code" @scroll_to="handle_navbar" class="testrr"></Nav_Component>

        <section class="main_section">


            <h1 style="text-align: center; margin-top: 1rem; margin-bottom: 1rem;" class="testr">Я создаю приложения,
                которые работают на разных платформах с использованием современных технологий</h1>
            <p style="text-align: center; font-size: 18.3px;">
                Это идеальный способ воплотить ваши идеи в реальность.
            </p>
            <div
                style="display: flex; justify-content: space-evenly; flex-wrap: wrap; margin-top: 1rem; margin-bottom: 1rem; ">
                <div style="width: 250px; flex-direction: column; align-items: center;
                 display: flex;">
                    <img src="@/assets/img/progs/agile.png" class="img_progs" width="115px" alt="">
                    <h2>Гибкость</h2>
                    <p style="text-align: center; font-size: 18.3px;">Я работаю с заказами разной степени сложности и
                        срочности</p>
                </div>

                <div style="width: 250px; flex-direction: column; align-items: center;
                 display: flex;">
                    <img class="img_progs" src="@/assets/img/progs/platform.png" width="115px" alt="">
                    <h2>Платформы</h2>
                    <p style="text-align: center; font-size: 18.3px;">
                        Создаю мобильные приложения, веб-сайты и приложения для компьютера – всё, что нужно для вашего
                        бизнеса.
                    </p>
                </div>

                <div style="width: 250px; flex-direction: column; align-items: center;
                 display: flex;">
                    <img class="img_progs" src="@/assets/img/progs/effective.png" width="115px" alt="">
                    <h2>Эффективность</h2>
                    <p style="text-align: center; font-size: 18.3px;">Моя цель – быстрое и качественное выполнение
                        задач, чтобы ваш проект был готов в кратчайшие сроки.</p>
                </div>
            </div>
        </section>


        <section>

            <div style="width: 100%; height: fit-content; position: relative;">
                <img :src="img_src" style="width: 100% !important; filter: blur(5px)" class="mobile_progs">
                <div ref="for_cont" class="for_cont_progs"
                    style="position: absolute; z-index: 2; width: 100% !important; top:0%; left:0%;height: 100%; display: flex; justify-content: center; align-items: center;">

                    <div class="block_about">
                        <h1 style="color: white;">Более 30</h1>
                        <h3 style="color: white;">Довольных клиентов</h3>
                    </div>

                    <div class="block_about">
                        <h1 style="color: white;">Более 40</h1>
                        <h3 style="color: white;">Законченных проектов с моим участием</h3>
                    </div>

                    <div class="block_about">
                        <h1 style="color: white;">Более миллиона</h1>
                        <h3 style="color: white;">Написанных строчек кода</h3>
                    </div>

                </div>
            </div>

        </section>

        <section style="background-color: #f0f0f0; padding-bottom: 20px; padding-top: 20px;">
            <h1 style="text-align: center;">
                Начать разработку просто
            </h1>

            <div
                style="width: 100%; justify-content: space-evenly;  align-items: center; display: flex; margin-top: 20px; flex-wrap: wrap;">
                <div style="width: 370px;">
                    <div class="circle_element">
                        <div class="number_inside_circle">1</div>
                    </div>
                    <h2 style="text-align: center;">Индивидуальный подход</h2>
                    <p style="font-size: 18.3px;  text-align: center;">Все ваши требования и предпочтения учитываются во
                        время разработки уникальных решений под ваш проект.</p>
                </div>
                <div style="width: 370px;">
                    <div class="circle_element">
                        <div class="number_inside_circle">2</div>
                    </div>
                    <h2 style="text-align: center;">Первый этап бесплатно</h2>
                    <p style="font-size: 18.3px;  text-align: center;">Получите консультацию и оценку проекта на первом
                        этапе совершенно бесплатно. Мы обсудим все детали и сделаем предварительный план.</p>
                </div>

                <div style="width: 370px;">
                    <div class="circle_element">
                        <div class="number_inside_circle">3</div>
                    </div>
                    <h2 style="text-align: center;">Демократичные и прозрачные цены</h2>
                    <p style="font-size: 18.3px; text-align: center;">Вы всегда знаете, за что платите. У нас
                        фиксированные цены, а также гибкая система правок и доработок без лишних затрат.</p>
                </div>
            </div>

        </section>

        <section style="padding-top: 20px; padding-bottom: 20px;">
            <center>
                <h1>
                    Практические примеры
                </h1>
            </center>
            <Card_progs @toggle="togle_Modal"></Card_progs>
        </section>

        <div ref="section_contact">
            <Footer_Component @toggle="togle_Modal"></Footer_Component>
        </div>

    </div>
</template>

<script>

import Footer_Component from '@/components/Footer_Component.vue';
import Nav_Component from '@/components/Nav_Component.vue';
import Modal_ads from '@/components/Modal_ads.vue'
import Card_progs from '@/components/UI/Card_progs.vue';
import Modal_Connect from '@/components/Modal_Connect.vue';
//import axios from 'axios';
export default {
    name: 'CodePage',
    components: {
        Footer_Component,
        Nav_Component,
        Modal_ads,
        Card_progs,
        Modal_Connect
    },
    head() {
        const env_link = process.env.VUE_APP_LINK;
        return {
            title: 'Разработка на заказ Silver - Tech',
  
            meta: [
                {
                    name: 'description', content: 'Выполение на заказ любой сложности программы, а так же для любой платформы. Квалифицированный и опытный специалист поможет воплотить в жизнь, ваши технические бизнес-идеи'
                },
                {
                    name: 'keywords', content: 'Разработка приложений,Кроссплатформенные приложения,Современные технологии,Индивидуальный подход,Мобильные приложения,Веб-разработка,Автоматизация бизнес-процессов,Примеры проектов,Опытный разработчик'
                },
                {
                    property: 'og:title', content: 'Разработка на заказ Silver - Tech'
                },
                {
                    property: 'og:description', content: 'Выполение на заказ любой сложности программы, а так же для любой платформы. Квалифицированный и опытный специалист поможет воплотить в жизнь, ваши технические бизнес-идеи'
                },
                {
                    property: 'og_url', content: `${env_link}code`
                }
            ]
        }
    },
    data() {
        return {
            is_Visible_ads: false,
            randomTime: Math.round(Math.random() * (12000 - 7000) + 7000),
            startTime: 0,
            endTime: 0,
            local_ref: null,
            isVisible: false,
            img_src: require('@/assets/img/progs/cyber.jpg')
        }
    },
    methods: {
        hadle_ads() {
            this.is_Visible_ads = !this.is_Visible_ads
        },
        togle_Modal() {
            this.isVisible = !this.isVisible
        },
        handle_navbar(data) {
            let check_el = this.$refs['section' + data]
            if (check_el) check_el.scrollIntoView({ behavior: 'smooth' })
        },
        async send_location(ref, time) {

            // await axios.post(`http://${process.env.VUE_APP_BACK_IP}:${process.env.VUE_APP_BACK_PORT}/send_location`, {
            //     location: 'code_page',
            //     referal: ref,
            //     time: time
            // })
        }
    },
    mounted() {
        let el = this.$refs.nav
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (process.client) {
            if (window.innerWidth < 700)
                this.img_src = require('@/assets/img/progs/cyber.jpg')
            else {
                this.$refs.for_cont.style.width = ''
                this.img_src = require('@/assets/img/progs/block.jpg')
            }
        }
        if (sessionStorage.getItem('ads') == null) {
            setTimeout(this.hadle_ads, this.randomTime)
            sessionStorage.setItem('ads', true)
        }
        if (localStorage.getItem('ref') != null)
            this.local_ref = localStorage.getItem('ref')
        this.startTime = new Date();
    },
    async beforeUnmount() {
        this.endTime = new Date();
        let totalTimeSpent = Math.floor((this.endTime - this.startTime) / 1000);
        totalTimeSpent = Math.floor(totalTimeSpent / 60) != 0 ?
            `Минут: ${Math.floor(totalTimeSpent / 60)}, Секунд: ${Math.floor(totalTimeSpent % 60)}` :
            `Секунд: ${Math.floor(totalTimeSpent % 60)}`
        await this.send_location(this.local_ref, totalTimeSpent)
    }
}
</script>

<style scoped>
.for_cont_progs {
    width: 100% !important;
}

.block_about {
    width: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100px;
    margin-left: 1rem;
    margin-right: 1rem;
}

.circle_element {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border-style: solid;
    position: relative;
    margin: 0 auto;
    border-width: 2px;
    border-color: #d43a63 !important;
    background: #ffffff;
}

.number_inside_circle {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #d43a63 !important;
    font-size: 20px;

}
</style>