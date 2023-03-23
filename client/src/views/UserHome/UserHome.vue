<template>
    <div class="container-fuild px-3 mt-3">
        <div class="row gy-4">
            <div class="col-lg-1 col-3">
                <button class="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
                    <img class="img-fuild icon" src="../../image/5135168.png" alt="">
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-body">
                        <div v-if="isLogin">
                            <div class="d-flex mt-3" style="width: 170px;">
                                <div>
                                    <img style="width: 50px;" class="img-fluid" src="../../image/64572.png" alt="">
                                </div>
                                <div class="ps-3">
                                    <p>{{ UserData.User_Name }}</p>
                                    <router-link class="check-account" to="/user_edit">檢視帳戶資訊</router-link>
                                </div>
                            </div>
                            <div class="row mt-5 gy-4">
                                <div class="col-12">
                                    <div class="d-flex justify-content-between align-items-center" style="width: 120px;">
                                        <div>
                                            <img class="icon img-fluid" src="../../image/file-text.svg" alt="">
                                        </div>
                                        <div>
                                            <p class="fw-bold">近期訂單</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="d-flex justify-content-between align-items-center" style="width: 120px;">
                                        <div>
                                            <img class="icon img-fluid" src="../../image/suit-heart.svg" alt="">
                                        </div>
                                        <div>
                                            <p class="fw-bold">最愛餐廳</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="d-flex justify-content-between align-items-center" style="width: 120px;">
                                        <div>
                                            <img class="icon img-fluid" src="../../image/wallet2.svg" alt="">
                                        </div>
                                        <div>
                                            <p class="fw-bold">我的錢包</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 text-end">
                                    <button @click="logout" type="button" class="btn btn-light">登出</button>
                                </div>
                                <hr>
                                <div class="col-12">
                                    <router-link class="btn btn-secondary w-100" to="/shop_register">新增您的餐廳</router-link>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="btn btn-secondary w-100">建立企業帳戶</button>
                                </div>
                                <div class="col-12">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div style="width: 100px;">
                                            <div type="button"
                                                class="btn btn-light d-flex justify-content-center align-items-center">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <img class="img-fluid" src="../../image/apple.svg" alt="">
                                                </div>
                                                <div>
                                                    Apple
                                                </div>
                                            </div>
                                        </div>
                                        <div style="width: 100px;">
                                            <div type="button"
                                                class="btn btn-light d-flex justify-content-center align-items-center">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <img class="img-fluid" src="../../image/android2.svg" alt="">
                                                </div>
                                                <div>
                                                    Android
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="row gy-3">
                                <div class="col-12">
                                    <router-link class="btn btn-dark w-100" to="/user_register">註冊</router-link>
                                </div>
                                <div class="col-12">
                                    <router-link class="btn btn-secondary w-100" to="/user_login">登入</router-link>
                                </div>
                                <div class="col-12">
                                    <router-link class="btn btn-secondary w-100" to="/shop_register">新增您的餐廳</router-link>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="btn btn-light w-100">建立企業帳戶</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-4 img-fuild d-flex justify-content-center align-items-center">
                <img class="img-fuild" src="../../image/logo_kitahora.svg" alt="">
            </div>
            <div class="col-lg-1 d-none d-lg-block"></div>
            <div class="col-lg-6 order-last order-lg-1">
                <form class="d-flex justify-content-evenly align-items-center border rounded-3 border-dark p-1">
                    <div>
                        <svg style="margin: 7px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <input class="form-control border-0" type="search" placeholder="美食 餐廳 飲料" aria-label="Search">
                </form>
            </div>
            <div class="col-lg-2 col-5 order-lg-3 order-3">
                <button type="button" class="shop_car btn btn-dark float-end rounded-pill" v-if="isLogin">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                                <img class="img-fluid icon" src="../../image/649931-01.svg" alt="">
                            </div>
                            <div class="col-lg-8">
                                <p class="d-none d-lg-block">購物車</p>
                            </div>
                    </div>
                </button>
                <div class="row" v-else>
                    <div class="col-6">
                        <router-link class="btn btn-dark w-100" to="/user_register">註冊</router-link>
                    </div>
                    <div class="col-6">
                        <router-link class="btn btn-dark w-100" to="/user_login">登入</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3 mt-lg-5">
            <Menu></Menu>
            <hr>
        </div>
        <div class="mt-5">
            <Carousel></Carousel>
        </div>
        <section class="container mt-5" style="height: 300px;">
            <div class="row">
                <div class="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
                    <h2 class="fs-2 pb-3">所有餐廳門市</h2>
                    <div>
                        <div class="dropdown">
                            <div style="width: 70%;" class="btn-light d-flex justify-content-between align-items-center"
                                type="button">
                                <div>分類</div>
                            </div>
                            <ul class="border-0 ps-1 pt-3" aria-labelledby="dropdownMenuButton1">
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                        id="flexRadioDefault" checked>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        熱門餐廳
                                    </label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                        id="flexRadioDefault">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        評分點數
                                    </label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                        id="flexRadioDefault">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        配送時間
                                    </label>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-9 col-12">
                    <div class="row gy-2 gx-2">
                        <div class="col-lg-3 col-md-12 position-relative" v-for="item in ShopData" :key="item.ShopID">
                            <div class="shop-img position-relative">
                                <img class="img-fluid" :src="item.Shop_IMGURL" alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                            <div class="mt-3">
                                <p>{{ item.Shop_Name }}<br>
                                    {{ item.Shop_delivery }} TWD 費用
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-2">
                        <button type="button" class="btn btn-dark">顯示更多餐廳</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
p {
    margin-bottom: 0;
}

.icon {
    width: 30px;
    height: 30px;
}

@media(min-width: 768px) {
    .shop_car {
        width: 150px;
    }
}

.offcanvas {
    width: 300px !important;
}

.form-control:focus {
    box-shadow: #fff !important
}

.form-check-input {
    margin-right: 1em;
    width: 20px;
    height: 20px;
}

.shop-img {
    overflow: hidden;
    height: 150px;
    background-repeat: no-repeat;
    background-position: center;
}

.shop-img img {
    position: absolute;
}

@media(max-width: 960px) {
    .shop-img img {
        top: -70%;
    }
}

@media(max-width: 575px) {
    .shop-img img {
        top: -45%;
    }
}

.love {
    background-image: url(../../image/suit-heart.svg);
    background-position: center center;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
}

.love:hover {
    background-image: url(../../image/suit-heart-fill.svg);
}

.check-account {
    cursor: pointer;
    text-decoration: none;
    color: #68A357;
}

.check-account:hover {
    color: #68A357;
}
</style>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Menu from './ProductMenu.vue'
import axios from 'axios';
import Carousel from './CarouselSwiper.vue';
export default {
    setup() {
        const route = useRouter()
        const ShopData = ref([])
        const UserData = ref({
            User_Name: ''
        })
        const isLogin = ref(false)
        const UserID = sessionStorage.getItem('UserID')
        const get_allshop = function () {
            axios.get('http://localhost:3000/all-shop')
                .then((res) => {
                    console.log(res)
                    ShopData.value = res.data.data
                })
        }
        const get_user = function () {
            console.log(UserID)
            axios.get(`http://localhost:3000/User?UserID=${UserID}`)
                .then((res) => {
                    if (res.data.status === 200) {
                        console.log(res.data)
                        UserData.value = res.data.data
                        isLogin.value = true
                    } else {
                        isLogin.value = false
                    }
                })
        }
        const logout = function () {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            sessionStorage.clear()
            route.push('/user_login')
        }
        onMounted(() => {
            get_allshop()
            get_user()
        })
        return {
            ShopData,
            UserData,
            logout,
            isLogin
        }
    },
    components: {
        Menu,
        Carousel,
    }
}
</script>
