<template>

    <div class="modal-container" ref="main_el" v-if="isVisible_ads">
        <div class="modal-overlay" @click="closeModal"></div>
        <div class="modal-content">
            <button class="close-btn" @click="closeModal" aria-label = "Закрыть">&times;</button>
            <div style="display: flex; justify-content: center; width: 100%;">
                <img src="@/assets/img/rocket.png" style="width: 100px;">
            </div>>

           

            <h2 style="text-align: center; margin-top: 1rem; padding-left: 6px; padding-right: 5px;">Подождите, у меня специальное предложение.</h2>
            <div style="display: flex; justify-content: center; width: 100%;">
                <slot></slot>
            </div>
            
            <div style="display: flex; flex-direction: column; align-items:center; width: 90%;">
                <h3 style="text-align: center; color:red" class="spawn" v-if="is_number_bad">Вы ввели неверный номер телефона</h3>
                <h3 v-if="isSend" class="error-message" style="color: rgb(30, 181, 30);">Сообщение успешно отправлено</h3>
                <input type="text" ref="number_input" class="input_two_row" placeholder="+7 909 000 00 00" style="margin-top: 10px;">
                <p style="margin-bottom: 0;margin-top: 15px;">Скидка действует {{ formatTime(timeRemaining) }}</p>
                <button class="accept" @click="send_ads" aria-label = "Отправить">Отправить</button>
                <p style="text-decoration: underline; cursor: pointer;" @click="closeModal">Нет, спасибо, я хочу полную
                    стоимость</p>
            </div>

        </div>
    </div>



</template>

<script>
import axios from 'axios';
export default {
    name: 'Modal_ads',
    props: {
        isVisible_ads: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('close_ads');
        },startTimer() {
      this.timer = setInterval(() => {
        if (this.timeRemaining > 0) {
          this.timeRemaining--;
        } else {
          clearInterval(this.timer); // Остановить таймер, когда время закончится
        }
      }, 1000);
    },
    formatTime(time) {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    },
    async send_ads(){
        if(this.$refs.number_input.value != '')
            axios.post(`https://${this.$config.public.NUXT_APP_BACK_URL}/send_ads`,{
                number:this.$refs.number_input.value 
            })
        else
            return this.is_number_bad = true 
            this.isSend = true
        setTimeout(()=>{
          this.isSend = false
          this.is_number_bad = false
          this.$emit('close_ads');
        },2000)    
        
    }
    },
    data() {
        return {
            handleEscapeKey: null,
            timeRemaining: 3 * 3600 + 47 * 60,
            timer: null,
            is_number_bad:false,
            isSend:false
        }
    },
    mounted() {
        this.handleEscapeKey = (event) => {
            if (this.$refs.main_el != undefined)
                if (event.key === 'Escape')
                    this.$emit('close_ads');
        }
        window.addEventListener('keydown', this.handleEscapeKey);
        this.startTimer();
    },
    beforeUnmount() {
        window.removeEventListener('keydown',  this.handleEscapeKey);
        clearInterval(this.timer);
    }

}
</script>

<style scoped>
.accept {
    width: 96%;
    padding: 4px 10px;
    margin-top: 15px;
    margin-bottom: 20px;
    background-color: #d43a63;
    border: 0px;
    color: white;
    height: 50px;
    font-size: 18.3px;
    cursor: pointer;
    transition: 0.6s;
    border-radius: 7px;
}
.spawn{
    animation: spawn_frame;
    opacity: 1;
    animation-duration: 0.6s;
    animation-iteration-count: 1;
    margin-bottom: 1rem;
}

@keyframes spawn_frame {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
</style>