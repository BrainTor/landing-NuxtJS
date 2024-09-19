<template>
    <button class="button_learn">Узнать подробнее</button>
</template>

<script>
    export default {
        name:'Button_more'
    }
</script>

<style scoped>
.button_learn{
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
.button_learn:hover{
    background-color: rgb(30, 181, 30); 
    color: white;  

}
</style>