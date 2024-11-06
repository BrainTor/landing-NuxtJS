<template>
  <div class="main_page">

    <Nav_Component @scroll_to="handle_nav" place="main" class="nav_bar" />

    <Modal_Connect :isVisible="isVisible" @close="close_connect" />


    <section class="header_section">
      <img ref="img_header" src="@/assets/img/main-section.webp" class="img_undercover" alt="главная картинка">
      <div class="cover">
        <h1 style="text-align: center;font-size: 24pt; font-weight: 600; margin-top: -100px;" class="header_title">
          Разработка программного обеспечения любой
          сложности.<br>Обучение любым направлениям в программировании!</h1>
        <h1 style="text-align: center;margin-top: 1.5rem;font-weight: 400;" class="header_under_title"><br>
          <strong>Разработка</strong>
          программного
          обеспечения для любой платформы: быстро, качественно, недорого!
          <br><strong>Обучение</strong> по всем направлениям программирования. Для вас и ваших детей.
        </h1>
      </div>
    </section>

    <Modal_ads @close_ads="close_ads" :isVisible_ads="is_Visible_ads">
      <p style="font-size: 16.5px; margin-top: 10px;margin-bottom: 10px; text-align: center; font-size: 18.3px;" class="mobile_text">Напишите ваш, номер телефона и получите
        скидку<br>на все услуги в размере <strong>15 процентов</strong></p>
    </Modal_ads>


    <section ref="section_about" class="about-section" style="padding-bottom: 13px;">

      <h1 style="text-align: center;margin-top: 1.5rem;">Обо мне</h1>

      <div class="profile-card">
        <img src="@/assets/img/main_photo.webp" alt="Profile Photo" class="profile-photo">
        <div class="profile-info">
          <h2>Яценко Максим</h2>
          <p class="text-about"> 👨‍💻 <strong>Пpoгрaммист с большим опытом работы</strong>, специализирующийся на разработке
            программного
            обеспечения высшего уровня сложности. Имею диплом магистра и обладаю глубокими знаниями в области
            информационных технологий. <br> <strong>Призер множества всероссийских конкурсов</strong>, что
            подтверждает
            мою компетентность и профессионализм 🏆. <strong>10-летний опыт в программировании</strong> на различных
            платформах
            платформах, включая мобильные устройства, десктопы и серверные решения. 📱💻 <br> <strong>Проектирую
              и создаю
              системы разного уровня сложности</strong> – от небольших приложений до сложных корпоративных
            систем. 🛠️ Мой
            подход к разработке основан на строгом соблюдении сроков и высоких стандартах качества, поэтому
            <strong>выполняю работу всегда вовремя и качественно</strong>. ✅ <br>
            Кроме того, <strong>обучаю детей и взрослых</strong> <strong>самой востребованной и высокооплачиваемой
              профессии нашего времени</strong> — программированию 💼. Мои ученики не только получают
            практические навыки,
            но и овладевают современными методологиями разработки, что позволяет им успешно строить карьеру в
            IT-индустрии. 🚀

            Если вы ищете профессионала, который может воплотить ваши идеи в жизнь и обеспечить надежные,
            масштабируемые
            решения — я здесь, чтобы помочь! "
          </p>
        </div>
      </div>

      <div style="display: flex; justify-content: center;">

        <button class="connect_with_me" aria-label = "Свяжитесь со мной" @click="togle_Modal">
          <fa icon="link" /> Свяжитесь со мной
        </button>
      </div>


    </section>

    <section ref="section_why_pick_me" class="sectionSecond">
      <div style="display: flex; align-items: center; flex-direction: column; width: 100%;">
        <h1 style="padding-top: 20px; text-align: center;">Почему стоит выбрать именно меня?</h1>
        <h3 style="font-weight: 400;margin-top: 20px; text-align: center;">Имею большой опыт создания приложений для разных
          платформ,<br> а также исходя из
          своего опыта, могу объяснить "простым языком" сложные вещи</h3>
        <div class="row_container">
          <div class="container_col">
            <img class="img_icon" src="@/assets/img/icons/10age.png" alt = "картинка - опыта">
            <h4>10 лет работы</h4>
            <p class="text_why_me">Мой опыт говорит за меня. За 10 лет практической разработки и 5 лет
              преподавания, я
              успел поучаствовать (или даже разработать самостоятельно) огромное количество проектов разной сложности. А
              также обучить около 100 детей и взрослых.</p>
          </div>

          <div class="container_col">
            <img class="img_icon" style="margin-top: 20px;" src="@/assets/img/icons/individ.png" alt="Картинка-индивидуальности">
            <h4>Индивидуальный подход</h4>
            <p class="text_why_me">За время моей работы, я научился находить индивидуальный подход к клиенту.
              Если речь
              идет о разработке, то это всегда <strong>качественная работа, выполненная в срок</strong>
              <br> если обучение — то выработанные техники работы с детьми и взрослыми, создание
              <strong>индвидуального
                курса работы</strong> для каждого!
            </p>
          </div>

          <div class="container_col">
            <img class="img_icon" src="@/assets/img/icons/upgrade.png" alt="картинка роста">
            <h4>Непрерывный рост</h4>
            <p class="text_why_me">
              Я стараюсь не сидеть на месте и постоянно совершенствую своё мастерство, как в плане
              разработки(изучение
              новых технологий и паттернов), так и в плане преподавания(создаю и применяю новые техники
              обучения)
            </p>
          </div>
        </div>
      </div>

    </section>

    <section ref="section_study" class="section_study">
      <div style="display: flex; align-items: center; flex-direction: column; width: 100%; padding-bottom: 10px;">
        <h1>Обучение:</h1>

        <h3 style="font-weight: 400;margin-top: 20px; text-align: center">
          📚 Хотите освоить программирование с нуля или повысить свои навыки?📚
          <br>Я – опытный разработчик и преподаватель с более чем 5-летним стажем работы в IT.
          <br>В конце данной страницы нажмите кнопку «Подробнее» и перейдите на отдельную страницу, где вы сможете
          увидеть дополнительную информацию
        </h3>

        <div class="objective">

          <div class="left_block">
            <img src="@/assets/img/icons/uniqe.png" class="img_blocks" alt="Фото уникальная возможность">
            <p class="text_left_block">🚀 Уникальная возможность:
              Обучаю программированию как детей, так и взрослых, предлагая подход, адаптированный под каждый
              возраст и уровень знаний. Мои ученики не просто изучают теорию, они погружаются в реальные
              проекты и получают практические навыки, которые сразу можно применить. Мы изучаем современные
              методологии разработки, такие как Agile и Scrum, что помогает моим ученикам успешно строить
              карьеру в IT-индустрии и быть востребованными на рынке труда.</p>
          </div>

          <div class="left_block">
            <img src="@/assets/img/icons/wait.png" class="img_blocks" alt = "Фото что вас ждет">
            <p class="text_left_block">💻 Что вас ждет:
              От создания простых приложений до разработки сложных корпоративных систем – вы пройдёте весь
              путь обучения, начиная с базовых концепций и заканчивая сложными задачами. В процессе обучения
              вы получите знания и навыки, которые помогут вам уверенно шагнуть в мир программирования и
              воплотить свои идеи в жизнь. Программа обучения ориентирована на реальные потребности рынка, так
              что вы будете готовы к вызовам современного IT-мира.</p>

          </div>

          <div class="left_block">
            <img src="@/assets/img/icons/programs.png" class="img_blocks" alt = "Картинка - преподавальская деятельность  ">
            <p class="text_left_block">🔧 За время своей преподавательской деятельности, я разработал уникальные
              программы обучения, которые подойдут для каждого, независимо от уровня подготовки. Мой подход к
              обучению основан на большом количестве практических заданий и проектах, которые помогут вам
              освоить реальные навыки. Теоретическая часть представлена в легкой и доступной форме, чтобы
              обучение было интересным, а не скучным. Вы не просто изучите технологии — вы научитесь применять
              их на практике!</p>
          </div>

          <div class="left_block">
            <img src="@/assets/img/icons/it.png" class="img_blocks" alt="Путь в it">
            <p class="text_left_block">
              Присоединяйтесь к обучению прямо сейчас и начните путь к успешной карьере в IT! 💼
              Я предлагаю не просто обучение — это ваш первый шаг к высокооплачиваемой и востребованной
              профессии. Осваивайте передовые технологии, работайте над реальными проектами и получайте
              знания, которые помогут вам выделиться на рынке труда. Стартуйте сегодня, и уже завтра вы
              сможете воплотить свои идеи в жизнь!
            </p>

          </div>

        </div>
        <nuxt-link to="/study" style="width: 100%; display: flex; justify-content: center; width: 100%; text-decoration: none;">
          <Button_more></Button_more>
        </nuxt-link>

      </div>

    </section>


    <section ref="section_code" class="sectionSecond" style="padding-top: 20px;  padding-bottom: 30px;">

      <h1 style="text-align: center;">
        Разработка
      </h1>


      <div class="profile-card" style="background-color: transparent;">
        <img src="@/assets/img/programmer.webp" alt="Profile Photo" class="profile-photo">
        <div class="profile-info">

          <p class="text-about">
            👨‍💻 Я – программист с богатым опытом и глубокими знаниями в области информационных технологий. Мой
            диплом магистра и призовые места на всероссийских конкурсах подтверждают мою квалификацию и
            профессионализм 🏆. <br>
            <br>

            С более чем 10-летним опытом работы, я успешно разрабатываю решения для самых разнообразных
            платформ. Я создаю потрясающие мобильные приложения 📱, которые легко и удобно использовать в любой
            ситуации. Мои десктопные программы 💻 обеспечивают надежность и эффективность в выполнении задач,
            будь то простые утилиты или сложные инструменты. Я также проектирую масштабируемые серверные решения
            🌐, которые поддерживают высокую производительность и надежность даже при значительных нагрузках.
            <br>
            <br>
            Мой подход к разработке основывается на строгом соблюдении сроков и высоких стандартах качества, что
            гарантирует точное и качественное выполнение работы ✅.<br>
            <br>
            Если вам нужен профессионал, способный воплотить ваши идеи в жизнь и предоставить надежные,
            масштабируемые решения — я готов помочь! Свяжитесь со мной, чтобы обсудить детали вашего проекта.
          </p>
        </div>
      </div>
      <div style="">
        <nuxt-link to="/code" style="width: 100%; display: flex; justify-content: center; width: 100%; text-decoration: none;">
          <Button_more style="margin-top: 2rem;"></Button_more>
        </nuxt-link>
      </div>

    </section>

    <section ref="section_contact">
      <Footer_Component @toggle="togle_Modal" />
    </section>
  </div>


</template>

<script>
import Footer_Component from '@/components/Footer_Component.vue';
import Nav_Component from '@/components/Nav_Component.vue'
import Button_more from '@/components/UI/Button_more.vue';
import Modal_Connect from '@/components/Modal_Connect.vue';
import Modal_ads from '@/components/Modal_ads.vue';
import axios from 'axios'
import { useHead } from '@unhead/vue';
export default {
  name: 'IndexPage',

  data() {
    return {
      name_of: ['_about', '_why_pick_me', '_study', '_code', '_contact'],
      isVisible: false,
      is_Visible_ads: false,
      randomTime: Math.round(Math.random() * (10000 - 7000) + 7000),
      startTime: 0,
      endTime: 0,
      local_ref: null
    }
  },
  components: {
    Nav_Component,
    Footer_Component,
    Button_more,
    Modal_Connect, Modal_ads
  },
  created(){
    this.updateMetaTags()
  },

  async mounted() {
    
    if (sessionStorage.getItem('ads') == null) {
      setTimeout(this.handle_ads_func(), this.randomTime)
      sessionStorage.setItem('ads', true)
    }
    this.startTime = new Date();
    this.local_ref = this.$route.query.ref || null

    if (this.local_ref != null)
      localStorage.setItem('ref', this.local_ref)

    if (this.local_ref == null && localStorage.getItem('ref') != null)
      this.local_ref = localStorage.getItem('ref')

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.001
    }
    const observer = new IntersectionObserver((entries) => {
      if (window, innerWidth < 900)
        return
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          switch (entry.target) {
            case this.$refs['section' + this.name_of[0]]:
              entry.target.classList.add('animate');
              break
            case this.$refs['section' + this.name_of[1]]:
              entry.target.classList.add('animate-from-back');
              break
            case this.$refs['section' + this.name_of[2]]:
              entry.target.classList.add('animate');
              break
            case this.$refs['section' + this.name_of[3]]:
              entry.target.classList.add('animate-from-back');
              break
            case this.$refs['section' + this.name_of[4]]:
              entry.target.classList.add('animate');
              break

          }
        }
        else {
          if (entry.target.classList.contains('animate') || entry.target.classList.contains('animate-from-back'))
            entry.target.classList.contains('animate') ? entry.target.classList.remove('animate') : entry.target.classList.remove('animate-from-back')
        }
      })
    }, options);
    const ref_element = this.$refs
    for (let refName in ref_element) {
      for (let index = 0; index < this.name_of.length; index++) {
        if (refName == 'section' + this.name_of[index]) observer.observe(this.$refs[refName]);
      }
    }
  }, methods: {
    async handle_nav(data) {
      let check_el = this.$refs['section' + data]

      if (check_el)
        setTimeout(() => {
          check_el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
    },
    togle_Modal() {
      this.isVisible = !this.isVisible
    },
    close_connect(){
      this.isVisible = false
    },
    hadle_ads() {
      this.is_Visible_ads = !this.is_Visible_ads
    },
    close_ads(){
      this.is_Visible_ads = false
    },
    handle_ads_func() {
      setTimeout(() => {
        if (!this.isVisible) {
          this.hadle_ads()
          clearTimeout()
        }
        else
          setTimeout(this.handle_ads_func, 15000)
      }, this.randomTime)
    },
    async send_location(ref, time) {
      axios.post(`https://${this.$config.public.NUXT_APP_BACK_URL}/send_location`, {
        location: 'main_page',
        referal: ref,
        time: time
      })
    },
    updateMetaTags() {
    const env_link = this.$config.public.NUXT_APP_LINK;
    useHead({
      title: 'Школа программирования / Разработка на заказ',

      meta: [
        { name: 'description', content: 'Школа программирования Silver-Tech обучит одной из самой современной и высокооплачиваймой профессии, а также выполнение на заказ любой сложности программы, а также для любой платформы.' },
        { name: 'keywords', content: 'школа, школа программирования, разработка, разработка на заказ' },
        { property: 'og:title', content: 'Школа программирования / Разработка на заказ' },
        { property: 'og:description', content: 'Школа программирования Silver-Tech обучит одной из самой современной и высокооплачиваймой профессии, а также выполнение на заказ любой сложности программы, а также для любой платформы.' },
        { property: 'og:url', content: env_link }
      ]
    })

  }
  }, async beforeUnmount() {
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
.nav_bar {
  position: sticky;
  width: 100%;
  left: 0%;
  top: 0%;
  z-index: 1000;

}

.header_section {
  height: 100vh;
  position: relative;
  background-size: 100%;
  overflow: hidden;
  clip-path: inset(0);
}


.img_undercover {
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  /* Изображение сохраняет пропорции, занимая весь контейнер */
  object-position: center top;
 
  display: block;
}

.cover {
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.78));
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;


}

.section_about_text {
  text-align: justify;
  font-size: 17px;
  width: 30%;
}

.container_info {
  display: flex;
  justify-content: center;
}

.profile-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  width: 98%;
  margin-left: 20px;
  margin-top: 20px;
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.profile-photo {
  width: 450px;
  border-radius: 8px;
  object-fit: cover;
  margin: 20px;
  cursor: pointer;
  transition: 0.6s;
  box-shadow: 1px 1px 17px 3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 1px 17px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 17px 3px rgba(0, 0, 0, 0.75);
}

.profile-info {
  padding: 20px;
  width: 650px;
}

.profile-info h2 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.profile-info p {
  margin-top: 10px;
  font-size: 18.3px;
  color: #666;
  line-height: 1.5;
}

.animate {
  animation-name: slide;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-duration: 1.5s;
}

.animate-from-back {
  animation-name: slide-back !important;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-duration: 1.5s;
}

@keyframes slide {
  from {
    transform: translateX(-450px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slide-back {
  from {
    transform: translateX(450px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

.sectionSecond {
  background-color: #f0f0f0;
  padding-bottom: 20px;
}

.about-section {
  margin-bottom: 20px;

}



.row_container {
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-around;
  margin-top: 20px;
}

.img_icon {
  width: 150px;
}

.container_col {
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

h3 {
  font-size: 18.3px;
}

.text_why_me {
  font-size: 18.3px;
  text-align: center;
}

h4 {
  font-size: 18.3px;
}

.section_study {
  padding: 20px 0px;
}

.objective {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  align-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.right_block {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  align-self: end;

  margin: 20px 0;

}


.left_block {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px 0;
  height: 100%;

}

.text_left_block {
  width: 350px;
  font-size: 18.3px;
  margin-left: 15px;
  text-align: justify
}

.img_blocks {
  width: 180px;
}

.connect_with_me {
  background-color: var(--main-color);
  width: 600px;
  height: 50px;
  outline: none;
  border: 0px;
  transition: 0.6s all;
  font-size: 17px;
  border-radius: 8px;
  cursor: pointer;

}


.text-about{
  text-align: justify;
}
</style>
