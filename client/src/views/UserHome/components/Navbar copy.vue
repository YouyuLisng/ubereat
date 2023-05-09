<template>
    <div class="container-fuild px-lg-3 px-md-3 mt-3">
        <div class="row gy-4 justify-content-around">
            <div class="col-lg-1 col-md-2 col-2">
                <button class="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasStart"
                    aria-controls="offcanvasStart">
                    <img class="img-fuild icon" src="../../../image/5135168.png" alt="">
                </button>
                <div class="offcanvas offcanvas-start UserOffcanvas" tabindex="-1" id="offcanvasStart"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-body">
                        <div v-if="isLogin">
                            <div class="d-flex mt-3" style="width: 170px;">
                                <div>
                                    <img style="width: 50px;" class="img-fluid" src="../../../image/64572.png" alt="">
                                </div>
                                <div class="ps-3">
                                    <p v-if="isLogin">{{ UserName }}</p>
                                    <router-link class="check-account" to="/user_edit">檢視帳戶資訊</router-link>
                                </div>
                            </div>
                            <div class="row mt-5 gy-4">
                                <div class="col-12">
                                    <div class="d-flex justify-content-between align-items-center" style="width: 120px;">
                                        <div>
                                            <img class="icon img-fluid" src="../../../image/file-text.svg" alt="">
                                        </div>
                                        <div>
                                            <p class="fw-bold">近期訂單</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="d-flex justify-content-between align-items-center" style="width: 120px;">
                                        <div>
                                            <img class="icon img-fluid" src="../../../image/suit-heart.svg" alt="">
                                        </div>
                                        <div>
                                            <p class="fw-bold">最愛餐廳</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="d-flex justify-content-between align-items-center" style="width: 120px;">
                                        <div>
                                            <img class="icon img-fluid" src="../../../image/wallet2.svg" alt="">
                                        </div>
                                        <div>
                                            <p class="fw-bold">我的錢包</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 text-end">
                                    <button @click="logout" type="button" data-bs-dismiss="offcanvas"
                                        class="btn btn-light">登出</button>
                                </div>
                                <hr>
                                <div class="col-12">
                                    <router-link to="/shop_register" data-bs-dismiss="offcanvas">
                                        <button type="button" class="btn btn-secondary w-100"
                                            data-bs-dismiss="offcanvas">新增您的餐廳</button>
                                    </router-link>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="btn btn-secondary w-100"
                                        data-bs-dismiss="offcanvas">建立企業帳戶</button>
                                </div>
                                <div class="col-12">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div style="width: 100px;">
                                            <div type="button"
                                                class="btn btn-light d-flex justify-content-center align-items-center">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <img class="img-fluid" src="../../../image/apple.svg" alt="">
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
                                                    <img class="img-fluid" src="../../../image/android2.svg" alt="">
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
                                    <router-link to="/user_register">
                                        <button type="button" class="btn btn-dark w-100"
                                            data-bs-dismiss="offcanvas">註冊</button>
                                    </router-link>
                                </div>
                                <div class="col-12">
                                    <router-link to="/user_login" data-bs-dismiss="offcanvas">
                                        <button type="button" class="btn btn-dark w-100"
                                            data-bs-dismiss="offcanvas">登入</button>
                                    </router-link>
                                </div>
                                <div class="col-12">
                                    <router-link to="/shop_register" data-bs-dismiss="offcanvas">
                                        <button type="button" class="btn btn-secondary w-100"
                                            data-bs-dismiss="offcanvas">新增您的餐廳</button>
                                    </router-link>
                                </div>
                                <div class="col-12">
                                    <button type="button" class="btn btn-light w-100"
                                        data-bs-dismiss="offcanvas">建立企業帳戶</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-5 img-fuild d-flex justify-content-center align-items-center">
                <router-link to="/" style="width: 100%;">
                    <img class="img-fluid" src="../../../image/logo_kitahora.svg" alt="">
                </router-link>
            </div>
            <div class="col-lg-1 d-none"></div>
            <div class="col-lg-7 order-last order-lg-1">
                <form style="background-color: #EEEEEE;;"
                    class="d-flex justify-content-evenly align-items-center border rounded-3 border-dark p-1">
                    <div>
                        <svg style="margin: 7px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <input style="background-color: #EEEEEE;;" class="form-control border-0" type="search"
                        placeholder="美食 餐廳 飲料" aria-label="Search">
                </form>
            </div>
            <div class="col-lg-2 col-md-4 col-5 order-lg-3 order-3">
                <div class="" v-if="isLogin">
                    <div class="row align-items-center">
                        <div class="dropdown text-end">
                            <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                                class="shop_car btn btn-dark" v-if="isLogin">
                                <div class="row align-items-center">
                                    <div class="col-lg-12">
                                        <div class="d-flex align-items-center justify-content-around">
                                            <div>
                                                <img class="img-fluid icon" src="../../../image/649931-01.svg" alt="">
                                            </div>
                                            <div>
                                                <p>{{ cartQty }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <ul class="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1">
                                <div @click="click_cart(item)" data-bs-toggle="offcanvas" data-bs-target="#carts-right"
                                    aria-controls="offcanvasRight" class="row px-2 py-2 gx-0 cart-list"
                                    v-for="item in carts" :key="item.ShopID">
                                    <div class="col-3">
                                        <img style="width: 64px; height: 64px;" class="img-fluid rounded-circle"
                                            :src="item.Shop_IMGURL" alt="">
                                    </div>
                                    <div class="col-7">
                                        <p class="title">{{ item.Shop_Name }}</p>
                                        <p class="total">小計：${{ item.Total_Price }}</p>
                                    </div>
                                    <div class="col d-flex align-items-center">
                                        <div class="Total_Quantity">{{ item.Total_Quantity }}</div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-6">
                        <router-link to="/user_register">
                            <button type="button" class="btn btn-dark w-100" data-bs-dismiss="offcanvas">註冊</button>
                        </router-link>
                    </div>
                    <div class="col-6">
                        <router-link to="/user_login">
                            <button type="button" class="btn btn-dark w-100" data-bs-dismiss="offcanvas">登入</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="carts-right" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">購物車</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h4>{{ temp_Cart.Shop_Name }}</h4>
                <div class="d-flex justify-content-between">
                    <div>
                        <p style="font-weight: 500; letter-spacing: 2px;">{{ temp_Cart.Total_Quantity }}項商品</p>
                    </div>
                    <div>
                        <p style="font-weight: 500; letter-spacing: 2px;">小計：＄{{ temp_Cart.Total_Price }}</p>
                    </div>
                </div>
                <hr>
                <div class="product_scroll product-wrap">
                    <div class="row justify-content-around align-items-center" v-for="products in temp_Cart_Prouct">
                        <div class="col-6">{{ products.ProductName }}</div>
                        <div class="col-6">
                            <div class="cart-img text-end">
                                <img :src="products.ProductIMG" alt="">
                            </div>
                        </div>
                        <div class="col-6">
                            <select class="form-select" aria-label="Default select example">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div class="col-6 text-end">
                            <h5>
                                ${{ products.ProductPrice }}
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="row gy-3 pt-3">
                    <div class="col-12">
                        <button style="width: 100%;" type="button" class="btn btn-dark">前往結賬</button>
                    </div>
                    <div class="col-12">
                        <button style="width: 100%;" type="button" class="btn btn-dark">新增商品</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-wrap {
    cursor: pointer;
}
.product_scroll {
    height: 60%;
    overflow-y: auto;
}

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

.UserOffcanvas {
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
    background-image: url(../../../image/suit-heart.svg);
    background-position: center center;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
}

.love:hover {
    background-image: url(../../../image/suit-heart-fill.svg);
}

.check-account {
    cursor: pointer;
    text-decoration: none;
    color: #68A357;
}

.check-account:hover {
    color: #68A357;
}

.dropdown-menu {
    width: 420px !important;
}

.title {
    font-weight: 500;
}

.total {
    font-weight: 300;
}

.Total_Quantity {
    font-weight: 200;
    border-radius: 50%;
    text-align: center;
    width: 24px;
    height: 24px;
    background-color: black;
    color: #fff;
}

.cart-list:hover {
    background-color: #C7D3DD;
    cursor: pointer;
}

.cart-img img {
    width: 50px;
    height: 50px;
}
</style>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios';
export default {
    setup() {
        const route = useRouter()
        const UserName = ref('')
        const isLogin = ref(false)
        const UserID = sessionStorage.getItem('UserID')
        const logout = function () {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            sessionStorage.clear()
            route.push('/user_login')
        }
        // 獲取購物車資料並且儲存
        const carts = ref([])
        const cartQty = ref(null)
        const get_Carts = function () {
            axios.get(`http://localhost:3000/get-Cart?UserID=${UserID}`)
                .then((res) => {
                    if (res.data.status === 200) {
                        carts.value = res.data.data;
                        cartQty.value = carts.value.length;
                    }
                });
        };
        // 點擊購物車商店資訊獲取更詳細的購物產品資訊
        const temp_Cart = ref({})
        const temp_Cart_Prouct = ref([])
        const click_cart = function (value) {
            console.log(value)
            temp_Cart.value = value
            temp_Cart_Prouct.value = value.Products
        }
        onMounted(() => {
            axios.get(`http://localhost:3000/User?UserID=${UserID}`)
                .then((res) => {
                    if (res.data.status === 200) {
                        get_Carts()
                        UserName.value = res.data.data.User_Name
                        isLogin.value = true
                    } else {
                        isLogin.value = false
                    }
                })
                .catch((error) => {
                    console.log(error)
                    isLogin.value = false
                })

        })
        return {
            UserName,
            logout,
            isLogin,
            carts,
            cartQty,
            click_cart,
            temp_Cart,
            temp_Cart_Prouct
        }
    }
}
</script>
