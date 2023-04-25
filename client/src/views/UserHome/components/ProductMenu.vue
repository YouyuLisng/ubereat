<template>
    <div class="container">
        <div class="row-lg d-flex overflow-auto">
            <div class="col-lg menu py-3" v-for="item in Menu" :key="item.ID" style="margin-right: 10px;">
                <a href="">
                    <div class="d-flex justify-content-center align-items-center mb-2 wrap">
                        <img class="img-fuild menu-icon p-2" :src="'/image/' + item.IMGURL" alt="">
                    </div>
                    <div class="menu-text">
                        <p class="text-center">{{ item.title }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
@media (max-width: 960px) {
    .menu-text {
        width: 70px;
    }
}

.wrap img {
    border-radius: 50%;
}

.menu:hover .wrap img {
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
    setup() {
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
