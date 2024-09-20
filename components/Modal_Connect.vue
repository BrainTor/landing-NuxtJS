<template>
    <div ref="main" class="modal-container" v-show="isVisible">
      <!-- Фон модального окна без события @click -->
      <div class="modal-overlay"></div>
      
      <!-- Контент модального окна -->
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">&times;</button>
        <h2 style="margin-bottom: 0.5rem;">Свяжитесь со мной</h2>
        <h3 style="color:red" class="spawn" v-if="is_something_bad">Не заполнено одно из полей</h3>
        <div style="display: flex;" class="for_mobile_connect">
            <div style="display: flex; flex-direction: column;width: 100%; align-items: center;" >
              
                <p>Введите имя</p>
           
                <input placeholder="Иван" ref="name_input" class="input_one_row" type="text">
            </div>
            <div style="display: flex; flex-direction: column;margin-left: 1rem; width: 100%; align-items: center;" class="for_mobile_connect_third">
                <p>Введите отчество</p>
                <input type="text" class="input_one_row" ref="third_name_input" placeholder="Иванович">
            </div>
        </div>

        <p style="margin-top: 10px; margin-bottom: 10px;">Введите номер телефона</p>
        <input type="text" placeholder="+7 900 000 00 00" class="input_two_row" ref="number_input">

            <p style="color: gray;margin-top: 0.5rem; text-align: center;">или</p>
     
        <p class="ustal_nazv">Введите ссылку на социальную сеть</p>
        <div style="display: flex;flex-direction: column;" class="bottom_part_connect">
            <input placeholder="https://t.me/@name" ref="social_input" type="text" class="input_two_row" style="margin-top: 10px; margin-bottom: 10px;">

            <textarea ref="text_input" placeholder="Напишите мне что-то" style="margin-top: 10px; margin-bottom: 10px;height: 320px;padding: 20px;   font-size: 16.2px;" class="text_area"></textarea>
        </div>



        <div class="footer_modal">
            <button class="button_modal_controll"  @click="closeModal">Закрыть</button>
            <button class="button_modal_controll" style="background-color: rgb(30, 181, 30); " @click="send_question">Отправить</button>
        </div>
      </div>
    </div>
  </template>

<script>
//import axios from 'axios';
export default {
    name: 'Modal_Connect',
    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
         send_question(){
            if(this.$refs.name_input.value == '' || this.$refs.third_name_input.value == '' || (this.$refs.number_input.value == ''&&this.$refs.social_input == '')||this.$refs.text_input.value == '')
              return this.is_something_bad = true
             
            // else
            //   axios.post(`http://${process.env.VUE_APP_BACK_IP}:${process.env.VUE_APP_BACK_PORT}/send_connect`,{
            //       name:this.$refs.name_input.value,
            //       third_name:this.$refs.third_name_input.value,
            //       addres:this.$refs.number_input.value==''?this.$refs.number_input.value:this.$refs.social_input.value,
            //       his_text:this.$refs.text_input.value
            //   })
            this.closeModal()
        }
    },data(){
      return {
        is_something_bad:false
      }
    },mounted(){
      this.$refs.main.parentElement.addEventListener('keydown', (event)=>{
        try{
          if(event.key === 'Escape' && window.getComputedStyle(this.$refs.main).display == 'flex'){
          this.closeModal()
          }
        }catch{
          console.log('hz')
        }
     
      });
      
    }
}
</script>

<style>
@keyframes spawn_frame {
  from{
      opacity: 0;
  }
  to{
      opacity: 1;
  }
}
.spawn{
  animation: spawn_frame;
  opacity: 1;
  animation-duration: 0.6s;
  animation-iteration-count: 1;
  margin-bottom: 1rem;
}
.spawn{
  animation: spawn_frame;
  opacity: 1;
  animation-duration: 0.6s;
  animation-iteration-count: 1;
  margin-bottom: 0rem;
}
/* Глобальные стили */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.90); /* Тёмный фон */
  z-index: 100;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Локальные стили для контента модального окна */
.modal-content {
  position: relative;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  z-index: 200;
  box-shadow: 0 0 15px rgba(102, 101, 101, 0.8);
  min-width: 350px;
  min-height: 200px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
.input_one_row{
  width: 220px;
  outline: none;
  border: 1.5px solid rgb(178, 175, 175);
  padding:  4px 10px;
  border-radius: 4px;
  height: 25px;
  font-size: 16.2px;

}
.input_two_row{
  width: 96%;
  outline: none;
  border: 1.5px solid rgb(178, 175, 175);
  padding:  4px 10px;
  border-radius: 4px;
  height: 25px;
  font-size: 16.2px;
}
.footer_modal{
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
}
.button_modal_controll{
  color: whitesmoke;
  border: 0px;
  width: 120px;
  font-size: 16.2px;
  padding: 3px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  background-color: rgb(207, 31, 31);

}
</style>