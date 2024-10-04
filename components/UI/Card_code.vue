<template>
    <div>
        <img :src = "current_img">
        <div>
            <h2>{{ title_mas [number_picked] }}</h2>
            <p>{{text_mas [number_picked]}}</p>
        </div>
    </div>
</template>

<script>


 export default {
    name:'Card_code',
    data(){
        return {
            img_mas:[

            ],
            title_mas:[

            ],
            text_mas:[

            ]
            ,current_img:''
        }
    },
    props:{
        number_picked:Number
    }
 }


</script>