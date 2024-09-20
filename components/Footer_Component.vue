<template>
    <div class="footer_container">
  
            <h1 style="padding-top: 20px;padding-bottom: 20px; text-align: center;">Я всегда готов к общению! Свяжитесь со мной</h1>
     

        <div class="main_row">

            <p class="email_phone">+7-960-459-34-45 </p>
            <p class="email_phone">+7-906-565-30-09</p>
            <p class="email_phone">m.yacenko@gmail.com</p>

            <div class="social_row">
                <button class="social_button">
                    <a href="https://vk.com/maxim295">
                        <img class="social_img" src="@/assets/img/icons/vk.png">
                    </a>

                </button>
                <button class="social_button">
                    <a href="https://t.me/@BrainTorOff">
                        <img class="social_img" src="@/assets/img/icons/telegram.png">
                    </a>

                </button>
                <button class="social_button" title="Запрещенная на территории РФ соц. сеть  :)">
                    <a href="https://www.instagram.com/prophet_off?igsh=MTBnZW9zdjZkbmhyNw==">
                        <img class="social_img" src="@/assets/img/icons/instagram.png">
                    </a>
                </button>
            </div>


        </div>

        <div class="have_a_question">
            <p style="font-size: 20px; font-weight: 580;">Остальсь вопросы?</p>
            <button class="connect_button" @click="open_m">
                <fa icon="link" /> Свяжитесь со мной
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer_Component',
    methods: {
        open_m() {
            this.$emit('toggle')
        }
    }
}

</script>

<style scoped>
.footer_container {
    width: 100%;
    background-color: var(--background_nav_bar);
    color: white;
    font-family: "PT Serif", serif;
    padding-top: 60px;

}

.have_a_question {
    color: black;
    background-color: var(--main-color);
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
}

.main_row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
}

.social_button {
    border: 0px;
    background-color: transparent;
    margin-top: 20px;
    cursor: pointer;

}

.social_img {
    width: 42px;
}

.main_col {
    display: flex;
    align-items: center;
    flex-direction: column;


}

.social_row {
    padding-bottom: 60px;
}

@keyframes shake {
    0% {
        transform: rotate(0deg) scale(1.1);
    }

    50% {
        transform: rotate(4deg);
    }

    100% {
        transform: rotate(-4deg) scale(1);
    }
}

@media (hover: hover) {
    .social_button:hover {
        animation-name: shake;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-direction: alternate;
        animation-timing-function: ease-in-out;
    }

    .connect_button:hover {
        background-color: #d43a63;
        color: white;

    }

}

.email_phone {
    font-size: 24px;
    margin-top: 1.2rem;
}

.connect_button {
    background-color: transparent;
    font-size: 20px;
    border: 0px;
    cursor: pointer;
    transition: 0.6s all;
    padding: 7px 12px;
    border-radius: 8px;
    background-color: transparent;

}
</style>