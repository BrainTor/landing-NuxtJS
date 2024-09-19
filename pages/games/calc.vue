
<template>
    <div class="main_container_game">
    
       
        <div class="calcul">
            <nuxt-link to="/study">
                <Back_Button style="margin-left: -15px;"></Back_Button>
            </nuxt-link>
            <h3>Калькулятор</h3>
 
            <div style="display: flex; align-items: center;" class="calc_mobile">
                <input class="input_calc" type="number" ref="numb1">
                <div class="buttons_calc_mobile">  
                    <div>
                        <button class="button_chast" @click="this.calc_res('+')">+</button>
                        <button class="button_chast" @click="this.calc_res('-')">-</button>
                    </div>
    
                    <div>
                        <button class="button_chast" @click="this.calc_res('*')">*</button>
                        <button class="button_chast" @click="this.calc_res('/')">/</button>
                    </div>
                </div>
    
                <input class="input_calc" type="number" ref="numb2">
            </div>
            <p>Ваш ответ: <strong>{{this.answer}}</strong></p>
        </div>
    </div>
</template>

<script>
import Back_Button from '@/components/UI/Back_Button.vue';
//import axios from 'axios';
export default{
    name:'calc',data(){
        return {
            answer:'',
            startTime: 0,
            endTime:0,
            local_ref:null
        }
    },head(){
        return{
            title:'Калькулятор Silver-tech', 
            meta:[
                {
                    name:'description', content:'Простой калькулятор, который вы сможете самостоятельно написать, пройдя обучения у меня'
                },
                {
                    name:'keywords', content:'Простой калькулятор, калькулятор, решение примеров, простые примеры, калькулятор онлайн'
                }
            ]
        }
    }, 
    components:{
        Back_Button
    },
    methods:{
        calc_res(value){
            switch(value){
                case '+':
                    this.answer = parseInt(this.$refs.numb1.value) + parseInt(this.$refs.numb2.value)
                    break
                case '-':
                    this.answer = parseInt(this.$refs.numb1.value) - parseInt(this.$refs.numb2.value)
                    break
                case '*':
                    this.answer = parseInt(this.$refs.numb1.value) * parseInt(this.$refs.numb2.value)
                    break
                case '/':
                    this.answer = parseInt(this.$refs.numb1.value) / parseInt(this.$refs.numb2.value)
                    break
            }
        },
        async send_location(ref , time) {
            
            // axios.post(`http://${process.env.VUE_APP_BACK_IP}:${process.env.VUE_APP_BACK_PORT}/send_location`, {
            //     location: 'game_calc',
            //     referal: ref, 
            //     time:time
            // })
        }
    },mounted(){
        this.startTime = new Date();
        if(localStorage.getItem('ref')!=null)
            this.local_ref = localStorage.getItem('ref')
    },
    async beforeUnmount(){
        this.endTime = new Date();
        let totalTimeSpent = Math.floor((this.endTime - this.startTime) / 1000);
        totalTimeSpent = Math.floor(totalTimeSpent/60) != 0?
        `Минут: ${Math.floor(totalTimeSpent/60)}, Секунд: ${Math.floor(totalTimeSpent%60)}`:
        `Секунд: ${Math.floor(totalTimeSpent%60)}`
        await this.send_location(this.local_ref, totalTimeSpent)
    }
}
</script>

<style scoped>

.calcul{
    display: flex;
    padding: 20px;
    background-color: white;
    border-radius: 12px;
    flex-direction: column;
}
.button_chast{
    width: 40px;
    height: 40px;
    background-color: var(--main-color);
    font-size: x-large;
    border-radius: 8px;
    margin: 4px;
    cursor: pointer;
    border: 0px;
}
.input_calc{
    width: 175px;
    height: 40px;
    outline: none;
    border: 1.5px solid rgb(197, 195, 195);
    border-radius: 8px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
</style>