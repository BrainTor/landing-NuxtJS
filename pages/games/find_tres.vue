<template>
    <div class="main_container_game" style="justify-content: space-around !important;">

        <h2 style="color: whitesmoke;margin-bottom: 20px; text-align: center;" class="title_tres" ref="title">В одном из сундуков спрятан алмаз, постарайтесь
            его найти :)</h2>


        <div class="chest_rows" style="display: flex; flex-wrap: wrap; width: 100%;
        justify-content: center;" ref="chest_row">
            <div class="chest" ref="chest1" @click="this.click_button(1)">
                <div class="cap" ref="cap1">
                    <div class="lock"></div>
                </div>
                <div class="base"></div>
            </div>
            <div class="chest" ref="chest2" @click="this.click_button(2)">
                <div class="cap" ref="cap2">
                    <div class="lock"></div>
                </div>
                <div class="base"></div>
            </div>
            <div class="chest" ref="chest3" @click="this.click_button(3)">
                <div class="cap" ref="cap3">
                    <div class="lock"></div>
                </div>
                <div class="base"></div>
            </div>
        </div>
        <div style="display: flex; justify-content: center;">
            <div class="buttons">
                <nuxt-link to = '/study'>
                    <button class="controll_button" v-if="!is_mobile">Вернуться назад</button>
                    <button class="controll_button" v-else><fa icon="chevron-left" /></button>
                </nuxt-link>
                
                <button class="controll_button" onclick="window.location.reload()" v-if="!is_mobile">Перезапустить</button>
                <button class="controll_button" onclick="window.location.reload()" v-else><fa icon="rotate-right" /></button>
                <button class="controll_button" @click="new_lvl" v-if="is_win && !is_mobile">Следующий уровень</button>
                <button class="controll_button" @click="new_lvl" v-else-if="is_win"><fa icon="chevron-right" /></button>
            </div>
        </div>
   


    </div>
</template>

<script>

import axios from 'axios';
import { useHead } from '@unhead/vue';
import diamond_pic from '@/assets/img/diamond.png'
export default {
    name: 'find_tres',
    data() {
        return {
            win_number: -5,
            chest_count: 3,
            chests:{},
            caps:{},
            is_clicked: false,
            is_win: false,
            chest: null,
            diamond: null,
            cap: null,
            startTime: 0,
            endTime:0,
            local_ref:null, 
            is_mobile:false
        }
    }, mounted() {
        this.is_mobile = window.innerWidth<700
        this.startTime = new Date();
        if(localStorage.getItem('ref') != null)
            this.local_ref = localStorage.getItem('ref') 
        this.generate_win_number()
        this.chests['chest1'] = this.$refs.chest1
        this.chests['chest2'] = this.$refs.chest2
        this.chests['chest3'] = this.$refs.chest3

        this.caps['cap1'] = this.$refs.cap1
        this.caps['cap2'] = this.$refs.cap2
        this.caps['cap3'] = this.$refs.cap3
    },
    methods: {
        generate_win_number() {
            this.win_number = Math.round(Math.random() * this.chest_count)
            this.win_number = this.win_number == 0 ? 1 : this.win_number    
        },
        click_button(id) {
           
            if (!this.is_clicked) {
                this.diamond = document.createElement('img')
                this.diamond.setAttribute('id', 'diamond')
                this.diamond.setAttribute('src', diamond_pic)
                this.diamond.style = `
                width:30px;
                position:absolute;
                top:3%;
                left:42%;
                z-index:-1;
                `
                
                this.chest = this.chests['chest' + this.win_number]
                this.chest.appendChild(this.diamond)
                this.cap = this.caps['cap' + id]
                this.cap.classList.add('rotated')
                this.is_clicked = true
                if (this.win_number == id) {
                    this.is_win = true
                    this.$refs.title.innerText = "Вам удалось отыскать верный сундук, нажмите 'Следующий уровень' и попытайте удачу на более сложном уровне"
                }
                else this.$refs.title.innerText = "Вы выбрали, неправельный сундук, повторите попытку"
            }
        },
        new_lvl() {
            this.cap.classList.remove('rotated')
            this.chest.removeChild(this.diamond)
            this.chest = null
            this.diamond = null
            this.cap = null
            this.is_win = false
            this.is_clicked = false
            this.chest_count++
           
            this.$refs.title.innerText = 'Попытайте удачу снова!'
            this.generate_win_number()

            let new_chest = document.createElement('div');
            new_chest.className = 'chest';
            let chest_ref_name = 'chest' + this.chest_count;
            this.chests[chest_ref_name] = new_chest;

            let new_cap = document.createElement('div');
            new_cap.className = 'cap';
            let cap_ref_name = 'cap' + this.chest_count;
            this.caps[cap_ref_name] = new_cap;
            let new_lock = document.createElement('div')
            new_lock.className = 'lock'
            this.caps[cap_ref_name].appendChild(new_lock)
            this.chests[chest_ref_name].appendChild(this.caps[cap_ref_name])

            let new_base = document.createElement('div')
            new_base.className = 'base'
            this.chests[chest_ref_name].appendChild(new_base)
            this.chests[chest_ref_name].addEventListener('click', () => {
                this.click_button(this.chest_count -1 ); 
            });

            this.$refs.chest_row.appendChild(this.chests[chest_ref_name]);
        },
        async send_location(ref , time) {
            axios.post(`http://${this.$config.public.NUXT_APP_BACK_IP}:${this.$config.public.NUXT_APP_BACK_PORT}/send_location`, {
                location: 'game_tres',
                referal: ref, 
                time:time
            })
        },
        updateMetaTags() {
     
        
            useHead({
                title:'Поиск сокровищ Silver-tech', 
            meta:[
                {
                    name:'description', content:'Игра по мотивам minecraft с элементами азарта, попробуйте сами!'
                },
                {
                    name:'keywords', content:'minecraft, сундук из майнкрафта, игра, игра онлайн,маинкрафт,майнкрафт'
                }
            ]
            })
        }
       

    } ,
    created(){
        this.updateMetaTags()
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

<style>
.base {
    width: 200px;
    height: 70px;
    background-color: rgb(192, 141, 74);
    border: 2px solid black;
}

.cap {
    width: 200px;
    height: 34px;
    background-color: rgb(192, 141, 74);
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.6s all;
}

.lock {
    width: 10px;
    height: 20px;
    background-color: silver;
}

.chest {
    cursor: pointer;
    margin-left: 1rem;
    margin-right: 1rem;
    position: relative;
    z-index: 3;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>



<style scoped>




.buttons {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center !important;
}

.controll_button {
    background-color: var(--main-color);
    width: 200px;
    border: 0px;
    border-radius: 4px;
    margin-left: 1rem;
    margin-right: 1rem;
    height: 40px;
    cursor: pointer;
    font-size: large;
}

.rotated {
    transform: rotate(45deg) translateY(-70px) translateX(0px);
}
</style>