<template>
    <div class="container-fluid border-bottom">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Uber Eat Mananger</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Help</a>
                        </li>
                        <li class="nav-item">
                            <a @click="logout" class="nav-link" href="#">Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <section class="container-fluid">
        <div style="height: 100vh;" class="row">
            <div class="col-2 border-end border-dark border-3 p-1">
                <div class="row gy-4 m-0">
                    <div class="col-12">
                        <router-link class="nav-link" to="/dashboard/home">
                            <div class="d-flex justify-content-center side_menu_wrap">
                                <div class="side_icon pe-3">
                                    <img src="../../image/home.png" alt="">
                                </div>
                                <div>
                                    <p style="line-height: 30px; font-size: 18px;">首頁</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-12">
                        <router-link class="nav-link" to="/">
                            <div class="d-flex justify-content-center side_menu_wrap">
                                <div class="side_icon pe-3">
                                    <img src="../../image/order.png" alt="">
                                </div>
                                <div>
                                    <p style="line-height: 30px; font-size: 18px;">訂單</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-12">
                        <router-link class="nav-link" to="/dashboard/product/product-list">
                            <div class="d-flex justify-content-center side_menu_wrap">
                                <div class="side_icon pe-3">
                                    <img src="../../image/fork.png" alt="">
                                </div>
                                <div>
                                    <p style="line-height: 30px; font-size: 18px;">菜單</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-10">
                <RouterView></RouterView>
            </div>
        </div>
    </section>
</template>
<style>
p {
    margin-bottom: 0;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: black;
}

.side_icon img {
    width: 30px;
    height: 30px;
}
.product-menu {
    max-width: 350px;
    padding: 0;
}

.product-menu li {
    font-size: 18px;
}
.side_menu_wrap {
    max-width: 150px;
}
</style>
<script>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const route = useRouter()
        let Shop_ManagerID = null
        onMounted(() => {
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
            axios.defaults.headers.common.Authorization = token
            axios.post('http://localhost:3000/shop_check').then((res) => {
                if (res.data.status === 200) {
                    console.log(res.data)
                    sessionStorage.setItem('Shop_ManagerID', res.data.Shop_ManagerID)
                    Shop_ManagerID = sessionStorage.getItem('Shop_ManagerID')
                    axios.get(`http://localhost:3000/shop/?Shop_ManagerID=${Shop_ManagerID}`)
                        .then((res) => {
                            sessionStorage.setItem('Shop_ID', res.data.data.ShopID)
                            route.push('/dashboard/home')
                        })
                } else {
                    console.log(res.data.message)
                    sessionStorage.clear()
                    route.push('/shop_login')
                }
            }).catch(() => {
                sessionStorage.clear()
                document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;'
                route.push('/shop_login')
            })
        })
        const logout = function () {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            sessionStorage.clear()
            route.push('/shop_login')
        }
        return {
            logout
        }
    }
}
</script>