<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">後台管理</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav justify-content-center align-items-center ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard/shop">商店資訊</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard/product">商品資訊</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard/order">訂單資訊</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard/discount">優惠卷</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard/discount">
                            <img class="icon img-fluid" src="../../image/bell.svg" alt="">
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard/discount">
                            <img class="icon img-fluid" src="../../image/person-circle.svg" alt="">
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <RouterView></RouterView>
</template>
<style>
.icon {
    width: 30px;
    height: 30px;
}
</style>
<script>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const route = useRouter()
        onMounted(() => {
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
            axios.defaults.headers.common.Authorization = token
            axios.post('http://localhost:3000/shop_check').then((res) => {
                if (res.data.status === 200) {
                    console.log(res.data)
                    route.push('/dashboard/shop')
                } else {
                    console.log(res.data.message)
                    route.push('/shop_login')
                }
            })
        })
    }
}
</script>