<template>

    <div class="main_container_game">
        <nuxt-link to="/study">
            <Back_Button style="margin-left: -125px;margin-bottom: 20px; color: white !important;"></Back_Button>
        </nuxt-link>

        <div>
            <div class="row_button">
                <button class="button" @click="button_click('button1')" ref="button1">-</button>
                <button class="button" @click="button_click('button2')" ref="button2">-</button>
                <button class="button" @click="button_click('button3')" ref="button3">-</button>
            </div>
            <div class="row_button">
                <button class="button" @click="button_click('button4')" ref="button4">-</button>
                <button class="button" @click="button_click('button5')" ref="button5">-</button>
                <button class="button" @click="button_click('button6')" ref="button6">-</button>
            </div>
            <div class="row_button">
                <button class="button" @click="button_click('button7')" ref="button7">-</button>
                <button class="button" @click="button_click('button8')" ref="button8">-</button>
                <button class="button" @click="button_click('button9')" ref="button9">-</button>
            </div>
        </div>

    </div>
</template>

<script>
import Back_Button from '@/components/UI/Back_Button.vue';
import axios from 'axios';
import { useHead } from '@unhead/vue';
export default {
    name: 'cross',
    methods: {
        button_click(ref) {
            if (this.$refs[ref].innerText == '-' && !this.is_win) {
                this.$refs[ref].innerText = this.cross_or_null
                this.cross_or_null = this.cross_or_null == 'x' ? '0' : 'x'
            }
            this.check_winner()
            setTimeout(() => {
                if (this.is_win)
                    alert('Есть победитель!')
            }, 100)

        },
        check_winner() {
            if ((this.$refs.button1.innerText == this.$refs.button2.innerText && this.$refs.button1.innerText != '-') &&
                this.$refs.button2.innerText == this.$refs.button3.innerText)
                return this.is_win = true
            else if ((this.$refs.button4.innerText == this.$refs.button5.innerText && this.$refs.button4.innerText != '-') &&
                this.$refs.button5.innerText == this.$refs.button6.innerText)
                return this.is_win = true
            else if ((this.$refs.button7.innerText == this.$refs.button8.innerText && this.$refs.button7.innerText != '-') &&
                this.$refs.button8.innerText == this.$refs.button9.innerText)
                return this.is_win = true
            else if ((this.$refs.button1.innerText == this.$refs.button4.innerText && this.$refs.button1.innerText != '-') &&
                this.$refs.button4.innerText == this.$refs.button7.innerText)
                return this.is_win = true
            else if ((this.$refs.button2.innerText == this.$refs.button5.innerText && this.$refs.button2.innerText != '-') &&
                this.$refs.button5.innerText == this.$refs.button8.innerText)
                return this.is_win = true
            else if ((this.$refs.button3.innerText == this.$refs.button6.innerText && this.$refs.button3.innerText != '-') &&
                this.$refs.button6.innerText == this.$refs.button9.innerText)
                return this.is_win = true
            else if ((this.$refs.button1.innerText == this.$refs.button5.innerText && this.$refs.button1.innerText != '-') &&
                this.$refs.button5.innerText == this.$refs.button9.innerText)
                return this.is_win = true
            else if ((this.$refs.button3.innerText == this.$refs.button5.innerText && this.$refs.button3.innerText != '-') &&
                this.$refs.button5.innerText == this.$refs.button7.innerText)
                return this.is_win = true
        },
        async send_location(ref, time) {
            axios.post(`http://${this.$config.public.NUXT_APP_BACK_IP}:${this.$config.public.NUXT_APP_BACK_PORT}/send_location`, {
                location: 'game_cross',
                referal: ref,
                time: time
            })
        },
        updateMetaTags() {
            useHead({
                title: 'Крестики-нолики Silver-tech',
                meta: [
                    {
                        name: 'description', content: 'Самая знаменитая игра, можно сыграть с другом на одном компьютере'
                    },
                    {
                        name: 'keywords', content: 'крестики нолики, крестики-нолики, cross or null, крестики-нолики играть, играть, игра'
                    }
                ]
            })
        }

    },
    created() {
        this.updateMetaTags()
    }
    , data() {
        return {
            cross_or_null: 'x',
            is_win: false,
            startTime: 0,
            endTime: 0,
            local_ref: null
        }
    },
    components: {
        Back_Button
    }, mounted() {
        this.startTime = new Date();
        if (localStorage.getItem('ref') != null)
            this.local_ref = localStorage.getItem('ref')
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
.main_container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(57, 55, 55);
}

.button {
    background-color: blue;
    color: white;
    font-size: x-large;
    width: 60px;
    height: 60px;
    border: 0px;
    margin: 10px;
    cursor: pointer;
    border-radius: 8px;
}
</style>