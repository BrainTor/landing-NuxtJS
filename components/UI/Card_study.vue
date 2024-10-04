<template>
    <div style="margin-bottom: 40px; display: flex; justify-content: center; align-items: center;" 
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    class="main_part_mobile"
    >
        <button  v-if="!is_mobile" @click="next_or_before('left')" class="contoll_card" style="margin-right: 43px;" aria-label="Следующий">
            <fa icon="circle-left" />
        </button>
        <div style=" position: relative; width: fit-content; background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));"
            class="main_part">
            <img :src="current_img" ref='main_section'
                style="transition: 0.7s;width: 1000px;  filter: blur(1px); position: relative; z-index: -1;"
                class="main_part shadow mobile_img">
            <div ref='main_section1'
                style=" transition: 0.7s;width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; position: absolute;top: 0%; left:0%; flex-direction: column;">

                <h2 style="width: 600px; color: white;margin-bottom: 15px;" class="text_ads_mobile">{{ title_mas[number_picked] }}</h2>
                <div ref="text_mount" class="text_ads_mobile"
                    style="font-size: 18.3px; width: 600px; color: white; line-height: 28px; text-align: justify;">
                </div>


            </div>
        </div>
        <button v-if="!is_mobile" @click="next_or_before('right')" class="contoll_card" style="margin-left: 40px;" aria-label="Следующий">
            <fa icon="circle-right" />
        </button>
    </div>

</template>

<script>
import img1 from '@/assets/img/study/number1.webp'
import img2 from '@/assets/img/study/sites.webp'
import img3 from '@/assets/img/study/mobile.webp'
import img4 from '@/assets/img/study/server.webp'
import img5 from '@/assets/img/study/number1_mobile.webp'
import img6 from '@/assets/img/study/sites_mobile.webp'
import img7 from '@/assets/img/study/mobile_mobile.webp'
import img8 from '@/assets/img/study/server_mobile.webp'
export default {
    name: 'Card_study',
    data() {
        return {
            img_mas: [
                img1, img2, img3, img4
            ],
            title_mas: [
                'Обучитесь современной профессии',
                'Создание веб-сайтов для детей и взрослых',
                'Создание мобильных приложений',
                'Создание серверных приложений'
            ],
            text_mas: [
                `
        Обучитесь востребованной и высокооплачиваемой профессии под руководством практикующего специалиста. Для каждого ученика мы разрабатываем индивидуальный план занятий.
<br><strong>План:</strong> Индивидуальная программа по веб-разработке
<br><strong>Продолжительность:</strong> 10 занятий по 1.5 часа
<br><strong>Стоимость:</strong> 1650 руб./час
                `,
                `
          Научитесь создавать сайты любой сложности: от простых одностраничных веб-страниц до продвинутых интернет-магазинов.
<br><strong>План:</strong> Индивидуальная программа по веб-разработке
<br><strong>Продолжительность:</strong> 10 занятий по 1.5 часа
<br><strong>Стоимость:</strong> 1650 руб./час
                `,
                `
Освойте создание приложений для Android. Вы сможете разработать собственное приложение для бизнеса или овладеть востребованной профессией мобильного разработчика.
<br><strong>План:</strong> Индивидуальная программа по мобильной разработке
<br><strong>Продолжительность:</strong> 10 занятий по 1.5 часа
<br><strong>Стоимость:</strong> 1650 руб./час
                `,
                `
          Научитесь создавать серверные приложения любой сложности: от простых монолитных до современных микросервисов. Овладейте профессией программиста вместе с опытным наставником.
<br><strong>План:</strong> Индивидуальная программа по серверной разработке
<br><strong>Продолжительность:</strong> 10 занятий по 1.5 часа
<br><strong>Стоимость:</strong> 1650 руб./час
                `

            ]
            ,
            current_img: '',
            number_picked: 0,
            is_mobile:false,
            touchStartX: 0,
            touchEndX: 0,
            minSwipeDistance: 50
          
        }
    }, props: {
        picked: {
            type: Number,
            default: 0
        }
    }, mounted() {
        if(window.innerWidth<700){
            this.is_mobile = true
            this.img_mas = [img5,img6,img7,img8]
        }
            
        this.current_img = this.img_mas[this.picked]
        this.$refs.text_mount.innerHTML =this.text_mas[this.picked]
        this.number_picked = this.picked
    }, methods: {
        next_or_before(place) {
            this.$refs.main_section.style.opacity = '0'
            this.$refs.main_section1.style.opacity = '0'
            setTimeout(() => {
                if (place == 'right')
                    this.number_picked = this.number_picked + 1 == this.text_mas.length ? 0 : this.number_picked + 1
                else
                    this.number_picked = this.number_picked == 0 ? this.text_mas.length - 1 : this.number_picked - 1

                this.current_img = this.img_mas[this.number_picked]
                this.$refs.text_mount.innerHTML = this.text_mas[this.number_picked]
                this.$refs.main_section.style.opacity = '1'
                this.$refs.main_section1.style.opacity = '1'
            }, 700)
        },
    handleTouchStart(event) {
        
      this.touchStartX = event.changedTouches[0].screenX;
    },
    handleTouchMove(event) {
      this.touchEndX = event.changedTouches[0].screenX;
    },
    handleTouchEnd() {
      const distance = this.touchEndX - this.touchStartX;
      if (Math.abs(distance) > this.minSwipeDistance) {
        if (distance > 0) {
          // Свайп вправо
          this.next_or_before('left');
        } else {
          // Свайп влево
          this.next_or_before('right');
        }
      }
    }
    }

}


</script>

<style>
.conroll_card {
    width: 40px;
    height: 40px;
    background-color: transparent;
    color: #d43a63 !important;
    font-size: 35px;
    border: 0px;
    cursor: pointer;
    outline: none;
}

.animate {
    animation-name: blur;
    animation-duration: 0.7s;
    animation-iteration-count: 1;
    animation-direction: alternate;
}

.main_part {
    border-radius: 10px;
}

.shadow {
    box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.75);
}
.contoll_card{
    width: 40px;
    height: 40px;
    background-color: transparent;
    color: #d43a63 !important;
    font-size: 35px;
    border: 0px;
    cursor: pointer;
}
</style>