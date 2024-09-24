<template>
  <div v-if="isVisible" class="modal-container">
    <!-- Фон модального окна с возможностью закрытия по клику -->
    <div class="modal-overlay" @click="closeModal"></div>
    
    <!-- Контент модального окна -->
    <div class="modal-content">
      <button class="close-btn" @click="closeModal" aria-label = "Закрыть">&times;</button>
      <h2 class="modal-title">Свяжитесь со мной</h2>
      <h3 v-if="isSomethingBad" class="error-message">Не заполнено одно из полей</h3>
      
      <form @submit.prevent="sendQuestion" class="modal-form">
        <div class="form-group">
          <label for="name">Введите имя</label>
          <input
            id="name"
            type="text"
            v-model="form.name"
            placeholder="Иван"
            class="input-field"
          />
        </div>
        
        <div class="form-group">
          <label for="thirdName">Введите отчество</label>
          <input
            id="thirdName"
            type="text"
            v-model="form.thirdName"
            placeholder="Иванович"
            class="input-field"
          />
        </div>
        
        <div class="form-group">
          <label for="number">Введите номер телефона</label>
          <input
            id="number"
            type="text"
            v-model="form.number"
            placeholder="+7 900 000 00 00"
            class="input-field"
          />
        </div>
        
        <p class="or-separator">или</p>
        
        <div class="form-group">
          <label for="social">Введите ссылку на социальную сеть</label>
          <input
            id="social"
            type="text"
            v-model="form.social"
            placeholder="https://t.me/@name"
            class="input-field"
          />
        </div>
        
        <div class="form-group">
          <label for="message">Напишите мне что-то</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Напишите мне что-то"
            class="textarea-field"
          ></textarea>
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-close" @click="closeModal" aria-label = "Закрыть">Закрыть</button>
          <button type="submit" class="btn btn-submit" aria-label = "Отправить">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Modal_Connect',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isSomethingBad: false,
      form: {
        name: '',
        thirdName: '',
        number: '',
        social: '',
        message: ''
      }
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.resetForm();
    },
    async sendQuestion() {
      const { name, thirdName, number, social, message } = this.form;
      
      // Проверка обязательных полей
      if (!name || !thirdName || (!number && !social) || !message) {
        this.isSomethingBad = true;
        return;
      }
      
      try {
      
        await axios.post(`http://${this.$config.public.NUXT_APP_BACK_IP}:${this.$config.public.NUXT_APP_BACK_PORT}/send_connect`, {
          name,
          third_name: thirdName,
          addres: number ? number : social,
          his_text: message
        });
        this.closeModal();
      } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        this.isSomethingBad = true;
      }
    },
    resetForm() {
      this.form.name = '';
      this.form.thirdName = '';
      this.form.number = '';
      this.form.social = '';
      this.form.message = '';
      this.isSomethingBad = false;
    },
    handleKeydown(event) {
      if (event.key === 'Escape' && this.isVisible) {
        this.closeModal();
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
    
    // Фокусировка на первом поле при открытии модального окна
    if (this.isVisible) {
      this.$nextTick(() => {
        this.$refs.name.focus();
      });
    }
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
};
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
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

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.modal-content {
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px; /* Ограничение максимальной ширины для больших экранов */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; /* Добавление прокрутки при необходимости */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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



.modal-title {
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.error-message {
  color: red;
  text-align: center;
  margin-bottom: 15px;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  align-items: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: cente;
}


.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 18.3px;
}

.input-field,
.textarea-field {
  padding: 8px 10px;
  border: 1.5px solid #b2afb3;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  width: 95%;
  font-size: 18.3px;
}


.textarea-field {
  resize: vertical;
  min-height: 100px;
  height: 250px;
}

.or-separator {
  text-align: center;
  color: gray;
  margin: 10px 0;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  width: 100%;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-close {
  background-color: rgb(221, 62, 62);
  color: white;
}

.btn-submit {
  background-color: #1eb51e;
  color: #fff;
}


</style>
