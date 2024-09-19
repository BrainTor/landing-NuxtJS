<template>
    <div class="nav_bar" v-if="this.what_display">
        <div class="logo" >
            <img src="../assets/img/logo.png" style="width: 40px;" alt="">
            <p class="logo_text">Silver-tech</p>
        </div>

        <div class="info">
            <button class="button_info" @click="handle_change('_about')"><fa icon="circle-info" style="margin-right: 1px;"/> Обо мне</button>
            <button class="button_info" @click="handle_change('_study')"><fa icon="book" /> Обучение</button>
            <button class="button_info" @click="handle_change('_code')"><fa icon="code" /> Разработка</button>
            <button class="button_info button_contact" @click="handle_change('_contact')"><fa icon="address-book" /> Контакты</button>
        </div>
        

        <div class="mobile_nav">
            <h3 style="color: white; font-size: 22px; margin-top: 17px;" @click.prevent="toggleDropdown"><fa icon ="compass"/></h3>
            <ul v-if="isDropdownOpen" class="dropdown-menu">
                <li @click="handle_change('_about')"><a href="#"><fa icon="circle-info" style="margin-right: 1px;"/> Обо мне</a></li>
                <li @click="handle_change('_study')"><a href="#"><fa icon="book" /> Обучение</a></li>
                <li @click="handle_change('_code')"><a href="#"><fa icon="code" /> Разработка</a></li>
                <li @click="handle_change('_contact')"><a href="#"><fa icon="address-book" /> Контакты</a></li>
              </ul>
        </div>
    </div>

    <div class="nav_bar" v-else>
        <div class="logo" >
            <img src="@/assets/img/logo.png" style="width: 40px;" alt="">
            <p class="logo_text">Silver-tech</p>
        </div>

        <div class="info">
            <nuxt-link to="/">
                <button class="button_info"><fa icon="house"  style="margin-right: 3px; margin-top: -20px;" />На главную</button>
            </nuxt-link>
            
            <nuxt-link to="/study">
                <button class="button_info"><fa icon="book" /> Обучение</button>
            </nuxt-link>

            <nuxt-link to = "/code">
                <button class="button_info"><fa icon="code" /> Разработка</button>
            </nuxt-link>

          
            <button class="button_info button_contact" @click="handle_change('_contact')"><fa icon="address-book" /> Контакты</button>
        </div>

        <div class="mobile_nav" >
            <h3 style="color: white; font-size: 22px; "  @click.prevent="toggleDropdown"><fa icon="compass" /></h3>
            <ul v-if="isDropdownOpen" class="dropdown-menu">
                <nuxt-link to="/">
                    <li><a href="#"><fa icon = "house"></fa> На главную</a></li>
                </nuxt-link>
                
                <nuxt-link to="/study">
                    <li ><a href="#"><fa icon="book" /> Обучение</a></li>
                </nuxt-link>
                
                <nuxt-link to="/code">
                    <li ><a href="#"><fa icon="code" /> Разработка</a></li>
                </nuxt-link>
                    <li ><a href="#"><fa icon="address-book" /> Контакты</a></li>

              </ul>
        </div>
    </div>

</template>

<script>
export default {
    name:'Nav_Component',
    methods:{
        handle_change(name){
            this.$emit('scroll_to', name);
            // if(window.length<700)
            // this.isDropdownOpen = !this.isDropdownOpen;
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
    },
    },props:{
        place:String
    },beforeMount(){
        if(this.place != 'main') this.what_display = false
        
    },data(){
        return {
            what_display:true,
            isDropdownOpen: false,
        }
    }
}
</script>

<style scoped>
    .nav_bar{
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--background_nav_bar);
        color: var(--text-color_nav);
        width: 100%;
        opacity: 1;
        z-index: 40;

    }
    .logo_text{
        font-family: "Edu AU VIC WA NT Hand", cursive;
        font-size: 18px;
        font-weight: 700;
        margin-left: 7px;
    }
    .logo{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .button_info{
        background-color: transparent;
        color: var(--text-color_nav);
        font-family: "PT Serif", serif;
        font-size: 18.3px;
        border: 0px;
        cursor: pointer;
        transition:0.3s all;
        margin-left: 0.7rem;
        margin-right: 0.7rem;
        padding: 7px 12px;
        border-radius: 7px;
    }

    .button_contact{ 
        background-color: #d43a63 !important;
        color: rgb(255, 254, 254);
        margin-right: 20px;
    }

    @media (hover: hover) {
        .button_info:hover {
          background-color: var(--hover-color); 
          color: black;
        }
        .button_contact:hover{
            background-color: #c01a46 !important;
            color: white;
        }
      }
      
      @media (hover: none) {
        .button_info:active {
        background-color: var(--hover-color); ; 
        }
        .button_contact:active{
            background-color: #c01a46 !important;
            color: white;
        }
      }
      .mobile_nav{
        display: none;
      }
      
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: calc(100% - 150px) ;
    background-color: #444;
    list-style: none;
    margin: 0;
    padding: 10px 0px;
    min-width: 150px;
    padding-bottom: 20px;
  }
  
  .dropdown-menu li a {
 
    text-decoration: none;
    width: 100%;
    color: white;
  }
  
  .dropdown-menu li {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    color: white;
  }

</style>