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
                        <div class="d-flex mt-3" style="width: 170px;">
                            <div>
                                <img width="50px" height="50px" class="img-fluid" src="../../image/64572.png" alt="">
                            </div>
                            <div class="ps-3">
                                <p>梁</p>
                                <a href="#" class="check-account">檢視帳戶資訊</a>
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
                                <button type="button" class="btn btn-light">登出</button>
                            </div>
                            <hr>
                            <div class="col-12">
                                <button type="button" class="btn btn-light">新增您的餐廳</button>
                            </div>
                            <div class="col-12">
                                <button type="button" class="btn btn-light">建立企業帳戶</button>
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
                </div>
            </div>
            <div class="col-lg-2 col-6 img-fuild d-flex justify-content-center align-items-center">
                <img src="../../image/logo_kitahora.svg" alt="">
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
            <div class="col-lg-2 col-3 order-lg-3 order-3">
                <button type="button" class="shop_car btn btn-dark float-end rounded-pill">
                    <div class="row align-items-center">
                        <div class="col-lg-4">
                            <img class="img-fluid icon" src="../../image/649931-01.svg" alt="">
                        </div>
                        <div class="col-lg-8">
                            <p class="d-none d-lg-block">購物車</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
        <div class="mt-3 mt-lg-5">
            <Menu></Menu>
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
                        <div class="col-lg-4 col-md-12 position-relative">
                            <div class="shop-img position-relative">
                                <img class="img-fluid"
                                    src="/image/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTVmY2IzMzU5Njk5YmJkNDJjZDBiNTVkOThlMmQwYTUvYTcwZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==.webp"
                                    alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                            <div class="mt-3">
                                <p>麥當勞 台中學士 McDonald's S32 <br>
                                    20 TWD 費用
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 position-relative">
                            <div class="shop-img position-relative">
                                <img class="img-fluid" src="/image/suisi.jpg" alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                            <div class="mt-3">
                                <p>爭鮮壽司 台中中友 <br>
                                    20 TWD 費用
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 position-relative">
                            <div class="shop-img position-relative">
                                <img class="img-fluid"
                                    src="/image/8srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mNWMyMzE1OS0xNmU0LTRkMTItOTFlNy1lMmYxZWZjMjU5YTguanBlZw==.webp"
                                    alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                            <div class="mt-3">
                                <p>友品 溫州大餛鈍 <br>
                                    25 TWD 費用
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 position-relative">
                            <div class="shop-img position-relative">
                                <img class="img-fluid"
                                    src="/image/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTVmY2IzMzU5Njk5YmJkNDJjZDBiNTVkOThlMmQwYTUvYTcwZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==.webp"
                                    alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                            <div class="mt-3">
                                <p>麥當勞 台中學士 McDonald's S32 <br>
                                    20 TWD 費用
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 position-relative">
                            <div class="shop-img position-relative">
                                <img class="img-fluid" src="/image/suisi.jpg" alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                            <div class="mt-3">
                                <p>爭鮮壽司 台中中友 <br>
                                    20 TWD 費用
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 position-relative">
                            <div class="shop-img position-relative">
                                <img class="img-fluid"
                                    src="/image/8srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mNWMyMzE1OS0xNmU0LTRkMTItOTFlNy1lMmYxZWZjMjU5YTguanBlZw==.webp"
                                    alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                            <div class="mt-3">
                                <p>友品 溫州大餛鈍 <br>
                                    25 TWD 費用
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 position-relative">
                            <div class="shop-img position-relative">
                                <img class="img-fluid"
                                    src="/image/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTVmY2IzMzU5Njk5YmJkNDJjZDBiNTVkOThlMmQwYTUvYTcwZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==.webp"
                                    alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                            <div class="mt-3">
                                <p>麥當勞 台中學士 McDonald's S32 <br>
                                    20 TWD 費用
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 position-relative">
                            <div class="shop-img position-relative">
                                <img class="img-fluid" src="/image/suisi.jpg" alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                            <div class="mt-3">
                                <p>爭鮮壽司 台中中友 <br>
                                    20 TWD 費用
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 position-relative">
                            <div class="shop-img position-relative">
                                <img class="img-fluid"
                                    src="/image/8srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mNWMyMzE1OS0xNmU0LTRkMTItOTFlNy1lMmYxZWZjMjU5YTguanBlZw==.webp"
                                    alt="Responsive image">
                            </div>
                            <div class="btn border-0 position-absolute top-0 end-0 love">
                            </div>
                            <div class="mt-3">
                                <p>友品 溫州大餛鈍 <br>
                                    25 TWD 費用
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

<style>
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
    top: -30%;
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
import { ref, onMounted, watch } from 'vue'
import Menu from './ProductMenu.vue'
import Carousel from './CarouselSwiper.vue';
export default {
    setup() {
    },
    components: {
        Menu,
        Carousel
    }
}
</script>
