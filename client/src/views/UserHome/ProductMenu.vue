<template>
    <div class="container">
        <div class="row">
            <div class="col menu" v-for="item in Menu" :key="item.ID">
                <a href="">
                    <div class="d-flex justify-content-center align-items-center mb-2 img-wrap">
                         <img class="img-fuild menu-icon m-2" :src="'/image/'+item.IMGURL" alt="">
                    </div>
                <div>
                    <p class="text-center">{{ item.title }}</p>
                </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
.img-wrap {
    border-radius: 50%;
}
.menu:hover .img-wrap {
    background-color: #AEF6C7;
}
.menu a {
    text-decoration: none;
    color: #000;
}
.menu-icon {
    width: 60px;
}
</style>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  setup () {
    const Menu = ref([])
    const GetMenu = function () {
      axios.get('http://localhost:3000/menu').then((res) => {
        Menu.value = res.data
        console.log(Menu.value, 'ok')
      })
    }
    GetMenu()
    return {
      Menu
    }
  }
}
</script>
