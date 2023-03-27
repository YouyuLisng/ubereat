<template>
    <div class="container-fuild px-3 mt-3">
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
                    <div class="row gy-2 gx-2 mb-4">
                        <div class="col-lg-3 col-md-12 position-relative" v-for="item in ShopData" :key="item.ShopID">
                            <router-link class="d-block" :to="`/store/${item.ShopID}`">
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
                            </router-link>
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
a {
    text-decoration: none;
    color: black;
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
import Menu from './components/ProductMenu.vue'
import axios from 'axios';
import Carousel from './components/CarouseSwiper.vue';
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
                    if (res.data.status === 200) {
                        console.log(res, 'store')
                        ShopData.value = res.data.data
                    }
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
        const get_product_id = function (id) {
            route.push(`store/${id}`)
        }
        onMounted(() => {
            get_allshop()
            get_user()
        })
        return {
            ShopData,
            UserData,
            logout,
            get_product_id,
            isLogin
        }
    },
    components: {
        Menu,
        Carousel,
    }
}
</script>
